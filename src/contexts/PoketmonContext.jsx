import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const PoketmonContext = createContext();

export const PoketmonProvider = ({ children }) => {
   const [selected, setSelected] = useState([])
 
   const addPoketmon = (poket) => {
     if (selected.find(p => p.id === poket.id)) {
       toast.error('이미 선택된 포켓몬입니다!')
       return
     }
     if (selected.length >= 6) {
       toast.warn('포켓몬은 최대 6마리까지 선택할 수 있어요!')
       return
     }
     setSelected(prev => [...prev, poket])
     toast.success(`${poket.name}을(를) 추가했어요!`)
   }

  const removePoketmon = (id) => {
    setSelected(prev => prev.filter(p => p.id !== id));
    toast.info('포켓몬이 삭제되었습니다.');
  };

  return (
    <PoketmonContext.Provider value={{ selected, addPoketmon, removePoketmon }}>
      {children}
    </PoketmonContext.Provider>
  );
};

export const usePoketmon = () => useContext(PoketmonContext);