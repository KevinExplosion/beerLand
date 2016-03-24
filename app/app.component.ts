///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

//component annotation (also called a DECORATOR)
  //the HTML area in green is also known as THE VIEW
    //The view has access to class&properties from Controller Class (such as keg.brand)
@Component({
    selector: 'my-app',
    directives: [KegListComponent],  //array list; loads child components
  templateUrl: 'app/app.component.html'
})
//class decloration and/or (component)CONTROLLER CLASS DEFINITION
  //The component's class declaration holds the data and methods needed to make the template HTML functional.
export class AppComponent {

  //create a public property that will call your model class
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Newcastle Brown Ale", 180, 4, "Delicious dark beer, dude", 0),
      new Keg("Montucky Cold Snack", 150, 3, "Cold, refreshing, yumness", 1),
      new Keg("Yuengling", 200, 4.2, "Good old, east coast favorite", 2),
      new Keg("Tucher", 180, 4, "Who cares? Chug!", 3)
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
