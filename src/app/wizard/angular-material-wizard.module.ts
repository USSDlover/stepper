import {NgModule} from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const AngularMaterials = [
  MatStepperModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({ exports: [...AngularMaterials] })
export class AngularMaterialWizardModule {}
