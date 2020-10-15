import { ProductFormComponent } from './components/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ProductFormComponent],
  exports: [ProductFormComponent]
})
export class SharedModule { }