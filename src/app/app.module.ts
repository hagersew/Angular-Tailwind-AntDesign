import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NzStatisticModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
