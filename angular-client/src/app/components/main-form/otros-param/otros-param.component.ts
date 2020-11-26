import { Component, OnInit } from '@angular/core';
import { Impuesto, SeguroAuto } from '../../../models/otros.model';
import { OtrosService } from '../../../services/otros/otros.service';

@Component({
  selector: 'app-otros-param',
  templateUrl: './otros-param.component.html',
  styleUrls: ['./otros-param.component.scss']
})
export class OtrosParamComponent implements OnInit {

  constructor(private otrosService: OtrosService) { }

  ngOnInit(): void {
  }

  update(model: string, key: string, $event: Event): void {
    const inputEl: HTMLInputElement = $event.target as HTMLInputElement;
    if (inputEl.type === 'checkbox') {
      console.log(inputEl.checked);
      this.otrosService.modify(model, key, inputEl.checked);
    } else {
      this.otrosService.modify(model, key, inputEl.value);
    }
  }
}
