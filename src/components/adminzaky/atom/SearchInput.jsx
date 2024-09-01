import  {Input} from '@nextui-org/react'
import icons from '@/components/icons/icon.tsx'
const SearchInput = ()=>{
    const {SearchIcon}=icons
    return(
        <Input
            placeholder='Search..'
            radius='lg'
            className='max-w-[220px]'
            size='lg'
            startContent={<SearchIcon className='text-black'/>}
        />
    )
}
export default SearchInput