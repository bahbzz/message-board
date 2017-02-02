import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MinichatComponent } from './minichat/minichat.component';
import { MinichatstoreComponent } from './minichatstore.component';

@NgModule({
  declarations: [
    AppComponent,
    MinichatComponent,
    MinichatstoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
