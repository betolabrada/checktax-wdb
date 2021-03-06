import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vd-nav',
  templateUrl: './vd-nav.component.html',
  styleUrls: ['./vd-nav.component.scss']
})
export class VdNavComponent implements OnInit {
  navActive = false;

  @Output() navChanged = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  onClickItem($event: string): void {
    this.navChanged.emit($event);
  }

  onOutsideClick(): void {
    if (this.navActive) {
      this.navActive = !this.navActive;
    }
  }

}
