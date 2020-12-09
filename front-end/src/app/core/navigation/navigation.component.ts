import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isLogged$ = this.authService.isLogged$;
  isReady$ = this.authService.isReady$;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  logoutHandler(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }
}
