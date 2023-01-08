import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonComponent } from '../common/button/button.component';

@NgModule({
  declarations: [HomeComponent, ButtonComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [ButtonComponent],
})
export class HomeModule {}
