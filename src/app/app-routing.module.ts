import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  {
    
    path: 'categories',
    canActivate: [AuthGuard],
    component: CategoriesComponent,
    data: { title: 'List of Categories' }
  }
  /*,
  {
    path: 'categories',
    component: CategoriesComponent,
    data: { title: 'List of Categories' }
  }*/,
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }