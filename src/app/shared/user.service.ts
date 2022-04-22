import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({
    providedIn: "root"
})
export class UserService
{
    users: User[] = [
        new User('Barney Stinson',
        'abc@xyz.com',
        'male',
        'Dehradun, Uttarakhand',
        'Professional'),

        new User('Harvey Spector',
        'qwerty@asd.com',
        'female',
        'Huda City Center, Gurugram, Haryana',
        'Beginner')
    ];

    getUserById(username: String)
    {
        let currUser = {} as User;
        for(let user of this.users)
        {
            if(user.username === username)
            {
                currUser = user;
            }
        }

        return currUser;
    }

    addUser(user: User)
    {
        this.users.push(user);
    }
}