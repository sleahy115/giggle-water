import { Component } from '@angular/core';
import { Bottle } from './bottle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Giggle Water!';

  masterBottleList: Bottle[] = [
    new Bottle('Pinnacle', 15, 3, 40, 'Pinnacle', 34, 'Whipped Cream', 'Pink', 'Vodka'),
    new Bottle('Big Gin', 25, 5, 40, 'Big Gin', 34, 'Botanical', 'Green', 'Gin'),
    new Bottle('Monopolowa', 18, 4, 40, 'Monopolowa Portland', 34, 'None', 'White', 'Vodka')
  ]
}
