import { PartialType } from '@nestjs/mapped-types';

export class CreateClientDto {}
export class UpdateClientDto extends PartialType(CreateClientDto) {}
