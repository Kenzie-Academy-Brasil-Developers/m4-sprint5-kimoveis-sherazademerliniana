import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";
import { Users } from "./users.entity";

@Entity()
export class Schedules {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  date: Date;

  @Column()
  hour: Date;

  @ManyToOne((type) => Properties, (properties) => properties.schedules)
  property: Properties;

  @ManyToOne((type) => Users, (users) => users.schedules, { eager: true })
  user: Users;
}
