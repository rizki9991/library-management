import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from '../books/book.entity';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @OneToMany(() => Book, book => book.borrowedBy)
    borrowedBooks: Book[];

    @Column({ default: false })
    isPenalized: boolean;

    @Column({ nullable: true })
    penaltyEndDate: Date;
}
