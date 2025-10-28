import React from "react";
import Button from '@mui/material/Button';
import { RiMenu2Line } from "react-icons/ri";

const Header = () => {
    return (
        <header className='w-full h-[50px] pl-52 bg-[#f1f1f1] flex item-center justify-between'>
            <div className="part1">
                <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px]">
                    <RiMenu2Line className="text-[22px] text-[rbga(0,0,0,0.8)]"/>
                </Button>
            </div>
        </header>
    )
}

export default Header;