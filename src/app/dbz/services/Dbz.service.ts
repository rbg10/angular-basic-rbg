import { Injectable } from '@angular/core';
import {v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  // constructor() { }
  public characters: Character[] =[
    {
      uuid: uuid(),
      name:'Krillin',
      power:1000
    },
    {
      uuid: uuid(),
      name:'Yamsha',
      power:100
    },
    {
      uuid: uuid(),
      name:'Vegeta',
      power:8000
    }
  ]

  onNewCharacter(character: Character){

    const newCharacter: Character ={...character, uuid:uuid()};
    // newCharacter.uuid=uuid();

    this.characters.push(newCharacter);

  }

  onDeleteId(index:string){
    console.log('index',index);

    this.characters= this.characters.filter(n=> n.uuid!=index);
  }

}
