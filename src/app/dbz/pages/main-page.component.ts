import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/Dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private DbzService: DbzService){}

  get characters(): Character[] {
    return [...this.DbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.DbzService.onDeleteId(id);
  }

  onNewCharacter(character: Character): void {
    this.DbzService.onNewCharacter(character);
  }

}
