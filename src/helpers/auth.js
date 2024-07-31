import { getCookie } from "@/axios/cookieUtils";

//check refreshToken in cookie for authentication
export const isAuthenticated = () => {
    const token = sessionStorage.getItem('accessToken') || null;
    return token ? true : false;
};