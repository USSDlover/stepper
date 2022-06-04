import {NgModule} from '@angular/core';
import {RoutedComponents, WizardRoutingModule} from './wizard-routing.module';
import {DetailFormComponent, SelectTableComponent, SummaryComponent, UploadImageComponent} from './components';
import {AngularMaterialWizardModule} from './angular-material-wizard.module';
import {StoreModule} from '@ngrx/store';
import {registerReducer} from './store/register.reducer';
import {CommonModule} from '@angular/common';

const Components = [
  UploadImageComponent,
  DetailFormComponent,
  SelectTableComponent,
  SummaryComponent
];

@NgModule({
  imports: [
    CommonModule,
    WizardRoutingModule,
    AngularMaterialWizardModule,
    StoreModule.forRoot({ register: registerReducer })
  ],
  declarations: [
    ...Components,
    ...RoutedComponents
  ]
})
export class WizardModule {}
