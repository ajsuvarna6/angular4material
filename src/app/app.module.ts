import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdCardModule,
  MdDialogModule,
  MdProgressSpinnerModule,
  MdTabsModule,
  MdGridListModule,
  MdAutocompleteModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSidenavModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './common/loader.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import 'hammerjs';
// import '../styles.scss';

const materialModules = [
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdCardModule,
  MdDialogModule,
  MdProgressSpinnerModule,
  MdGridListModule,
  MdTabsModule,
  MdAutocompleteModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdSidenavModule
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  providers: [],
  entryComponents: [LoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
