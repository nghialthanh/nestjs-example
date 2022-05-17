import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Role } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/roles.decorator';
import { user } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard)
    @Get(':userid')
    async findByID(@Param('userid') userid: string): Promise<user[]> {
        return this.userService.findOneById(userid);
    }
}
