import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {addDetail, addImage, selectAgent} from '../../store/register.actions';
import {Observable} from 'rxjs';
import {IAgent, IUserDetail} from '../../interfaces';

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

  onUploadImage(uploadedImage: File): void {
    this.store.dispatch(addImage({uploadedImage}));
  }

  onSubmitDetailForm(submittedForm: IUserDetail): void {
    this.store.dispatch(addDetail(submittedForm));
  }

  onSelectAgent(selectedAgent: IAgent): void {
    this.store.dispatch(selectAgent(selectedAgent));
  }

}
