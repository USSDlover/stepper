import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAgent} from '../../interfaces';
import {Agent} from '../../models';

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})
export class SelectTableComponent implements OnInit {
  @Output() agentSelected = new EventEmitter<IAgent>();
  tableData: IAgent[] = Array.from({length: 10}, Agent.dummy);

  constructor() { }

  ngOnInit(): void {
  }

  onAgentSelect(selectedAgent: IAgent): void {
    console.log(selectedAgent);
    this.agentSelected.emit(selectedAgent);
  }

}
