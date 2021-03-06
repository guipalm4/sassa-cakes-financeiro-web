import { useState } from 'react';

import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal  from 'react-modal';
import { NewTransactionModal} from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {


  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle/>      
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>   
      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseTransactionModal}
      />
      </>      
  );
}
