import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LessonComponent } from './lesson/lesson.component';
import { ExamsComponent } from './exams/exams.component';
import { PracticComponent } from './practic/practic.component';
import { ManipulateComponent } from './manipulate/manipulate.component';

const keyStep = 'key-step'

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
    this.step = sessionStorage.getItem(keyStep) ? Number(sessionStorage.getItem(keyStep)) : 1;
    console.log(this.step);
    this.activeComponent = this.changeComponent();
    sessionStorage.setItem(keyStep, String(this.step))
  }
  constructor(
  ) { }
  nextStep() {
    this.step++;
    if (this.changeComponent() === this.activeComponent) {
      this.step--;
    } 
    else
      this.activeComponent = this.changeComponent();
    sessionStorage.setItem(keyStep, String(this.step))
  }

  preStep() {
    this.step--;
    if (this.changeComponent() === this.activeComponent) {
      this.step++;
    } 
    else
      this.activeComponent = this.changeComponent();    
    sessionStorage.setItem(keyStep, String(this.step))
  }

  changeComponent() {
    switch(this.step) {
      case 1: return LessonComponent
      case 2: return PracticComponent
      case 3: return ManipulateComponent
      case 4: return ExamsComponent
      default: {
        console.log('error-return')
      }
    }
    return this.activeComponent
  }
}
