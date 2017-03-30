import { Pipe, PipeTransform } from '@angular/core';
import { Bottle } from './bottle.model';

@Pipe({
  name: 'shotsLeft',
  pure: false
})
export class ShotsLeftPipe implements PipeTransform {

  transform(input: Bottle[], desiredShots) {
    var output: Bottle[] = [];
    if(desiredShots === "lessThanTen") {
      for(var i = 0; i< input.length; i++) {
        if(input[i].shots <= 10){
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredShots === "greaterThanTen") {
      for(var i = 0; i< input.length; i++) {
        if(input[i].shots > 10){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
