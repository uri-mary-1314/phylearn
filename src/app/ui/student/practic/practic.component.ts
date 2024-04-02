import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ExamsService } from 'src/app/services/exams.service';

@Component({
  selector: 'app-practic',
  templateUrl: './practic.component.html',
  styleUrls: ['./practic.component.scss']
})
export class PracticComponent implements OnInit {
  listQuestions$: any;
  submited = false;
  submit = false;
  id!: number;
  point = 0;
  public listAns$ = new Map<number, string>();
  fetchData(id: number) {
    return this.service.getPractic(id).subscribe(
      res => {
        this.listQuestions$ = res
        console.log(res);
      }
    )
  }
  setAns(id: number, ans: string) {
    this.listAns$.set(id, ans)
  }
  checkAns() {
    if (!this.submited) {
      for (let q of this.listQuestions$) {
        if (q.answer === this.listAns$.get(q.id)) {
          this.point++;
        }
      }
      this.submited = true;
    }
    this.scrollToTop()
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  reloadPage() {
    window.location.reload();
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchData(this.id);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentParams = this.route.snapshot.paramMap;
        if (currentParams.has('id')) {
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
