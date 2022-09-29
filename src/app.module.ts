import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculesModule } from './vehicules/vehicules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicule } from './vehicules/entities/vehicule.entity';
import { LocationModule } from './location/location.module';
import { ClientModule } from './client/client.module';
import { Client } from './client/entities/client.entity';
import { Location } from './location/entities/location.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'poulet1234',
      database: 'localib',
      entities: [Vehicule, Client, Location],
      synchronize: true,
    }), 
    VehiculesModule,
    LocationModule,
    ClientModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
