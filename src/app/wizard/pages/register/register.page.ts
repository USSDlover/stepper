import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {addDetail, addImage, selectPerson} from '../../store/register.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  registrationDetail$: Observable<any>;

  constructor(private store: Store<{ register: {} }>) {
    this.registrationDetail$ = store.select('register');
  }

  ngOnInit(): void {
  }

  onUploadImage(uploadedImage: string): void {
    this.store.dispatch(addImage());
  }

  onSubmitDetailForm(submittedForm: any): void {
    this.store.dispatch(addDetail());
  }

  onSelectPerson(selectedPerson: any): void {
    this.store.dispatch(selectPerson());
  }

}
