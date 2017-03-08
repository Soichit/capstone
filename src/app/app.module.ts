import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing, appRoutingProviders }  from './app.routes';
import { MaterialModule } from '@angular/material';
import { LoginNewComponent } from './login-new/login-new.component';
import { ProjectsComponent } from './projects/projects.component';
import { BuilderComponent } from './builder/builder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginNewComponent,
    ProjectsComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule
  ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
