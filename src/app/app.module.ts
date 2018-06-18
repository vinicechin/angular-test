import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';

import { SwapiReducer } from './store/swapi.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(({ swapi: SwapiReducer}))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
