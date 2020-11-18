import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OperacionService } from '../../../services/operacion/operacion.service';
import { LoadingService } from '../../../services/loading/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-form-nav',
  templateUrl: './main-form-nav.component.html',
  styleUrls: ['./main-form-nav.component.scss']
})
export class MainFormNavComponent implements OnInit {

  saving: boolean;
  loading: Subscription;
  @Output() navEvent = new EventEmitter<string>();

  constructor(private operacionService: OperacionService,
              private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loading = this.loadingService.loading$.subscribe((loading) => {
      this.saving = loading;
    });
  }

  emitNavEvent(event: string): void {
    if (!this.saving) {
      if (event === 'save') {
        this.operacionService.saveOperacion();
      } else {
        this.navEvent.emit(event);
      }
    }
  }

}
