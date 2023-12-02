import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { SignalsComponent } from './signals/signals.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    SignalsComponent, 
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
