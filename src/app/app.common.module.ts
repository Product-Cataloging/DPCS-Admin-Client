import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './app.material.module';
import { NgPrimeModule } from './app.ngprime.module';
import { TreeTableModule } from 'primeng/treetable';


@NgModule({
    imports: [
    ],
    exports: [
        NgPrimeModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        TreeTableModule,
    ],
    declarations: []
})
export class AppCommonModule {

}
