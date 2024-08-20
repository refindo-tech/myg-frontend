import UserProfile from "./userprofile";

export default interface User {
    userId: number;
    userProfiles: UserProfile[];
}