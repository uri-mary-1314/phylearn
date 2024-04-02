import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IntructionsService } from 'src/app/services/intructions.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  sanitizedWordDocumentHtml!: SafeHtml;

  getIntructions() {
    this.service.getIntructions().subscribe(
      (res: string) => {
        this.sanitizedWordDocumentHtml = this.sanitizer.bypassSecurityTrustHtml(res);
        console.log(this.sanitizedWordDocumentHtml)
      }
    )
  }

  ngOnInit(): void {
      this.getIntructions();
  }

  constructor(
    private sanitizer: DomSanitizer,
    private service: IntructionsService
  ) {

  }
}
