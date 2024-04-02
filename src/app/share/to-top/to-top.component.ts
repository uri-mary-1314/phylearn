import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.scss']
})
export class ToTopComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleToTopButtonVisibility();
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  private toggleToTopButtonVisibility() {
    const toTopBtn = document.getElementById('toTopBtn');
    if (toTopBtn) {
      toTopBtn.style.display = window.pageYOffset > 20 ? 'block' : 'none';
    }
  }
}
