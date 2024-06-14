// books.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Member } from '../member/member.entity';
import { Repository } from 'typeorm';

describe('BooksService', () => {
    let service: BooksService;
    let bookRepository: Repository<Book>;
    let memberRepository: Repository<Member>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
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

        service = module.get<BooksService>(BooksService);
        bookRepository = module.get<Repository<Book>>(getRepositoryToken(Book));
        memberRepository = module.get<Repository<Member>>(getRepositoryToken(Member));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // Add more test cases here
});
