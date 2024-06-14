import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book } from './book.entity';
import { Member } from '../member/member.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Book, Member])],
    providers: [BooksService],
    controllers: [BooksController],
})
export class BooksModule { }
