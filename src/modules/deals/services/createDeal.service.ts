import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/app.error';
import { ICreateDealDTO } from '../dtos/createDeal.dto';
import { Deal } from '../infra/typeorm/entities/deal.entity';
import { IDealsRepository } from '../models/deals.repository.model';

@injectable()
class CreateDealService {
  constructor(
    @inject('DealsRepository')
    private dealsRepository: IDealsRepository,
  ) {}

  public async execute({
    person_name,
    currency,
    title,
    value,
  }: ICreateDealDTO): Promise<Deal> {
    const dealAlreadyExists = await this.dealsRepository.findByTitle(title);

    if (dealAlreadyExists) {
      throw new AppError('This deal already exists!', 400);
    }

    const deal = await this.dealsRepository.create({
      person_name,
      currency,
      title,
      value,
    });

    return deal;
  }
}

export { CreateDealService };
