import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-full text-sm ${active ? 'bg-pink-200 text-pink-800' : 'hover:bg-pink-100'}`}
    >
      {children}
    </Link>
  );
};

const PublicNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 60);
    } else {
      doScroll();
    }
  };

  return (
    <nav className="w-full sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow flex items-center justify-center">
            <img src={process.env.PUBLIC_URL + '/admiree-logo.jpg'} alt="Admiree" className="w-full h-full object-contain p-1"/>
          </div>
          <span className="font-semibold">Admiree</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={()=>scrollTo('home')} className="px-3 py-2 rounded-full text-sm hover:bg-pink-100">Home</button>
          <button onClick={()=>scrollTo('about')} className="px-3 py-2 rounded-full text-sm hover:bg-pink-100">About</button>
          <button onClick={()=>scrollTo('verify')} className="px-3 py-2 rounded-full text-sm hover:bg-pink-100">Verify</button>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/signin">Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default PublicNav;


