import { MigrationInterface, QueryRunner } from "typeorm";

export class createUsersEntity1662441133349 implements MigrationInterface {
    name = 'createUsersEntity1662441133349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT '"2022-09-06T05:12:16.694Z"'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" SET DEFAULT '"2022-09-06T05:12:16.694Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" SET DEFAULT '2022-09-06 05:09:28.192'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT '2022-09-06 05:09:28.192'`);
    }

}
