export class User {
  id: number;
  username: string;
  created_at: string;

  constructor() {
    this.id = 0;
    this.username = '';
    this.created_at = '';
  }
}

export const USER_DATAS: Array<User> = [
  { id: 1, username: 'username 1', created_at: '2023-01-01' },
  { id: 2, username: 'username 2', created_at: '2023-01-02' },
  { id: 3, username: 'username 3', created_at: '2023-01-03' },
  { id: 4, username: 'username 4', created_at: '2023-01-04' },
  { id: 5, username: 'username 5', created_at: '2023-01-05' },
  { id: 6, username: 'username 6', created_at: '2023-01-06' },
];
