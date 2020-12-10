import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { authInterceptorProvider } from './auth.interceptor';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    AuthService,
    authInterceptorProvider,
    AuthGuard
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
