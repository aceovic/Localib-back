import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Location } from 'src/location/entities/location.entity';

@Entity()
export class Vehicule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marque: string;

  @Column()
  modele: string;

  @Column()
  immatriculation: string;

  @Column()
  etat: string;

  @Column()
  prixLocationJour: number;

  @Column({ default: true })
  disponible: boolean;

  @Column()
  type: string;

  @OneToMany(type => Location, location => location.vehicule )
  locations: Location[];

  
}

