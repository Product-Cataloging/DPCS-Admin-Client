import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quotation } from 'src/app/admin/models/quotation.model';
import { QuotationQuery } from 'src/app/admin/state/quotation.query';
import { QuotationService } from 'src/app/admin/state/quotation.service';
import { Column } from 'src/app/shared/models/column.model';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {

  quotation$: Observable<Quotation[]> = this.query.selectAll();

  columns: Column[] = [
    { name: 'product_name', label: 'Product Name' },
    { name: 'email', label: 'Email' },
    { name: 'image_url', label: 'Image Url' },
    { name: 'description', label: 'Description' },
  ];

  constructor(
    private query: QuotationQuery,
    private service: QuotationService
  ) { }

  ngOnInit(): void {
    this.service.get().subscribe();
  }

}
