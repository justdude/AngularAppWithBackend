import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class financeStateService {

  private stageMessage = new BehaviorSubject(false);
    currentStageMessage = this.stageMessage.asObservable();

  constructor() {

  }

  updateState(success: boolean) {
    this.stageMessage.next(success)
  }
}
