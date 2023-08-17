import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserCreateDto} from "./dto/user.dto";
import {Repository} from "typeorm";
import {User} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class UserService {
    private salt = 5;
constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService,
) {};
    async createUser (data:UserCreateDto){
        const findUser = await this.userRepository.findOne({
            where: { email: data.email},
        })
        if (findUser){
            throw new HttpException(
                'Email not uniq',
                HttpStatus.BAD_REQUEST
            )
        }
        data.password = await  this.getHash(data.password);
        const newUser = this.userRepository.create(data);
        const  token = await this.signIn(newUser);
        return token;
    }

    async getHash(password: string){
       return await bcrypt.hash(password, this.salt)
    }

    async signIn(user){
        return await this.authService.signIn({
            id: user.id.toString(),
        })
    }
    async getAllUsers ():Promise<User[]> {
        return this.userRepository.find();
    }

    async getOneUser (userId:string) {
        // return this.users.find(i => i.id === userId)
    }

}
