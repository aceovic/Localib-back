
import { Client } from 'src/client/entities/client.entity';
import { Vehicule } from 'src/vehicules/entities/vehicule.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  dateDebut: Date;

  @Column()
  dateFin: Date;

 

  @ManyToOne(() => Vehicule, (vehicule) => vehicule.locations)
  vehicule: Vehicule

  @ManyToOne(() => Client, (client) => client.locations)
  client: Client
}
