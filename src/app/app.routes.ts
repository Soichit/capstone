import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { ProjectsComponent } from './projects/projects.component';
import { BuilderComponent } from './builder/builder.component';



// const appRoutes: Routes = [
//   { path: '', redirectTo: 'projects', pathMatch: 'full' },
//   { path: 'projects', component: ProjectsComponent },
//   { path: 'about', component: AboutComponent }
// ];

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login-new', component: LoginNewComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'builder', component: BuilderComponent},

];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);