import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, NgbModule, NoopAnimationsModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }