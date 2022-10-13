import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: any;
  @Input() columns: Column[] = [];
  @Input() caption: string = '';
  @Input() actions: any;
  @Input() checkbox: boolean = false;
  @Input() hasAction: boolean = true;
  @Input() loading: boolean = false;
  @Input() checkedData: any[] = [];
  @Input() columnFilterOptions: any[] = [];
  @Input() hasPagination: boolean = false;
  @Input() rows: number = 0;


  @Output() actionClick = new EventEmitter<any>();
  @Output() selectedData = new EventEmitter<any[]>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(item: any, type: string) {
    this.actionClick.emit({ item, type });
  }

  onSelect() {
    this.selectedData.emit(this.checkedData);
  }

  // getTooltip Method accepts two parameters
  // The first parameter is the current row data of the grid
  // The second parameter is called tooltip, it could be a string or a function
  // The function returns either the string value or tooltip function
  getTooltip(row: any, tooltip?: any): any {
    return typeof tooltip === 'string' ? tooltip : tooltip(row);
  }

  // getIcon Method accepts two parameters
  // The first parameter is the current row data of the grid
  // The second parameter is called icon, it could be a string or a function
  // The function returns either the string value or icon function
  getIcon(row: any, icon?: any): any {
    return typeof icon === 'string' ? icon : icon(row);
  }

}
