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

  user_type: string | null = null;
  selectedItems: Quotation[] = [];

  quotation$: Observable<Quotation[]> = this.query.selectAll();

  columns: Column[] = [
    { name: 'first_name', label: 'First Name' },
    { name: 'last_name', label: 'Last Name' },
    { name: 'email', label: 'Email' },
    { name: 'phone_number', label: 'Phone Number' },
    { name: 'product_name', label: 'Product Name' },
    { name: 'quantity', label: 'Quantity' },
    { name: 'description', label: 'Description' },
    { name: 'image_url', label: 'Image Url' },
    { name: 'status', label: 'Status' },
  ];

  constructor(
    private query: QuotationQuery,
    private service: QuotationService,
  ) { }

  ngOnInit(): void {
    this.service.get().subscribe();
    this.user_type = localStorage.getItem('user_type');
  }

  onSelectQuotation($event: any) {
    this.selectedItems = $event;
  }

  onMarkAsDone() {
    this.selectedItems.forEach((item: Quotation) => {
      this.service.update(item.id, { status: 'Addressed' }).subscribe();
    });
    this.selectedItems = []
  }

  onMarkAsInprogress() {
    this.selectedItems.forEach((item: Quotation) => {
      this.service.update(item.id, { status: 'Processing' }).subscribe();
    });
    this.selectedItems = []
  }

}
