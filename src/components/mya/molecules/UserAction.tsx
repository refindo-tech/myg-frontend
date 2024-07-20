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

                <DropdownSection showDivider title={'Menu'} className='sm:hidden'>
                    {NavItems.map((item, index) => (
                        <DropdownItem key={index}>
                            <Link href={item.href} className='font-normal text-mya-600'>
                                {item.label}
                            </Link>
                        </DropdownItem>
                    ))}
                </DropdownSection>

                <DropdownSection showDivider title={'Settings'}>
                <DropdownItem key="profile">Profile</DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                </DropdownSection>

                <DropdownSection>
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">mybeautica@gmail.com</p>
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
                </DropdownSection>
                
            </DropdownMenu>
        </Dropdown>
    );
};

export default UserActions;