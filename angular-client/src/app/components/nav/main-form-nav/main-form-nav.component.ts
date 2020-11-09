import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-form-nav',
  templateUrl: './main-form-nav.component.html',
  styleUrls: ['./main-form-nav.component.scss']
})
export class MainFormNavComponent implements OnInit {

  @Output() navEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitNavEvent(event: string): void {
    this.navEvent.emit(event);
  }

}
