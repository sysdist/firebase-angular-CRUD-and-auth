import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CrudComponent } from './tabs/crud/crud.component';
import { CrudCreateComponent } from './tabs/crud/crud-create.component';
import { CrudDetailComponent } from './tabs/crud/crud-detail.component';
import { LoginTabComponent } from './tabs/login/login-tab.component';
import { HomeComponent } from './tabs/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginTabComponent },
  { path: 'crud', component: CrudComponent, canActivate: [AuthGuard] },
  { path: 'crud/create', component: CrudCreateComponent, canActivate: [AuthGuard] },
  { path: 'crud/:id', component: CrudDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
