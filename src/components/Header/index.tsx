import logoImg from '../../assets/logoapp.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {
 return (
   <>
    <Container>
      <Content>
        <img src={logoImg} alt='dtmoney'/>
        <span>Financeiro</span>
        <button onClick={onOpenNewTransactionModal}>Nova Transação</button>        
       </Content>
    </Container>
   </>
 )
}
  