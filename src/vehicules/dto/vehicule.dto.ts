import { PartialType } from '@nestjs/mapped-types';


export class CreateVehiculeDto {}

export class UpdateVehiculeDto extends PartialType(CreateVehiculeDto) {}
