import { IsDate, IsNumber, IsString, ValidateNested } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";
import { OrderItemDto } from "./order-item.dto";

export class CreateOrderDto{

    @PrimaryGeneratedColumn()
    id?: number;

    @IsNumber()
    userId: number;

    @IsString()
    orderDate: string;

    @IsString()
    orderStatus: string;

    @IsNumber()
    totalPrice: number;

    @ValidateNested({ each: true })
    cart: OrderItemDto[];
}