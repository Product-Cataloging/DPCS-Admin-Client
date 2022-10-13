import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quotation } from 'src/app/admin/models/quotation.model';
import { QuotationQuery } from 'src/app/admin/state/quotation.query';
import { QuotationService } from 'src/app/admin/state/quotation.service';
import { QuotationStore } from 'src/app/admin/state/quotation.store';
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
    { name: 'description', label: 'Description' },
    { name: 'image_url', label: 'Image Url' },
    { name: 'status', label: 'Status' },
  ];

  constructor(
    private query: QuotationQuery,
    private service: QuotationService,
    private store: QuotationStore,//delete after status is added to backend
  ) { }

  ngOnInit(): void {
    this.service.get().subscribe((data) => {
      data.data.forEach((item: Quotation) => {
        this.store.update(item.id, { status: 'Waiting' });
      });
    });
    this.user_type = localStorage.getItem('user_type');
  }

  onSelectQuotation($event: any) {
    this.selectedItems = $event;
  }

  onMarkAsDone() {
    this.selectedItems.forEach((item: Quotation) => {
      this.store.update(item.id, { status: 'Done' });
    });
    this.selectedItems = []
  }

}
