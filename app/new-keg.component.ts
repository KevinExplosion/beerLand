import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  templateUrl: 'app/new-keg.component.html'
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<any>;
    constructor(){
      this.onSubmitNewKeg = new EventEmitter();
    }
    addKeg(userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAbv: HTMLInputElement, userDescription: HTMLInputElement){
      var kegArray: Array<any> = [userBrand.value, userPrice.value, userAbv.value, userDescription.value];

      this.onSubmitNewKeg.emit(kegArray);

      userBrand.value = "";
      userPrice.value = "";
      userAbv.value = "";
      userDescription.value = "";
  }
}
