import React from 'react';
import { Button, Link, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from '@nextui-org/react';

interface NavItem {
    label: string;
    isActive: boolean;
    href: string;
}

interface NavigationProps {
    NavItems: NavItem[];
}

const UserActions: React.FC<NavigationProps> = ({ NavItems }) => {
    
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

                <DropdownSection showDivider title={'Navigasi'} className='sm:hidden'>
                    {NavItems.map((item, index) => (
                        <DropdownItem key={index} textValue='text'>
                            <span>{item.label}</span>
                        </DropdownItem>
                    ))}
                </DropdownSection>

                <DropdownSection showDivider title={'Pesanan'}>
                <DropdownItem key="cart" href='/mya/cart'>
                Keranjang Belanja
                </DropdownItem>
                <DropdownItem key="order" href='/mya/order'>
                    Daftar Pesanan
                </DropdownItem>
                </DropdownSection>

                <DropdownSection showDivider title={'Settings'}>
                <DropdownItem key="profile">Profile</DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                </DropdownSection>

                <DropdownSection>
                {/* <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">mybeautica@gmail.com</p>
                </DropdownItem> */}
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
                </DropdownSection>
                
            </DropdownMenu>
        </Dropdown>
    );
};

export default UserActions;