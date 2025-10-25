import React from 'react'
import Button from '@mui/material/Button';
import { BsSearch } from "react-icons/bs";


export const Search = () => {
  return (
    <div className='searchBox w-full h-[50px] bg-[#e5e5e5] rounded-md relative p-2 flex justify-center items-center'>
        <input type="text" placeholder='Search for products...' className='w-full h-10 focus:outline-none bg-inherit p-2 text-[15px]' />
        <Button className='z-50 !min-w-10 h-10 rounded-full'><BsSearch className='text-[#4e4e4e] text-xl'/></Button>
    </div>
  )
}
