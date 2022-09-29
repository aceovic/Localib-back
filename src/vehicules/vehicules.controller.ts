import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { VehiculesService } from './vehicules.service';
import { CreateVehiculeDto, UpdateVehiculeDto } from './dto/vehicule.dto';

@Controller('vehicules')
export class VehiculesController {
  constructor(private readonly vehiculesService: VehiculesService) {}

  @Post()
  async create(@Body() createVehiculeDto: CreateVehiculeDto) {
    return await this.vehiculesService.create(createVehiculeDto);
  }

  @Get()
  async findAll() {
    return await this.vehiculesService.findAll();
  }

  @Get(':immatriculation')
  async findByImmat(@Param('immatriculation') immatriculation: string) {
    return await this.vehiculesService.findByImmat(immatriculation);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.vehiculesService.findOne(+id);
  }
  

  @Patch(':immatriculation')
  async update(@Param('immatriculation') immatriculation: string, @Body() updateVehiculeDto: UpdateVehiculeDto) {
    return await this.vehiculesService.updateVehicule(immatriculation, updateVehiculeDto);
  }

  @Delete(':immatriculation')
  async remove(@Param('immatriculation') immatriculation: string) {
    await this.vehiculesService.remove(immatriculation);
   return {
    statusCode: HttpStatus.OK,
    message: 'Vehicule deleted successfully'}
  }
}
