import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
// la ruta será 
export class UsersController {
    // Se hace el llamo del service para poder realizar el servicio de guardado 
    // de los datos
    constructor(private usersService: UsersService) { }

    @Get()
    // tipo de dato va a retornar ese tipo de datos
    getUsers():Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get(':username')
    // tipo de dato va a retornar ese tipo de datos
    getUser(@Param('username') username:string) {
        return this.usersService.getUser(username);
    }

    // Post para el metodo que se va a realizar
    @Post()
    // Body porque es donde se va a realziar el usuario y de ahí lo va a extraer
    // newUser es de tipo CreateUserDto
    createUser(@Body() newUser: CreateUserDto) {
        return this.usersService.createUser(newUser)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id:number){
        return this.usersService.deleteUser(id);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe)id:number, @Body() user:UpdateUserDto){
        return this.usersService.updateUser(id, user)
    }

}
