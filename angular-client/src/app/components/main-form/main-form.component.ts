import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  extensionActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleNavEvent($event: string): void {
    if ($event === 'expand') {
      this.extensionActive = !this.extensionActive;
    }
  }
}
