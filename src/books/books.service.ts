// books.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { Member } from '../member/member.entity';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private booksRepository: Repository<Book>,
        @InjectRepository(Member)
        private membersRepository: Repository<Member>,
    ) { }

    findAll(): Promise<Book[]> {
        return this.booksRepository.find({ where: { borrowedBy: null } });
    }

    findOne(id: number): Promise<Book> {
        return this.booksRepository.findOne({ where: { id } });
    }

    create(book: Book): Promise<Book> {
        return this.booksRepository.save(book);
    }

    async update(id: number, book: Book): Promise<void> {
        await this.booksRepository.update(id, book);
    }

    async remove(id: number): Promise<void> {
        await this.booksRepository.delete(id);
    }

    async borrowBook(bookId: number, memberId: number): Promise<Book> {
        const book = await this.findOne(bookId);
        if (!book) {
            throw new NotFoundException('Book not found');
        }
        if (book.stock < 1 || book.borrowedBy) {
            throw new BadRequestException('Book not available');
        }
        const member = await this.membersRepository.findOne({ where: { id: memberId } });
        if (!member) {
            throw new NotFoundException('Member not found');
        }
        if (member.isPenalized) {
            throw new BadRequestException('Member is currently penalized');
        }
        if (member.borrowedBooks && member.borrowedBooks.length >= 2) {
            throw new BadRequestException('Member cannot borrow more than 2 books');
        }
        book.borrowedBy = member;
        book.borrowedAt = new Date();
        return this.booksRepository.save(book);
    }

    async returnBook(bookId: number, memberId: number): Promise<Book> {
        const book = await this.findOne(bookId);
        if (!book) {
            throw new NotFoundException('Book not found');
        }
        if (!book.borrowedBy || book.borrowedBy.id !== memberId) {
            throw new BadRequestException('Book not borrowed by this member');
        }
        const now = new Date();
        const daysBorrowed = Math.floor((now.getTime() - new Date(book.borrowedAt).getTime()) / (1000 * 3600 * 24));
        if (daysBorrowed > 7) {
            const member = await this.membersRepository.findOne({ where: { id: memberId } });
            member.isPenalized = true;
            member.penaltyEndDate = new Date(now.getTime() + 3 * 24 * 3600 * 1000); // 3 days penalty
            await this.membersRepository.save(member);
        }
        book.borrowedBy = null;
        book.borrowedAt = null;
        return this.booksRepository.save(book);
    }
}
