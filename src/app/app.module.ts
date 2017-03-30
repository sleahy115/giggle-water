import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BottleListComponent } from './bottle-list/bottle-list.component';
import { NewBottleComponent } from './new-bottle/new-bottle.component';
// import { Bottle } from './bottle.model';

@NgModule({
  declarations: [
    AppComponent,
    BottleListComponent,
    NewBottleComponent
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
