import { Option } from './entities/option.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Option)
export class OptionsRepository extends Repository<Option> {}
