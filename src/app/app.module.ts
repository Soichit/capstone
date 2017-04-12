import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders }  from './app.routes';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { LoginNewComponent } from './login-new/login-new.component';
import { ProjectsComponent } from './projects/projects.component';
import { BuilderComponent } from './builder/builder.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginNewComponent,
    ProjectsComponent,
    BuilderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    BrowserAnimationsModule
  ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
