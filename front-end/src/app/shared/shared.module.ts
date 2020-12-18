import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../core/guards/auth.guard';
import { UtilityService } from './utility.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    UtilityService
  ],
  exports: [
    UtilityService
  ]
})
export class SharedModule { }
