import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitterModule } from 'primeng/splitter';
import { ListboxModule } from 'primeng/listbox';
import { InputMaskModule } from 'primeng/inputmask';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { FileUploadModule } from 'primeng/fileupload';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
    exports: [
        SidebarModule,
        PanelMenuModule,
        DropdownModule,
        TableModule,
        ToolbarModule,
        SplitterModule,
        ListboxModule,
        InputMaskModule,
        BreadcrumbModule,
        FileUploadModule,
        ConfirmDialogModule
    ]
})
export class NgPrimeModule { }
