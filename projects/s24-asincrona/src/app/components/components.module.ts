import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from './form/form.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavComponent,
    FormComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    NavComponent,
    FormComponent
  ]
})
export class ComponentsModule { }
