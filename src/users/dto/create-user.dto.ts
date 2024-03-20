/* eslint-disable prettier/prettier */
export class CreateUserDto {
    username: string;
    lastname?: string;
    email: string;
    authStrategy: string;
}