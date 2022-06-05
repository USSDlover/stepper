import {Component, Input, OnInit} from '@angular/core';
import {IRegistration} from '../../interfaces';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() registration: IRegistration | undefined;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  safeImage(url: string): string {
    return <string>this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
