import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../core/guards/auth.guard';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard
  ],
  exports: []
})
export class SharedModule { }
