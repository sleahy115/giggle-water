import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BottleListComponent } from './bottle-list/bottle-list.component';
import { NewBottleComponent } from './new-bottle/new-bottle.component';
import { EditBottleComponent } from './edit-bottle/edit-bottle.component';
import { ShotsLeftPipe } from './shots-left.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BottleListComponent,
    NewBottleComponent,
    EditBottleComponent,
    ShotsLeftPipe
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
