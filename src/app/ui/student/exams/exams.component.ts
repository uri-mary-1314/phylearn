import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ExamsService } from 'src/app/services/exams.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  listQuestions$: any;
  submited = false;
  submit = false;
  id!: number;
  point = 0;
  min = 25
  seconds = 0;
  timer: any
  public listAns$ = new Map<number, string>();
  fetchData(id: number) {
    return this.service.getExams(id).subscribe(
      res => {
        this.listQuestions$ = res
        console.log(res);
      }
    )
  }
  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        this.min--;
        this.seconds = 59;
      }
      else {
        this.seconds--;
      }
      if (this.min === 0 && this.seconds === 1) {
        this.checkAns();
      }
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.timer);
  }
  setAns(id: number, ans: string) {
    this.listAns$.set(id, ans)
    for (let [key, val] of this.listAns$) {
      console.log(key, val);
    }
  }
  checkAns() {
    if (!this.submited) {
      for (let q of this.listQuestions$) {
        if (q.answer === this.listAns$.get(q.id)) {
          this.point++;
        }
      }
      this.point = this.point/this.listQuestions$.length * 10;
      this.submited = true;
      this.stopTimer()
      this.scrollToTop()
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  reloadPage() {
    // Reload the page
    window.location.reload();
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.fetchData(this.id);
    this.startTimer();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check your route parameters here and reload the page if needed
        const currentParams = this.route.snapshot.paramMap;
        if (currentParams.has('id')) {
          // Reload the page
          this.reloadPage();
        }
      }
    });
  }
  constructor(
    private service: ExamsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
}
