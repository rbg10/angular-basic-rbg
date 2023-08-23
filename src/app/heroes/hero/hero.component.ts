import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:  string ='ironman';
  public age:   number =30;

  get capitalizeName():string {
     return this.name.toUpperCase();
  }

  getDescriptionHero():string {
    return `${this.capitalizeName } - ${this.age}`
  }

  handleChangeHero(): void {
     this.name='Batman';
  }

  handleChangeAge(): void {
    this.age=25;
  }

  resetData(): void {
    this.name='ironman';
    this.age = 30;
  }

}
