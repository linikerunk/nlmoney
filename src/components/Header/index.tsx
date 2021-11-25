import logoImg from '../../assets/logo.svg'; 
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionNewModal: () => void;
}

export function Header({ onOpenNewTransactionNewModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="nl money" />
                <button type="button" onClick={onOpenNewTransactionNewModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}