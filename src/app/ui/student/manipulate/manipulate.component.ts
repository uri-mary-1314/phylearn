import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ExamsService } from 'src/app/services/exams.service';

@Component({
  selector: 'app-manipulate',
  templateUrl: './manipulate.component.html',
  styleUrls: ['./manipulate.component.scss']
})
export class ManipulateComponent implements OnInit {
  id!: number;
  sanitizedWordDocumentHtml!: any;

  // getManipulate() {
  //   this.service.getManipulate(this.id).subscribe(
  //     (res: string) => {
  //       this.sanitizedWordDocumentHtml = this.sanitizer.bypassSecurityTrustHtml(res);
  //       console.log(this.sanitizedWordDocumentHtml)
  //     }
  //   )
  // }

  async getManipulate(id: number) {
    try {
      this.sanitizedWordDocumentHtml = await this.service.getManipulate(id);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
      // Xử lý lỗi tại đây nếu cần
    }
  }

  refreshLesson() {
    this.id = this.route.snapshot.params['id']
    this.getManipulate(this.id);
  }

  reloadPage() {
    window.location.reload();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getManipulate(this.id);
    console.log(this.sanitizedWordDocumentHtml)

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
    private sanitizer: DomSanitizer,
    private service: ExamsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
  }
}
