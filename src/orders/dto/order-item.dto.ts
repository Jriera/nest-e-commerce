import { IsNumber, IsString } from "class-validator";

export class OrderItemDto {

    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsNumber()
    price: number;

    @IsString()
    category: string;

    @IsString()
    description: string;

    @IsString()
    image: string;

    @IsNumber()
    quantity?: number;
}