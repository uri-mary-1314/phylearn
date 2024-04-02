import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { HomeComponent } from './layouts/home/home.component';
import { DashboardComponent } from './ui/student/dashboard/dashboard.component';
import { ArticlesComponent } from './ui/all/articles/articles.component';
import { InstructionsComponent } from './ui/all/instructions/instructions.component';
import { ErrorPageComponent } from './share/error-page/error-page.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { ReportComponent } from './forms/report/report.component';
import { StudentComponent } from './ui/student/student.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "",
    component: FullLayoutComponent,
    data: {
      titles: "full views"
    },
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "articles",
        component: ArticlesComponent
      },
      {
        path: "instructions",
        component: InstructionsComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sign-up",
    component: RegisterComponent
  },
  {
    path: "report",
    component: ReportComponent
  },
  {
    path: "student/:id",
    component: StudentComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
