import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitHandler(formValue: { email: string, password: string }): void {
    this.authService
      .login(formValue)
      .subscribe({
        next: (data) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}
