import { Component } from '@angular/core';
import { Bottle } from './bottle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Giggle Water!';
  selectedBottle = null;

  masterBottleList: Bottle[] = [
    new Bottle('Pinnacle', 15, 3, 40, 'Pinnacle', 30, 'Whipped Cream', 'Pink', 'Vodka'),
    new Bottle('Big Gin', 25, 5, 40, 'Big Gin', 20, 'Botanical', 'Green', 'Gin'),
    new Bottle('Monopolowa', 18, 4, 40, 'Monopolowa Portland', 32, 'None', 'White', 'Vodka')
  ];



  addBottle(newBottleFromChild: Bottle) {
    this.masterBottleList.push(newBottleFromChild);
  }

  editBottle(clickedBottle) {
  this.selectedBottle = clickedBottle;
}

  finishedEditing() {
    this.selectedBottle = null;
  }

  // onChange(optionFromMenu) {
  //   this.optionFromMenu = this.selectedBottle;
  // }
}
