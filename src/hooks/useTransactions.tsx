import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }
// type TransactionInput2 = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


interface TransactionsProviderProps {
    children: React.ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData, 
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(() => {
        api.get("transactions")
        .then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });

        const { transaction } = response.data;

        setTransactions([...transactions, transaction]); // conceito de mutabilidade;
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        {children}
        </TransactionsContext.Provider>
        );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    if (!context) {
        throw new Error('useTransaction must be used within a TransactionsProvider');
    }

    return context;
}