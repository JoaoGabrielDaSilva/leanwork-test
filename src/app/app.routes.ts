import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(
        (component) => component.RegisterComponent
      ),
  },
  {
    path: 'user-list',
    loadComponent: () =>
      import('./user-list/user-list.component').then(
        (component) => component.UserList
      ),
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
];
