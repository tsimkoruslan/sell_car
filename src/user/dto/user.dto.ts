import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class UserCreateDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    isActive: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;
}