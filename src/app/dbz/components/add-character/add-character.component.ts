import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
    uuid:'',
    name:'',
    power:0
  }

  sendCharacter():void {
    console.log(this.character);

    if(this.character.name.length ==0) return;

    this.onNewCharacter.emit(this.character);

    this.character={uuid:'',name:'',power:0}

  }

}
