import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Schedules } from "./schedulesUsers.entity";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany((type) => Schedules, (schedules) => schedules.user)
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
