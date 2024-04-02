import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { ReportComponent } from './forms/report/report.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentComponent } from './layouts/content/content.component';
import { FooterComponent } from './share/footer/footer.component';
import { HeaderComponent } from './share/header/header.component';
import { ErrorPageComponent } from './share/error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './layouts/home/home.component';
import { DashboardComponent } from './ui/student/dashboard/dashboard.component';
import { ArticlesComponent } from './ui/all/articles/articles.component';
import { InstructionsComponent } from './ui/all/instructions/instructions.component';
import { HttpClientModule } from '@angular/common/http';
import { ToTopComponent } from './share/to-top/to-top.component';
import { MathjaxModule } from "mathjax-angular";
import { GlobalService } from './global.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentModule } from './ui/student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ReportComponent,
    FullLayoutComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent,
    HomeComponent,
    DashboardComponent,
    ArticlesComponent,
    InstructionsComponent,
    ToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StudentModule,
    MathjaxModule.forRoot(),
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule { }