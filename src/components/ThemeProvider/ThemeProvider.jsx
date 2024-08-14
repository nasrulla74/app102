'use client';

import { useEffect, useState } from 'react';

import ThemeContext from '@/context/themeContext';

const ThemeProvider = ({ children }) => {
  const themeFromStorage =
    typeof localStorage !== 'undefined' && localStorage.getItem('hotel-theme')
      ? JSON.parse(localStorage.getItem('hotel-theme'))
      : false;

  const [darkTheme, setDarkTheme] = useState(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ 
      darkTheme, 
      setDarkTheme, 
      showCart,
      setShowCart,
      selectedProduct,
      setSelectedProduct,
      selectedRoomType, 
      setSelectedRoomType,
      }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className='dark:text-white dark:bg-black text-[#1E1E1E]'>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
