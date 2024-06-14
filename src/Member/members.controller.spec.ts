// members.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MembersController } from './members.controller';
import { MembersService } from './member.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { Repository } from 'typeorm';

describe('MembersController', () => {
    let controller: MembersController;
    let service: MembersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MembersController],
            providers: [
                MembersService,
                {
                    provide: getRepositoryToken(Member),
                    useClass: Repository,
                },
            ],
        }).compile();

        controller = module.get<MembersController>(MembersController);
        service = module.get<MembersService>(MembersService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    // Add more test cases here
});
