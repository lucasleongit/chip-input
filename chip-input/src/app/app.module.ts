import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChipInputComponent } from './chip-input/chip-input.component';
import { ChipComponent } from './chip/chip.component';

@NgModule({
  declarations: [AppComponent, ChipInputComponent, ChipComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
