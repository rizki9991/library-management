import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MembersService } from './member.service';
import { Member } from './member.entity';
import { Book } from '../books/book.entity';  // pastikan ini diimpor dengan benar
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('members')
@Controller('members')
export class MembersController {
    constructor(private readonly membersService: MembersService) { }

    @Get()
    @ApiOperation({ summary: 'Get all members' })
    @ApiResponse({ status: 200, description: 'Return all members.' })
    async findAll(): Promise<Member[]> {
        return this.membersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get member by ID' })
    @ApiResponse({ status: 200, description: 'Return a member.' })
    @ApiResponse({ status: 404, description: 'Member not found.' })
    findOne(@Param('id') id: string): Promise<Member> {
        return this.membersService.findOne(parseInt(id));
    }

    @Post()
    @ApiOperation({ summary: 'Create a new member' })
    @ApiResponse({ status: 201, description: 'The member has been successfully created.' })
    create(@Body() member: Member): Promise<Member> {
        return this.membersService.create(member);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a member' })
    @ApiResponse({ status: 200, description: 'The member has been successfully updated.' })
    update(@Param('id') id: string, @Body() member: Member): Promise<void> {
        return this.membersService.update(parseInt(id), member);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a member' })
    @ApiResponse({ status: 200, description: 'The member has been successfully deleted.' })
    remove(@Param('id') id: string): Promise<void> {
        return this.membersService.remove(parseInt(id));
    }

    @Get(':id/books')
    @ApiOperation({ summary: 'Get borrowed books for a member' })
    @ApiResponse({ status: 200, description: 'Return borrowed books.' })
    async getBorrowedBooks(@Param('id') id: string): Promise<Book[]> {
        const member = await this.membersService.findOne(parseInt(id));
        return member.borrowedBooks;
    }
}
