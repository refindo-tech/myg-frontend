import React from 'react';
import { Input } from "@nextui-org/react";
import { SearchIcon } from '@components/mya/icons';

const SearchBar: React.FC = () => {
  return (
    <Input
      classNames={{
        base: "max-w-full sm:max-w-[10rem]",
        mainWrapper: "h-full p-0",
        input: "text-gray-400 text-sm font-normal font-['Open Sans'] leading-[14px] placeholder-gray-400 dark:placeholder-gray-500",
        inputWrapper: "h-1/2 font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="I'm looking for..."
      size="sm"
      endContent={<SearchIcon size={18} />}
      type="search"
      radius='full'
    />
  );
};

export default SearchBar;