import {NgModule} from '@angular/core';
import {RoutedComponents, RegistrationRoutingModule} from './registration-routing.module';
import {DetailFormComponent, SelectTableComponent, SummaryComponent, UploadImageComponent} from './components';
import {AngularMaterialRegistrationModule} from './angular-material-registration.module';
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
    RegistrationRoutingModule,
    AngularMaterialRegistrationModule,
    StoreModule.forRoot({ register: registerReducer })
  ],
  declarations: [
    ...Components,
    ...RoutedComponents
  ]
})
export class RegistrationModule {}