import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class UserCreateDto {
    @ApiProperty()
    @IsString()
    id: string

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNumber()
    age: number;
}