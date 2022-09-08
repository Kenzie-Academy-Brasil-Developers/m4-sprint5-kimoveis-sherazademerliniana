import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedules } from "./schedulesUsers.entity";

@Entity()
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column("float")
  value: number;

  @Column("integer")
  size: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToOne((type) => Addresses, {
    eager: true,
    nullable: false,
  })
  @JoinColumn()
  address: Addresses;

  @ManyToOne((type) => Categories, (categories) => categories.properties)
  category: Categories;

  @OneToMany((type) => Schedules, (schedules) => schedules.property, {
    eager: true,
  })
  schedules: Schedules[];

  constructor() {
    if (!this.createdAt) {
      this.createdAt = new Date();
    }

    if (!this.updatedAt) {
      this.updatedAt = new Date();
    }
  }
}
