import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderCreatedEvent } from '../shared/order.dto';

@Controller()
export class NotificationController {
  @MessagePattern('order_created')
  sendNotification(data: OrderCreatedEvent) {
    console.log(`[Notification] Sending confirmation to ${data.customerEmail}`);
    // Simulasi kirim email
    return { status: 'Confirmation sent' };
  }
}
