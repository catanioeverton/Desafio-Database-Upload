import { getCustomRepository, TransactionRepository } from "typeorm"

import AppError from '../errors/AppError';

import Trasaction from '../models/Transaction';

import Trasactionsrepository from '..//repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const trasactionsRepository = getCustomRepository(Trasactionsrepository);

    const transaction = await trasactionsRepository.findOne(id);

    if (!transaction){
      throw new AppError('Transaction does not exist');
    }

    await transactionsRepository.remove(transaction);

  }
}

export default DeleteTransactionService;
