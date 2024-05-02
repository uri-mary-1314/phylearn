import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }
  
  setLessonID(lessonId: number) {
    this.router.navigate(['/student/' + String(lessonId)]);
  }
}
