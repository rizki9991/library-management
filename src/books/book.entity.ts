import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Member } from '../member/member.entity';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    stock: number;

    @ManyToOne(() => Member, member => member.borrowedBooks, { nullable: true })
    borrowedBy: Member;

    @Column({ nullable: true })
    borrowedAt: Date;
}
