import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MembersService } from './member.service';
import { Member } from './member.entity';

describe('MembersService', () => {
    let service: MembersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MembersService,
                {
                    provide: getRepositoryToken(Member),
                    useValue: {
                        find: jest.fn(() => []),
                        findOne: jest.fn((id: number) => Promise.resolve({ id })),
                        save: jest.fn((member: Member) => member),
                        update: jest.fn(),
                        delete: jest.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<MembersService>(MembersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should find all members', async () => {
        const members = await service.findAll();
        expect(members).toEqual([]);
    });

    // Add more test cases for other methods in MembersService

    afterEach(() => {
        jest.clearAllMocks();
    });
});
