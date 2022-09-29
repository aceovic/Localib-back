import { PartialType } from '@nestjs/mapped-types';


export class CreateLocationDto {
    vehiculeId: number;
    clientId: number ;
    dateDebut: Date;
    dateFin: Date;
    
}


export class UpdateLocationDto extends PartialType(CreateLocationDto) {}


