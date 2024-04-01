import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private lessonID: BehaviorSubject<any> = new BehaviorSubject<any>({ id: 0 });

  getLessonID() {
    return this.lessonID.asObservable();
  }

  updateLessonID(newValue: any) {
    this.lessonID.next(newValue);
  }
}
