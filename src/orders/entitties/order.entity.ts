import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OrderItemDto } from "../dto/order-item.dto";


@Entity('order')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    orderDate: string;

    @Column()
    orderStatus: string;

    @Column()
    totalPrice: number;

    @Column({ type: 'json' })
    cart: OrderItemDto[];

}