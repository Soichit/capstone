import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { GeneralComponent } from './general/general.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResumesComponent } from './resumes/resumes.component';
import { BuilderComponent } from './builder/builder.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login-new', component: LoginNewComponent},
  { path: 'general', component: GeneralComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'education', component: EducationComponent},
  { path: 'work', component: WorkComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'resumes', component: ResumesComponent},
  { path: 'builder', component: BuilderComponent},
  
  // { path: 'dashboard/:name', component: DashboardComponent},

];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);