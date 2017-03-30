import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bottle } from '../bottle.model';

@Component({
  selector: 'app-new-bottle',
  templateUrl: './new-bottle.component.html',
  styleUrls: ['./new-bottle.component.css']
})
export class NewBottleComponent implements OnInit {
  @Output() newBottleSender = new EventEmitter();

  submitForm(brand: string,  pricePerBottle: number,  pricePerShot: number,  proof: number,  distillery: string,  shots: number,  flavor: string,  color: string,  alcoholType: string) {
      var newBottleToAdd: Bottle = new Bottle(brand,  pricePerBottle,  pricePerShot,  proof,  distillery,  shots,  flavor,  color,  alcoholType);
      this.newBottleSender.emit(newBottleToAdd);

  }

  constructor() { }

  ngOnInit() {
  }

}