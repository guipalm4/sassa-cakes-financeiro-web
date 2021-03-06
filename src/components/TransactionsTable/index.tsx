import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  payment: string;
  type: string;
  date: Date;
}


export function TransactionsTable() {

  const [ transactions, setTransactions ] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => {
      setTransactions(response.data)
    })
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Meio de pagamento</th>           
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.payment}</td>
              <td>{transaction.date}</td>
            </tr>          
          ))}
        </tbody>
      </table>
    
    </Container>
  );
}

