import { IsDate, IsEmail, IsInt } from "class-validator"
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

// @PrimaryGeneratedColumn() es para que me cree un id unico
// @Column() es para que me cree una tabla en el mysql

@Entity({name:'users'})
export class User { 

    @PrimaryGeneratedColumn()
    @IsInt()
    id: number

    @Column()
    username: string

    @Column()
    lastname?: string

    @Column({unique: true})
    @IsEmail()
    email: string

    @Column({type:'datetime', default:() => 'CURRENT_TIMESTAMP'})
    @IsDate()
    createdAT: Date

    @Column({nullable: true})
    authStrategy: string
}