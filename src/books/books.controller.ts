// books.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Get()
    findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Book> {
        return this.booksService.findOne(id);
    }

    @Post()
    create(@Body() book: Book): Promise<Book> {
        return this.booksService.create(book);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() book: Book): Promise<void> {
        return this.booksService.update(id, book);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.booksService.remove(id);
    }
}
