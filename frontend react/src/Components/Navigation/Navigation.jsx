import React from "react";
import { navigationMenu } from "../../Utils/NavigationMenu";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Auth/Action";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const {auth}=useSelector(store=>store);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLogoutMenu = Boolean(anchorEl);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleOpenLogoutMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout=()=>{
    dispatch(logout());
    handleClose();
    navigate('/');
  }
  return (
    <div className="h-screen sticky top-0 ">
      <div>
        <div className="py-5">
          <div
            onClick={() => navigate('/')} 
            className="w-16 h-16 rounded-full overflow-hidden cursor-pointer bg-white shadow flex items-center justify-center"
            title="Admiree"
          >
            <img
              className="w-full h-full object-contain p-2"
              src={process.env.PUBLIC_URL + '/admiree-logo.jpg'}
              alt="Admiree logo"
            />
          </div>
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div onClick={()=> item.title==="Profile"?navigate(`/profile/${auth.user?.id}`): navigate(item.path)} className="cursor-pointer flex space-x-3 items-center">
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#e91e63",
            }}
            variant="contained"
            size="large"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const input = document.getElementById("tweet-input");
                if (input) input.focus();
              }, 50);
            }}
          >
            Mood Sharing
          </Button>
        </div>
      </div>

     <div className="flex items-center  justify-between">
     <div className="flex items-center space-x-3">
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
        />

        <div>
          <p className="font-bold">{auth.user?.fullName}</p>
          <p className="opacity-70">@{auth.user?.fullName.split(" ")[0]}</p>
        </div>
      </div>
      <Button
        id="basic-button"
        aria-controls={openLogoutMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openLogoutMenu ? 'true' : undefined}
        onClick={handleOpenLogoutMenu}
      >
          <MoreHorizIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openLogoutMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    
     </div>
    </div>
  );
};

export default Navigation;
