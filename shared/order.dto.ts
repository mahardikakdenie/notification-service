// shared/dto/order.dto.ts
export interface OrderCreatedEvent {
  orderId: number;
  customerEmail: string;
  items: Array<{ name: string; price: number }>;
}
