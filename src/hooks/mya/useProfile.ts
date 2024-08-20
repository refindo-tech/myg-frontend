// SWR + Axios, axios berfungsi untuk mengambil data dari API, sedangkan SWR berfungsi untuk mengelola state dari data yang diambil dari API.

//useProfile.ts

import useSWR from 'swr';
import Profile from '@/types/profile';
import {getUserProfile} from '@/lib/authentication/fetchData';

// class useProfile {
//   static get() {
//     const { data, error } = useSWR<Profile, Error>('profile', getUserProfile);
//     return {
//       data: data,
//       isLoading: !error && !data,
//       isError: error,
//     };
//   }
// }

const useProfile = () => {
    const { data, error } = useSWR<Profile, Error>('profile', getUserProfile);
    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useProfile;