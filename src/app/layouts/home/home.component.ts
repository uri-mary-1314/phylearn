import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

const keyStep = 'key-step'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem(keyStep, String(1))
  }
  
  setLessonID(lessonId: number) {
    this.router.navigate(['/student/' + String(lessonId)]);
  }
}
