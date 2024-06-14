import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersService } from './member.service';
import { MembersController } from './members.controller';
import { Member } from './member.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Member])],
    providers: [MembersService],
    controllers: [MembersController],
})
export class MembersModule { }
