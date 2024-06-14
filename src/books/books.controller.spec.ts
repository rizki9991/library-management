// books.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { Member } from '../member/member.entity';

describe('BooksController', () => {
    let controller: BooksController;
    let service: BooksService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BooksController],
            providers: [
                BooksService,
                {
                    provide: getRepositoryToken(Book),
                    useClass: Repository,
                },
                {
                    provide: getRepositoryToken(Member),
                    useClass: Repository,
                },
            ],
        }).compile();

        controller = module.get<BooksController>(BooksController);
        service = module.get<BooksService>(BooksService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    // Add more test cases here
});
