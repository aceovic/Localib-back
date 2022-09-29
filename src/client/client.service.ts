import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>
  ) { }

  async create(createClientDto: CreateClientDto) {
    const newClient = this.clientRepository.create({
      ...createClientDto,
    });
    await this.clientRepository.save(createClientDto)
    return newClient;
  }

  async findAll() {
    return await this.clientRepository.find();
  }

  async findOne(id: number): Promise<Client> {
    return await this.clientRepository.findOneByOrFail({ id });
  }

  async update(id: number,
    updateClientDto: Partial<UpdateClientDto>) {
    await this.clientRepository.update({
      id}, updateClientDto);
    return await this.clientRepository.findBy({id});
  }

  async remove(id: number) {
    return await this.clientRepository.delete(id);
  }
}
