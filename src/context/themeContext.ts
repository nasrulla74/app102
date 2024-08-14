import { Dispatch, SetStateAction, createContext } from 'react';

type ThemeContextType = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  selectedProduct: string;
  setSelectedProduct: Dispatch<SetStateAction<string>>;
  selectedRoomType: string;
  setSelectedRoomType: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: true,
  setDarkTheme: () => null,
  showCart: false,
  setShowCart: () => null,
  selectedProduct: '',
  setSelectedProduct: () => null,
  selectedRoomType: '',
  setSelectedRoomType: () => null,

});


export default ThemeContext;
