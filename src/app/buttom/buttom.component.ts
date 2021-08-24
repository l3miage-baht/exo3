import { Component, OnInit, NgModule, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss']
})
export class ButtomComponent implements OnInit {

  @Input() label: string;
  @Output() plus = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  incrementation(): void{
    this.plus.emit();
  }

  decrementation(): void{
    this.plus.emit();
  }

}
