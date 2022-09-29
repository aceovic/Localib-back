import { Module } from '@nestjs/common';
import { VehiculesService } from './vehicules.service';
import { VehiculesController } from './vehicules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicule } from './entities/vehicule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicule])],
  controllers: [VehiculesController],
  providers: [VehiculesService]
})
export class VehiculesModule {}
