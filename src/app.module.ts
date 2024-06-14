import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersModule } from './member/members.module';
import { BooksModule } from './books/books.module';
import { Member } from './member/member.entity';
import { Book } from './books/book.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql', // atau 'postgres' jika menggunakan PostgreSQL
            host: 'localhost',
            port: 3306, // atau 5432 jika menggunakan PostgreSQL
            username: 'root', // sesuaikan dengan username database Anda
            password: '', // sesuaikan dengan password database Anda
            database: 'library', // nama database yang Anda buat
            entities: [Member, Book],
            synchronize: true,
        }),
        MembersModule,
        BooksModule,
    ],
})
export class AppModule { }
