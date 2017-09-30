import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WebpageComponent } from './webpage/webpage.component';
import { routing } from './app.routing';
import { TttComponent } from './ttt/ttt.component';

@NgModule({
  declarations: [
    AppComponent,
    WebpageComponent,
    TttComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
