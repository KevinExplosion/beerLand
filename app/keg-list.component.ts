import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';

//This is a child of the app component
//once it's working, it will be moved to its own file
@Component({
    selector: 'keg-list',
  //tells component which kegs to display
    //sets inputs equal to an array with one string in it 'kegList'
    inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent],
  templateUrl: 'app/keg-list.component.html'
})
export class KegListComponent {
  public kegList: Keg[]; //defines a public property (kegList) to hold an array of Keg models
  public onKegSelect: EventEmitter<Keg>; //public property for child component's output
  public selectedKeg: Keg; //keeps track of which keg obj was clicked last
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
}
//<keg-list> is the component selector, and will be loaded in the parent template (AppComponent)
  //This template now holds the *ngFor loop
