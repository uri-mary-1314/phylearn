import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student.component';
import { LessonComponent } from './lesson/lesson.component';
import { ManipulateComponent } from './manipulate/manipulate.component';
import { PracticComponent } from './practic/practic.component';
import { ExamsComponent } from './exams/exams.component';


@NgModule({
  declarations: [
    StudentComponent,
    LessonComponent,
    ManipulateComponent,
    PracticComponent,
    ExamsComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class StudentModule { }
