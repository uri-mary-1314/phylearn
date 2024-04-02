import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  cantLogin: boolean = false;
  constructor(
    public app: AppComponent,
    private fb: FormBuilder,
    private router: Router
    ) {
      this.loginForm = this.fb.group({
        gmail: '',
        pass: ''
      })
     }

  onSubmit() {
    const userGmail = this.loginForm.get('gmail')!.value;
    const userPass = this.loginForm.get('pass')?.value; 
    if (this.app.logIn(userGmail, userPass)) {
      this.router.navigate(['/home'])
    }
    else {
      this.cantLogin = true;
    }
  }
}
