import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';


//This is a parent of the app component
//once it's working, it will be moved to its own file
@Component({
  selector: 'keg-list',
  //tells component which kegs to display
    //sets inputs equal to an array with one string in it 'kegList'
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
  <h3 *ngFor="#currentKeg of kegList"
   (click)="kegClicked(currentKeg)"
   [class.selected]="currentKeg === selectedKeg">
    {{ currentKeg.brand }}
  </h3>
  `
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

//component annotation (also called a DECORATOR)
  //the HTML area in green is also known as THE VIEW
    //The view has access to class&properties from Controller Class (such as keg.brand)
@Component({
  selector: 'my-app',
  directives: [KegListComponent],  //array list; loads child components
  template: `
  <div class="container">
    <h1>Beer Land App!</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
  </div>
  `
})
//class decloration and/or (component)CONTROLLER CLASS DEFINITION
  //The component's class declaration holds the data and methods needed to make the template HTML functional.
export class AppComponent {

  //create a public property that will call your model class
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Newcastle Brown Ale", 180, 4, 0),
      new Keg("Montucky Cold Snack", 150, 3, 1),
      new Keg("Yuengling", 200, 4.2, 2),
      new Keg("Tucher", 180, 4, 3)
    ];
    //"kegs" sets a public property = to an empty array called Keg
      //"this.kegs = [content]" creates an array of object
  }

//adding an EVENT EMITTER(handles DOM interaction) to The View
  //FIRST: add "output binding" to the HTML tag (click)="kegWasSelected(keg)"
    //(DO WHAT'S IN HERE) = "ThisIsWhatYou'reDoing(ThisIsWhatYouDoItTo)"
      //The : void means that the function is expected to not return anything.
  kegWasSelected(clickedKeg: Keg): void {

    //"kegWasSelected" is just a method name. It can be anything, as long as it is the same down here as it is in The View.
      //"clickedKeg" can ALSO be anything. As long as it matches the output below (in this case, console.log). in the above method (Keg) is what you're passing into clickedKeg, and kegWasSelected is what will run on the (click) in The View
    console.log('parent', clickedKeg);
  }
}


//NOTESNOTESNOTESNOTESNOTESNOTESNOTESNOTES

//The [ ] square brackets indicate a component input.

//The ( ) parenthesis define an output coming from their component, such as (click)="kegClicked(currentKeg)
