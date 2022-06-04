import {Component, Input, OnInit} from '@angular/core';
import {IRegistration} from '../../interfaces';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() registration: IRegistration | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
