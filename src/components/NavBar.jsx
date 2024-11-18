import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, ClickAwayListener, InputBase, Menu, MenuItem, MenuList, Paper, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Favorite, Mail, MailLock, Notifications } from '@mui/icons-material';
import { borderRadius } from '@mui/system';


const StyleToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
})

const Search = styled("div")(({theme}) =>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
})  )

const Icons = styled(Box)(({theme}) =>({ 
    display:"none",gap:"30px", alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex",
    }
})  )

const UserBox = styled(Box)(({theme}) =>({ 
    display:"flex",gap:"10px", alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
})  )




const NavBar = () => {

    const [open, setOpen] = useState(false);


  return (
    <AppBar position='sticky' color='success'>
      <StyleToolbar>
             <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>SocialSpire</Typography>
             <Favorite sx={{display:{xs:"block", sm:"none"}}} />
             <Search><InputBase placeholder='search...' /></Search>
             <Icons>

                <Badge badgeContent={4} color="error">
                <Mail />
                </Badge>

                <Badge badgeContent={4} color="error">
                <Notifications />
                </Badge>
                <Avatar onClick={e=>setOpen(true)} sx={{width:30, height:30}} src='https://avatars.githubusercontent.com/u/124455754?v=4' />

             </Icons>
             <UserBox >
               <Avatar onClick={e=>setOpen(true)} sx={{width:30, height:30}} src='https://avatars.githubusercontent.com/u/124455754?v=4' />
               <Typography variant='span'>Ayush</Typography>
             </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar
