import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MembersService {
    constructor(
        @InjectRepository(Member)
        private membersRepository: Repository<Member>,
    ) { }

    async findAll(): Promise<Member[]> {
        return this.membersRepository.find({ relations: ['borrowedBooks'] });
    }

    findOne(id: number): Promise<Member> {
        return this.membersRepository.findOne({
            where: { id },
            relations: ['borrowedBooks']
        });
    }

    create(member: Member): Promise<Member> {
        return this.membersRepository.save(member);
    }

    async update(id: number, member: Member): Promise<void> {
        await this.membersRepository.update(id, member);
    }

    async remove(id: number): Promise<void> {
        await this.membersRepository.delete(id);
    }
}
