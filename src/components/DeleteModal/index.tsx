import Modal from 'react-modal';
// import { FormEvent, useState } from 'react';

import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface DeleteModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function DeleteModal({ isOpen, onRequestClose }: DeleteModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close" 
        >
        
        <img src={closeImg} alt="Fechar" />
        </button>

        <Container>
            <h3>Deseja excluir esse registro ? </h3>
            <button type="submit">Excluir</button>
            <button className="back">Voltar</button>
        </Container>

        </Modal>
    )
}