import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Location } from 'src/location/entities/location.entity';


@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column( )
  dateNaissance: Date;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @OneToMany(type => Location, location => location.client )
  locations: Location[];
}
