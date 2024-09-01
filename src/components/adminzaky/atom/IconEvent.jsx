import Link from 'next/link'
import { User } from '@nextui-org/react'
const IconEvent = () => {
    return (
        <Link
            href={'/admin/event?id=dafsdf'}
        >
            <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                    radius:"lg",
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
                className='cursor-pointer'
            />
        </Link>
    )
}
export default IconEvent