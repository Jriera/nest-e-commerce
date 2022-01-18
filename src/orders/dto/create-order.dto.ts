import { IsDate, IsNumber, IsPositive, IsString, ValidateNested } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";
import { OrderItemDto } from "./order-item.dto";

export class CreateOrderDto{

    @PrimaryGeneratedColumn()
    id?: number;

    @IsString()
    userId: string;

    @IsString()
    orderDate: string;

    @IsString()
    orderStatus: string;

    @IsPositive()
    totalPrice: number;

    
    cart: OrderItemDto[];
}