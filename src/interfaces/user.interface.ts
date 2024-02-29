export default interface UserInterface {
    name: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    myFriends: number;
    verifyPassword: (password: string) => Promise<boolean>;
}
