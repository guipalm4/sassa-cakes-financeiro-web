import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from './styles'
export function Summary() {
  return(
    <Container> 
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas'/>
        </header>
        <strong>R$ 500,00</strong>
      </div>

      <div>
        <header>
          <p>Casa</p>
          <img src={outcomeImg} alt='Saidas'/>
        </header>
        <strong>-R$ 200,00</strong>
      </div>

      <div>
        <header>
          <p>Insumos</p>
          <img src={outcomeImg} alt='Saidas'/>
        </header>
        <strong>-R$ 200,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total'/>
        </header>
        <strong>R$ 300,00</strong>
      </div>
    </Container>
  )
}