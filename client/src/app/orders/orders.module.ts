import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrderDetailedComponent],
  imports: [CommonModule, SharedModule, OrdersRoutingModule],
})
export class OrdersModule {}
