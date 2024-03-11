import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent
import { AppComponent } from './app.component';
import { BackendApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent // Include NavbarComponent in declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [
    BackendApiService
  ],
  bootstrap: []
})
export class AppModule { }
