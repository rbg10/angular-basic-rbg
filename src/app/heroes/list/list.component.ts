import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroeList: string[] = ['Batman','Spiderman','Hulk','Flash','Robin'];
  public deletedHero?: string;

  handleRemoveLastHero(): void {
    this.deletedHero= this.heroeList.pop();
  }

}
