import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { BuilderComponent } from './builder/builder.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login-new', component: LoginNewComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'education', component: EducationComponent},
  { path: 'work', component: WorkComponent},
  { path: 'builder', component: BuilderComponent},
   { path: 'dashboard', component: DashboardComponent},
  // { path: 'dashboard/:name', component: DashboardComponent},

];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);