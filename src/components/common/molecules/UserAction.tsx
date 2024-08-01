import React from 'react';
import { Button, Link, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import useAuthCheck from '@/hooks/common/auth';
import useProfile from '@/hooks/mya/useProfile';

import { logoutUser } from '@/lib/authentication/fetchData';

import Swal from 'sweetalert2';

interface NavItem {
    label: string;
    isActive: boolean;
    href: string;
}

interface NavigationProps {
    NavItems: NavItem[];
}

const UserActions: React.FC<NavigationProps> = ({ NavItems }) => {

    //check current route
    const router = useRouter()
    const pathname = usePathname()
    const currentPath = pathname.split('/')
    //check if current route containt /mya/
    const isMya = currentPath.includes('mya')

    const isLogged = useAuthCheck();
    const { data } = useProfile();
    console.log('data', data);
    const services = pathname.split('/')[1].toLowerCase();

    const mainColor = () => {
        switch (services) {
            case "mya":
                return "bg-mya-500";
            case "mybeautica":
                return "bg-mybeautica-500";
            case "myacademy":
                return "bg-myacademy-500";
            case "myg":
                return "bg-myg-500";
            default:
                return "bg-myg-500";
        }
    };

    //show message based on current time
    const today = new Date();
    const curHr = today.getHours();
    const greeting = () => {
        if (curHr < 12) {
            return 'Selamat Pagi';
        } else if (curHr < 18) {
            return 'Selamat Siang';
        } else {
            return 'Selamat Malam';
        }
    };

    //emoji based on current time
    const emoji = () => {
        if (curHr < 12) {
            return '🌞';
        } else if (curHr < 18) {
            return '🌤️';
        } else {
            return '🌙';
        }
    };

    const loadingPopup = () => {
        Swal.fire({
            title: 'Loading...',
            html: 'Please wait',
            didOpen: () => {
                Swal.showLoading();
            },
        });
    };

    const closePopup = () => {
        Swal.close();
    }

    //handle logout
    const handleLogout = async () => {
        try {
            loadingPopup();
            await logoutUser();
            router.push('/login');
            closePopup();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    if (!isLogged) {
        return (
            <div>
                <Link href="/login">
                    <Button radius='full' size='sm' 
                    // className='bg-mya-500 hover:bg-mya-600 text-white'
                    className={mainColor() + ' hover:bg-gray-400 text-white'}
                    >
                        Login
                    </Button>
                </Link>
            </div>
        );
    }
    
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform flex-none hover:scale-105"
                    name="Jason Hughes"
                    size="sm"
                    src="https://api.dicebear.com/9.x/thumbs/svg?seed=Felix"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">

            <DropdownSection showDivider>
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-normal">{greeting()},</p>
                    <p className="font-bold">{data?.fullName} {emoji()}</p>
                </DropdownItem>
                </DropdownSection>

                <DropdownSection showDivider title={'Navigasi'} className='sm:hidden'>
                    {NavItems.map((item, index) => (
                        <DropdownItem key={index} textValue='text'>
                            <span>{item.label}</span>
                        </DropdownItem>
                    ))}
                </DropdownSection>



                <DropdownSection showDivider title={'Pesanan'} className= {isMya ? 'block' : 'hidden'}>
                <DropdownItem key="cart" href='/mya/cart'>
                Keranjang Belanja
                </DropdownItem>
                <DropdownItem key="order" href='/mya/checkout'>
                    Daftar Pesanan
                </DropdownItem>
                </DropdownSection>

                <DropdownSection showDivider title={'Settings'}>
                <DropdownItem key="profile" href='/profile'>
                    Profile
                </DropdownItem>
                {/* <DropdownItem key="settings">My Settings</DropdownItem> */}
                </DropdownSection>

                <DropdownSection>
                <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                    Log Out
                </DropdownItem>
                </DropdownSection>
                
            </DropdownMenu>
        </Dropdown>
    );
};

export default UserActions;