import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Add a new Keg:</h3>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Price" class="col-sm-8 input-md" #newPrice>
    <input placeholder="ABV%" class="col-sm-8 input-sm" #newAbv>
    <input placeholder="Description" class="col-sm-8 input-md" #newDescription>
    <button (click)="addKeg(newBrand, newPrice, newAbv, newDescription)">Add</button>
  </div>
  `
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
