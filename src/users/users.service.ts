import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ILike, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    // User se está convirtiento en un repository de tyORM para poder utilizarlo
    // tipico CRUD
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async createUser(user:CreateUserDto) {
        // agregando una condición para que verifique si ya se ha creado o no ese usuario ya que todo username tiene unikey
        const userFount = await this.userRepository.findOne({
            where:{
                username: user.username
            }
        })
        if (userFount) {
            return new HttpException('User name ya está crerado', HttpStatus.CONFLICT)
        }

        // Dentro de este método, se utiliza this.userRepository.create(user) para crear una nueva instancia
        //  de la entidad User utilizando los datos proporcionados en el parámetro user.
        const newUser = this.userRepository.create(user)
        // Luego, se llama a this.userRepository.save(newUser) para guardar el nuevo usuario en la base de datos. 
        // Esto devuelve una promesa que resuelve con el usuario recién creado.
        return this.userRepository.save(newUser)
    }

    getUsers() {
        // Este metodo find lo que hace es que hace como una busqueda y se trae los datos que haya.
        return this.userRepository.find()
    }

    getUser(username:string){
        // Lo que hace en la base de datos es buscar por medio de un id yte devulve.
        try {
            return this.userRepository.find({
                where:{
                    username: ILike(`${username}%`) 
                }
               })      
        } catch (err) {
            return err
        }  
    }

    deleteUser(id:number){
       return this.userRepository.delete({id})
    }

    updateUser(id:number, user:UpdateUserDto){
        return this.userRepository.update({id},user)
    }
}
