import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';

import { HomeComponent } from './home/home.component';
import { HomelsComponent } from './homels/homels.component';
import { HoomlesComponent } from './hoomles/hoomles.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,

    HomeComponent,
    HomelsComponent,
    HoomlesComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
