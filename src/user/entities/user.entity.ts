import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class user extends Model {
    @Column({ primaryKey: true })
    IDUSER!: string;

    @Column
    USERNAME!: string;

    @Column
    PASS!: string;

    @Column
    ROLE!: string;
}
