import { Component } from 'angular2/core';
import { Keg } from './keg.model';

  @Component({
      selector: 'keg-display',
      inputs: ['keg'],
    template:`
  <h3>{{ keg.brand }}</h3>
  <h4>{{ keg.description }}</h4>
    `
  })
  export class KegComponent {
    public keg: Keg;
  }
