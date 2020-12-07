import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from '../app/core/core.module';
import { HeaderComponent } from '../app/core/header/header.component';
import { FooterComponent } from '../app/core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from '../app/user/user-routing.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
