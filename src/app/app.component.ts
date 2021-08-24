import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count: number;

  constructor() {
    this.count = 0;
   }

   plus1(): void{
    console.log('plus 1');
    this.count++;
   }

   moins1(): void{
    console.log('plus 1');
    this.count--;
   }
}
