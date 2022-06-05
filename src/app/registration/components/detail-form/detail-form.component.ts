import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IStatus, IUserDetail} from '../../interfaces';
import * as moment from 'moment';

interface DetailForm {
  amount: FormControl<number|null>;
  date: FormControl<Date|null>;
  status: FormControl<IStatus|null>;
  sourceOfFund: FormControl<string|null>;
}

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<IUserDetail>();

  detailForm: FormGroup<DetailForm> | undefined;

  minDate = moment().add(1, 'days');
  maxDate = moment().add(5, 'days');

  constructor() { }

  ngOnInit(): void {
    this.#initDetailForm();
  }

  onSubmit(): void {
    if (this.detailForm)
      this.formSubmitted.emit(this.detailForm.value as IUserDetail);
  }

  #initDetailForm(): void {
    this.detailForm = new FormGroup<DetailForm>({
      amount: new FormControl<number|null>(null, {validators: [Validators.required]}),
      date: new FormControl<Date|null>(null, {validators: [Validators.required]}),
      status: new FormControl<IStatus|null>(null, {validators: [Validators.required]}),
      sourceOfFund: new FormControl<string|null>(null, {validators: [Validators.required]})
    });
  }

}
