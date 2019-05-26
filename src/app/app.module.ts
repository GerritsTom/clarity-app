import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { SpielrundeComponent } from './spielrunde/spielrunde.component';
import { SpielrundeListComponent } from './spielrunde/spielrunde-list/spielrunde-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SpielrundeDetailComponent } from './spielrunde/spielrunde-detail/spielrunde-detail.component';
import { SpielrundeEditComponent } from './spielrunde/spielrunde-edit/spielrunde-edit.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpielrundeComponent,
    SpielrundeListComponent,
    HomeComponent,
    SpielrundeDetailComponent,
    SpielrundeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
