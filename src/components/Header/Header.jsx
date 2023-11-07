import React from 'react'
import './Header.css'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header1 text-4xl font-bold p-4 border-b-4 border-grey flex justify-between items-center'>
            <span>Night<span className='heading'>Trailer</span></span>
            <Link to={'/addmovie'}><Button><span className='heading text-xl flex items-center'>Add New<AddIcon className='ml-1' /></span></Button>
            </Link>
        </div>
    )
}

export default Header