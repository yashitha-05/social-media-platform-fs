import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
// import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/home"
    },
    {
        title: "Explore",
        icon:<ExploreIcon/>,
        path:"/explore"
    },
    {
        title: "Notifications",
        icon:<NotificationsIcon/>,
        path:"/notifications"
    },
    {
        title:"Messages" ,
        icon:<MessageIcon/>,
        path:"/messages"
    },
    // Lists removed
    {
        title:"Communities" ,
        icon:<GroupIcon/>,
        path:"/communities"
    },
    
    {
        title:"Profile" ,
        icon:<AccountCircleIcon/>,
        path:"/profile"
        
    },
    {
        title:"Settings" ,
        icon:<SettingsIcon/>,
        path:"/settings"
    },
]