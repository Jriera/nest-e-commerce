import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid: string;

    @Column()
    email: string;

    @Column()
    displayName: string;

    @Column()
    photoURL: string;

    @Column()
    admin: boolean;
    

}
    