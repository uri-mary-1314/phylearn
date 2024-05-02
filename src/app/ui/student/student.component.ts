import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LessonComponent } from './lesson/lesson.component';
import { ExamsComponent } from './exams/exams.component';
import { PracticComponent } from './practic/practic.component';
import { ManipulateComponent } from './manipulate/manipulate.component';
import { ExamsService } from 'src/app/services/exams.service';
import { ActivatedRoute } from '@angular/router';

const keyStep = 'key-step'
const API_LESSON = new Map<number, string> ([
  [1, "three-law.txt"],
  [2, "force.txt"],
])

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  activeComponent:any = LessonComponent;
  step!: number;
  id!: number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.step = sessionStorage.getItem(keyStep) ? Number(sessionStorage.getItem(keyStep)) : 1;
    this.activeComponent = this.changeComponent();
    sessionStorage.setItem(keyStep, String(this.step))
  }
  constructor(
    private service: ExamsService,
    private route: ActivatedRoute
  ) { }
  nextStep() {
    this.step++;
    if (this.step === 4 && this.id === 1) {
      return;
    }
    else if (this.id === 2 && this.step === 3) {
      this.step--;
      return;
    }
    else {
      // this.step++;
      this.activeComponent = this.changeComponent();
      sessionStorage.setItem(keyStep, String(this.step))
    }
    console.log(this.step)
  }

  preStep() {
    if (this.step === 1) {
      return;
    }
    else {
      this.step--;
      this.activeComponent = this.changeComponent();    
      sessionStorage.setItem(keyStep, String(this.step))
    }
    console.log(this.step)
  }

  changeComponent() {
    switch(this.step) {
      case 1: return LessonComponent
      case 2: return PracticComponent
      case 3: {
        this.service.fileExists(`./assets/data/manipulate/` + API_LESSON.get(Number(this.id))).subscribe((exists: any) => {
          if (exists) {
            console.log('File exists.');
            return ManipulateComponent
          } else {
            console.log('File does not exist.');
            // this.step = 2
            return PracticComponent
          }
        })
        return ManipulateComponent
      }
      case 4: return ExamsComponent
      default: {
        console.log('error-return')
      }
    }
    return this.activeComponent
  }
}
