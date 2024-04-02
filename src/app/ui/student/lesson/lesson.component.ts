import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ExamsService } from 'src/app/services/exams.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  @ViewChild('mathContainer') mathContainer!: ElementRef;
  sanitizedWordDocumentHtml!: SafeHtml;
  id!: number;
  renderedEquation!: SafeHtml;
  mathJaxObject:any; 
  content:string = ''
  
  renderMath(){
    let angObj = this;
    setTimeout(()=>{
    angObj.mathJaxObject.Hub.Queue(["Typeset",angObj.mathJaxObject.Hub],'mathContent');
    }, 1000)
  } 

  getLesson() {
    console.log(this.id)
    this.service.getLesson(this.id).subscribe(
      (res: string) => {
        this.sanitizedWordDocumentHtml = this.sanitizer.bypassSecurityTrustHtml(res);
        console.log(this.sanitizedWordDocumentHtml)
      }
    )
  }

  refreshLesson() {
    this.id = this.route.snapshot.params['id']
    this.getLesson();
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getLesson();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentParams = this.route.snapshot.paramMap;
        if (currentParams.has('id')) {
          this.reloadPage();
        }
      }
    });

    this.renderMath();

  }
  reloadPage() {
    window.location.reload();
  }

  constructor(
    private sanitizer: DomSanitizer,
    private service: ExamsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
  }
}
