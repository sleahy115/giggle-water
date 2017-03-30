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

  editButtonHasBeenClicked(bottleToEdit: Bottle) {
    this.clickSender.emit(bottleToEdit);
  }

  showBottleDetails(currentBottle) {
    this.showBottle = currentBottle;
  }

  constructor() { }

  ngOnInit() {
  }


}
