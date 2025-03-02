"use client"
import React, {useState} from 'react'
import  {Input} from '@nextui-org/react'
import icons from '@/components/icons/icon'
interface propsSearchInput {
    onSearch:(params: string | undefined)=>void
}
const SearchInput:React.FC<propsSearchInput> = ({ onSearch})=>{
    const {SearchIcon}=icons
    const [query,setQuery] = useState<string|undefined>(undefined)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        setQuery(value)
    }
    return(
        <Input
            isClearable
            placeholder='Search..'
            radius='lg'
            // className='max-w-[220px]'
            size='lg'
            value={query}
            startContent={
                <button onClick={()=>{onSearch(query)}}>
                    <SearchIcon className='text-black'/>
                </button>
            }
            onClear={()=>{setQuery("")}}
            onChange={handleChange}
        />
    )
}
export default SearchInput