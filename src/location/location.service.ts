import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLocationDto, UpdateLocationDto } from './dto/location.dto';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { Client } from 'src/client/entities/client.entity';
import { ClientService } from 'src/client/client.service';
import { Vehicule } from 'src/vehicules/entities/vehicule.entity';
import { VehiculesService } from 'src/vehicules/vehicules.service';


@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private LocationRepository: Repository<Location>,
    private readonly vehiculeService: VehiculesService,
    private readonly clientService: ClientService
  ) { }

  async create(createLocationDto: CreateLocationDto) {

    const vehicule: Vehicule = await this.vehiculeService.findOne(createLocationDto.vehiculeId);
    const client: Client = await this.clientService.findOne(createLocationDto.clientId);

    const newLocation = new Location();
    newLocation.dateDebut = createLocationDto.dateDebut;
    newLocation.dateFin = createLocationDto.dateFin;
    newLocation.vehicule = vehicule;
    newLocation.client = client; 

    return this.LocationRepository.save(newLocation)
  }


  async findAll() {
    return await this.LocationRepository.find();
  }

  async findOne(id: number) {
    return await this.LocationRepository.findBy({ id }) 
  }

  async update(id: number, updateLocationDto: Partial<UpdateLocationDto>) {
    await this.LocationRepository.update({id}, updateLocationDto ) ;
    return await this.LocationRepository.findBy({id});
  }

  async remove(id: number) {
    return await this.LocationRepository.delete(id);
  }
}
