import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path:'home', component: FormComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
