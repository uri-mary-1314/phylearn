import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentRoute: string = "";

  constructor(
    private router: Router,
    public app: AppComponent
    ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = "";
        let cnt = 0;
        for (let i of event.url) {
          if (i == '/')
            cnt++;
          if (cnt === 2) 
            break;
          this.currentRoute += i;
        }
        console.log(this.currentRoute)
      }
    });
  }

  ngOnInit(): void { }
}
