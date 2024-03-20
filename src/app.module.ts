/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QrCodesService } from './qr-codes/qr-codes.service';
import { QrCodesController } from './qr-codes/qr-codes.controller';
import { QrCodesModule } from './qr-codes/qr-codes.module';

// 
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3308,
    // Usuario y contraseña para ingresar al mysql por medio de Heidi
    username: 'root',
    password: '12345',
    // Este database es la base de datos en la que se va a estar creardo la tabla
    database: 'RegisterEventSystem',
    // Para que todos los archivos del proyecto que contengan entity.ts se ejecute
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
    // Pára que Sincronice 
    synchronize: true,
  }), UsersModule, QrCodesModule],
  controllers: [AppController, QrCodesController],
  providers: [AppService, QrCodesService],
})
export class AppModule { }
