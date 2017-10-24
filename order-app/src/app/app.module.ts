import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderNewComponent } from './order/order-new/order-new.component';
import { OrderService } from './order/order.service';
import { OrderEditComponent } from './order/order-edit/order-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderDetailsComponent,
    OrderListComponent,
    OrderNewComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
