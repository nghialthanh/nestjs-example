import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class product extends Model {
    @Column({ primaryKey: true })
    IDPR!: string;

    @Column
    NAMEPR!: string;

    @Column
    PRICE!: number;

    @Column
    CATAGORY!: string;
}
