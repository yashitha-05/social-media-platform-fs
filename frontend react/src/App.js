import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Components/Authentication/Authentication';
import HomePage from './Components/HomePage';
import Landing from './Components/Landing';
import PublicLayout from './Components/PublicLayout';
import About from './Components/About';
import VerifyInfo from './Components/VerifyInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserProfile } from './Store/Auth/Action';

import darkTheme from './Theme/DarkTheme';
import lightTheme from './Theme/LightTheme';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import VerifiedSuccess from './Components/VerifiedSuccess/VerifiedSuccess';
import Contact from './Components/Contact';

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const { theme } = useSelector((store) => store);
  const initialTheme = (theme && theme.currentTheme) || localStorage.getItem('theme') || 'light';
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  useEffect(()=>{

    if(jwt){
      dispatch(getUserProfile(jwt))
    }
  
  }, [auth.jwt, jwt, dispatch])

  useEffect(() => {
    // keep local currentTheme in sync with store
    const storeTheme = theme && theme.currentTheme;
    if (storeTheme && storeTheme !== currentTheme) {
      setCurrentTheme(storeTheme);
    }
  }, [theme, currentTheme]);

  useEffect(() => {
    const isDark = (currentTheme || 'light') === 'dark';
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [currentTheme]);
 
  console.log("them ",theme.currentTheme)
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme} className="">
      <CssBaseline />
      <Box sx={{}} className={currentTheme === 'dark' ? 'bg-[#0D0D0D] text-gray-100' : 'bg-white text-gray-900'}>
        {/* <Button variant='content' color='success'>Check Theme</Button> */}
          <Routes>
        {auth.user?.fullName ? (
          <Route path='/*' element={<HomePage/>}></Route>
        ) : (
          <Route element={<PublicLayout/>}>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/verify' element={<VerifyInfo/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/signin' element={<Authentication/>}></Route>
            <Route path='/signup' element={<Authentication/>}></Route>
          </Route>
        )}
        <Route path='/verified' element={<VerifiedSuccess/>}></Route>
      </Routes>
      </Box>
    
      
    </ThemeProvider>
  );
}

export default App;
