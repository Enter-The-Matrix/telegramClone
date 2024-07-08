import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { setDarkMode, setDrawer } from '../store/slice/appDrawerSlice';
import profileImg from '../assets/profileImg.png'
import Brightness3Icon from '@mui/icons-material/Brightness3';
export default function SideDrawer() {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.appDrawer.darkMode)
  const drawerOpen = useSelector((state) => state.appDrawer.drawerOpen);
  const [showList, setShowList] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    dispatch(setDrawer(newOpen));
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  const darkModeToggle = () => {
    dispatch(setDarkMode(!darkMode))
  }

  const customIconStyle = {
    color: '#838F9B',
  };

  const sideDrawerItems0 = [
    {
      title: "Beyond Chats",
      icon: <Avatar alt="Travis Howard" src={profileImg} sx={{ width: 30, height: 30 }} />
    },
    {
      title: "Add Account",
      icon: <AddOutlinedIcon style={customIconStyle} />
    },
  ];

  const sideDrawerItems1 = [
    {
      title: "My Profile",
      icon: <AccountCircleOutlinedIcon style={customIconStyle} />
    },
  ];

  const sideDrawerItems2 = [
    {
      title: "My New Group",
      icon: <GroupOutlinedIcon style={customIconStyle} />
    },
    {
      title: "Contacts",
      icon: <Person2OutlinedIcon style={customIconStyle} />
    },
    {
      title: "Calls",
      icon: <CallOutlinedIcon style={customIconStyle} />
    },
    {
      title: "People Nearby",
      icon: <PersonPinOutlinedIcon style={customIconStyle} />
    },
    {
      title: "Saved Messages",
      icon: <BookmarkBorderOutlinedIcon style={customIconStyle} />
    },
    {
      title: "Settings",
      icon: <SettingsOutlinedIcon style={customIconStyle} />
    },
  ];

  const sideDrawerItems3 = [
    {
      title: "Invite Friends",
      icon: <PersonAddOutlinedIcon style={customIconStyle} />
    },
    {
      title: "Telegram Features",
      icon: <HelpOutlineOutlinedIcon style={customIconStyle} />
    },
  ];

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box className='h-full w-[500px]' sx={{ width: 300, backgroundColor: '#1C242F', color: 'white' }} role="presentation" onClick={toggleDrawer(false)}>
        <div className='bg-[#233040]' onClick={stopPropagation}>
          <div className='flex flex-row justify-between py-2 px-4'>
            <Avatar className='cursor-pointer' alt="Beyond Chats"
              src={profileImg} sx={{ width: 64, height: 64 }}
            />
            <div className='cursor-pointer' onClick={darkModeToggle}
            >
                {darkMode ? <WbSunnyIcon /> : <Brightness3Icon  />}

            </div>
          </div>
          <div className='flex flex-row justify-between py-2 px-4 cursor-pointer' onClick={toggleList}>
            <div className='flex flex-col '>
              <div className='text-m'>Beyond Chats</div>
              <div className='text-sm text-[#687888]'>+91 850343389</div>
            </div>
            <div >
              {showList ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
            </div>
          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-1000 ${showList ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {showList && (
            <List>
              {sideDrawerItems0.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={stopPropagation}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </div>
        <Divider />
        <List>
          {sideDrawerItems1.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={stopPropagation}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'body2' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {sideDrawerItems2.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={stopPropagation}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'body2' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {sideDrawerItems3.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={stopPropagation}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'body2' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
