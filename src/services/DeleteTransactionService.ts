import { getCustomRepository, TransactionRepository } from "typeorm"

import AppError from '../errors/AppError';

import Trasaction from '../models/Transaction';

import Trasactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(Trasactionsrepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction){
      throw new AppError('Transaction does not exist');
    }

    await transactionsRepository.remove(transaction);

  }
}

export default DeleteTransactionService;
