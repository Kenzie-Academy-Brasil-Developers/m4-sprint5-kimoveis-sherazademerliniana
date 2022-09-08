import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Properties } from "./properties.entity";

@Entity()
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany((type) => Properties, (properties) => properties.category, {
    eager: true,
  })
  properties: Properties[];
}
