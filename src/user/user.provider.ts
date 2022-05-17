import { user } from './entities/user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: user,
    },
];
