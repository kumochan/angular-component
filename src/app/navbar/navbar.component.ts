// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item!: string; // decorate the property with @Input()

  // @Output() newvalue: any = new EventEmitter;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}