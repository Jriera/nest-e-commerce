import {IsBoolean, IsString} from 'class-validator';
export class CreateUserDto {
    id?: number;

    @IsString()
    readonly uid: string;

    @IsString()
    email: string;

    @IsString()
    displayName: string;

    @IsString()
    photoURL: string;

    @IsBoolean()
    admin: boolean;
}