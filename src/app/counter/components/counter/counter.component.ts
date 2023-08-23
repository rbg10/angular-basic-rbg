import { Component } from '@angular/core';

@Component(
  {
    selector:"app-contador",
    template:`
      <h3>
        contador: {{counter}}
      </h3>
      <button (click)="increaseBy(1)">+1</button>
      <button (click)="reset()">reset</button>
      <button (click)="increaseBy(-1)">-1</button>

    `
  }
)

export class CounterComponent {
  public counter: number =0;


  increaseBy (value: number) :void{
    this.counter +=value;
  }

  reset (): void {
    this.counter=0;
  }
}
