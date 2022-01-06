import { useTransactions } from "../../hooks/useTransactions";
import { useState } from "react";
import { Container } from "./styles";

import removeButton from '../../assets/delete.svg';
import { DeleteModal } from "../DeleteModal";


export function TransactionsTable() {
    const { transactions } = useTransactions();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState('');

      function handleOpenDeleteModal() {
          let transaction_id = document.getElementsByClassName('transaction_id')[0] as HTMLFormElement;
          console.log(transaction_id.value)
          setSelectedTransaction(transaction_id.value);
          setIsDeleteModalOpen(true);
      }

      function handleCloseDeleteModal() {
          setIsDeleteModalOpen(false);
      }

    return (
        <Container>
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onRequestClose={handleCloseDeleteModal}
            />
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt),
                                )}
                            </td>
                            <td>
                                <input className="transaction_id" value={transaction.id}></input>
                                <img src={removeButton} alt="Deletar" width={18} onClick={handleOpenDeleteModal}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}