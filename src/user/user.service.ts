import { Inject, Injectable } from '@nestjs/common';
import { user } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY') private userRepository: typeof user,
    ) {}

    async findOneByName(username: string): Promise<any> {
        return await this.userRepository.findOne({
            where: { USERNAME: username },
        });
    }
    async findOneById(userid: string): Promise<any> {
        const result = await this.userRepository.findOne({
            where: { IDUSER: userid },
        });
        console.log(result);
        return result;
    }
}
