import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }
  setLessonID(lessonId: number) {
    this.router.navigate(['/student/' + String(lessonId)]);
  }
}

