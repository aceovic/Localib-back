import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';


@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return await this.clientService.create(createClientDto);
  }

  @Get()
  async findAll() {
    return await this.clientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.clientService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateClientDto: UpdateClientDto) {
    return await this.clientService.update(id, updateClientDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.clientService.remove(id);
    return { deleted: true,
      statusCode: HttpStatus.OK,
      message: 'Client deleted successfully'
    };
  }
}
