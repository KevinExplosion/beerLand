//this is a MODEL
  //declares a CLASS
    //holds PROPERTIES
export class Keg {
  //properties OUTSIDE parends will be applied universally to all objects
    //things like empty, instock, done or not done, etc
  public empty: boolean = false

  //properties INSIDE parends are unique to each object
  constructor(public brand: string, public price: number, public abv: number, public id: number) {}
}
