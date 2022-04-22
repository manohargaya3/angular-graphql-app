export class User
{
    public username: string;
    public email: string;
    public gender: string;
    public address: string;
    public skillLevel: string;

    constructor(username: string, email: string, gender: string, address: string, skillLevel: string)
    {
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.skillLevel = skillLevel;
    }

    

}