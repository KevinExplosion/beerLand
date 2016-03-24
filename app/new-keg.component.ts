import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h3>New Keg</h3>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
    constructor(){
      this.onSubmitNewKeg = new EventEmitter();
    }
}
