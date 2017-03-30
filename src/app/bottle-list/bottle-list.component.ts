import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bottle } from '../bottle.model';

@Component({
  selector: 'app-bottle-list',
  templateUrl: './bottle-list.component.html',
  styleUrls: ['./bottle-list.component.css']
})
export class BottleListComponent implements OnInit {
  @Input() childBottleList:Bottle[];
  @Output() clickSender = new EventEmitter();

  selectedBottle: Bottle = null;
  showBottle: Bottle = null;
  filterByShotsLeft: string ="allBottles";

  editButtonHasBeenClicked(bottleToEdit: Bottle) {
    this.clickSender.emit(bottleToEdit);
  }

  showBottleDetails(currentBottle) {
    this.showBottle = currentBottle;
  }
  hideBottleDetails(currentBottle) {
    this.showBottle = null;
  }

  shotSold(currentBottle) {
    for(var i =0; i<this.childBottleList.length; i++){
      if(this.childBottleList[i].brand === currentBottle.brand) {
        currentBottle.shots = currentBottle.shots -1;
      }
    }
  }

  shotColor(currentBottle) {
    if(currentBottle.pricePerShot >= 5) {
      return "expensive";
    } else if (currentBottle.pricePerShot === 4) {
      return "regular";
    } else {
      return "cheap";
    }
  }

  onChange(optionFromMenu) {
    this.filterByShotsLeft = optionFromMenu;
  }

  constructor() { }

  ngOnInit() {
  }


}
