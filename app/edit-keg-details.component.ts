import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <hr>
  <h3>Edit Name: </h3>
  <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-form"/>
  <h3>Edit Description: </h3>
  <input [(ngModel)]="keg.description" class="col-sm-8 input-lg keg-form"/>
  <h3>Edit Volume: </h3>
  <input [(ngModel)]="keg.volume" type="number" max="124" min="0" class="col-sm-8 input-lg keg-form"/>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
