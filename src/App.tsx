import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';


Modal.setAppElement('#root');

export function App() {
    const [isNewTransctionModalOpen, setIsNewTransactionModalOpen] = useState(false);

      function handleOpenNewTransactionModal() {
          setIsNewTransactionModalOpen(true);
      }

      function handleCloseNewTransactionModal() {
          setIsNewTransactionModalOpen(false);
      }

  return (
    <>
      <Header onOpenNewTransactionNewModal={handleOpenNewTransactionModal}/>
      <Dashboard  />

      <NewTransactionModal 
        isOpen={isNewTransctionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </>
  );
}