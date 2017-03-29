import { Component, OnInit, Input } from '@angular/core';
import { Bottle } from '../bottle.model';

@Component({
  selector: 'app-bottle-list',
  templateUrl: './bottle-list.component.html',
  styleUrls: ['./bottle-list.component.css']
})
export class BottleListComponent implements OnInit {
  @Input() childBottleList:Bottle[];


  constructor() { }

  ngOnInit() {
  }


}
