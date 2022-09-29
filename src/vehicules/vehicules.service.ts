import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehiculeDto, UpdateVehiculeDto } from './dto/vehicule.dto';

import { Vehicule } from './entities/vehicule.entity';

@Injectable()
export class VehiculesService {
  constructor(
    @InjectRepository(Vehicule)
    private readonly vehiculeRepository: Repository<Vehicule>
    ) { }
    
    
    async create(createVehiculeDto: CreateVehiculeDto) {
      const newVehicule = this.vehiculeRepository.create({
        ...createVehiculeDto,
      });
      await this.vehiculeRepository.save(createVehiculeDto)
      return newVehicule;
    }
    
    
    async findAll() {
      return await this.vehiculeRepository.find();
    }
    
 
    async findOne(id: number):Promise<Vehicule> {
      return await this.vehiculeRepository.findOneBy({ id });
    }

  async findByImmat(immatriculation: string): Promise<Vehicule> {
    return await this.vehiculeRepository.findOne({
      where: {
        immatriculation: immatriculation
      }
    })
  }

  async updateVehicule(immatriculation: string, updateVehiculeDto: Partial<UpdateVehiculeDto>) {
    await this.vehiculeRepository.update({ immatriculation }, updateVehiculeDto);
    return await this.vehiculeRepository.findOne({
      where: {
        immatriculation: immatriculation
      }
    })
  }

  async remove(immatriculation: string) {
    await this.vehiculeRepository.delete({ immatriculation });
    return { deleted: true };
  }

}


