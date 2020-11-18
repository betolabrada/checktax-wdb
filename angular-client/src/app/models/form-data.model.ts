import { OperacionService } from '../services/operacion/operacion.service';

export class FormDataModel {
  public constructor(public operacionService: OperacionService) {}
  public update(key: string, event: Event): void {
    this.operacionService.modify(key, (event.target as HTMLInputElement).value);
  }
}
