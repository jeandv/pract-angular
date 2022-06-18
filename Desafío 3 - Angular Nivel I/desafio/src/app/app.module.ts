import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './component/principal/principal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PrincipalComponent],
  imports: [BrowserModule, NgbModule, NoopAnimationsModule, MatCardModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }