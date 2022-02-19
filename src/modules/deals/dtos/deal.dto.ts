export interface IDeal {
  id: number;
  title: string;
  person_name: string;
  value: number;
  currency: string;
  update_time: string;
  status: 'open' | 'won' | 'lost' | 'deleted';
}
