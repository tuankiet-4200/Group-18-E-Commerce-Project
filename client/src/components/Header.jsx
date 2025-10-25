import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { BsCart3 } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 1,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#ff5252', 
  },
}));

export const Header = () => {
  return (
    <header>
      <div className='top-strip border-b-[1px] border-t-[1px] border-gray-200 py-2'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div className='col1 w-[50%]'>
              <p className='text-[12px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
            </div>
            <div className='col2 flex items-center justify-end'>
              <ul className='flex items-center gap-3'>
                <li className='list-none'>
                  <Link to="help-center" className='link text-[13px] font-[500] transiton'>Help center</Link>
                </li>
                <li className='list-none'>
                  <Link to="order-tracking" className='link text-[13px] font-[500] transiton'>Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='header py-3'>
        <div className='container flex items-center justify-between'>
          <div className='col1 w-[25%]'>
            <Link><img src="/logo.webp" alt="logo image" className='h-[80px]' /></Link>
          </div>
          <div className='col2 w-[45%]'>
            <Search />
          </div>
          <div className='col3 w-[30%] flex items-center justify-end'>
            <ul className='flex items-center gap-3'>
              <li className='list-none'>
                <Link to='/login' className='link transition text-[15px] font-500'>Login</Link> | <Link to='/register' className='link transition text-[15px] font-500'>Register</Link>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="compare">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoIosGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <BsCart3 />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="wishlist">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
