import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { Location } from './entities/location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculesService } from 'src/vehicules/vehicules.service';
import { ClientService } from 'src/client/client.service';
import { Vehicule } from 'src/vehicules/entities/vehicule.entity';
import { Client } from 'src/client/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Location, Vehicule, Client])],
  controllers: [LocationController],
  providers: [LocationService, VehiculesService, ClientService]
})
export class LocationModule {}
