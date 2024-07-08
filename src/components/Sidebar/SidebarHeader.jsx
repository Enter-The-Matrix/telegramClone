import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { setDrawer } from '../../store/slice/appDrawerSlice'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: '#181818',
    '&:hover': {
        backgroundColor: alpha('#181818', 0.75),
    },
    marginLeft: theme.spacing(2),
    width: '100%', 
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto', 
        maxWidth: '500px', 
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: theme.spacing(6), 
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '100%', 
            '&:focus': {
                width: '100%', 
            },
        },
    },
}));

export default function SidebarHeader() {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state => state.appDrawer.drawerOpen))

    const toggleDrawer = () => {
        dispatch(setDrawer(!drawerOpen));
    };

    return (
        <Box sx={{ width: '100%' }} >
            <AppBar position="static" sx={{ maxHeight: '55px', backgroundColor: '#212121', justifyContent: 'center' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon sx={{ color: '#5E5E5E' }} />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: '#5E5E5E' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{
                                color: '#ffffff',
                                '::placeholder': {
                                    color: '#5E5E5E',
                                },
                            }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
