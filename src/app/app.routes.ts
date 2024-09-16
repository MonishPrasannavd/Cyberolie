import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddjobsComponent } from './jobadmin/addjobs/addjobs.component';
import { JobmasterComponent } from './jobadmin/jobmaster/jobmaster.component';
import { RecrutierComponent } from './recrutier/recrutier.component';
import { ApplyJobsComponent } from './apply-jobs/apply-jobs.component';
import { JobseakersComponent } from './jobseakers/jobseakers.component';
import { UsersListComponent } from './users-list/users-list.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'jobadmin',
    children: [
      {
        path: 'jobMaster',
        component: JobmasterComponent,
      },
      {
        path: 'addjobs',
        component: AddjobsComponent,
      },
    ],
  },
  {
    path:'jobseaker',
    component:JobseakersComponent
  },
  {
    path:'clients',
    component:RecrutierComponent
  },
  {
    path:'users-list',
    component:UsersListComponent
  },
  {
    path:'apply-jobs',
    component:ApplyJobsComponent
  }
  
];
