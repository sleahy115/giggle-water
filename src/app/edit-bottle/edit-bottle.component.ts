import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bottle } from '../bottle.model';

@Component({
  selector: 'app-edit-bottle',
  templateUrl: './edit-bottle.component.html',
  styleUrls: ['./edit-bottle.component.css']
})

export class EditBottleComponent implements OnInit {
  @Input() childSelectedBottle: Bottle;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
