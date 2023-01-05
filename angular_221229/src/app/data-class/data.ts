export class Data {
  id: number;
  title: string;
  content: string;
  view: number;
  date: string;

  constructor() {
    this.id = 0;
    this.title = '';
    this.content = '';
    this.view = 0;
    this.date = '';
  }
}

export const TEMP_DATAS: Array<Data> = [
  {
    id: 1,
    title: 'title 1',
    content: 'content 1',
    view: 1,
    date: '2023-01-06',
  },
  {
    id: 2,
    title: 'title 2',
    content: 'content 2',
    view: 2,
    date: '2023-01-06',
  },
  {
    id: 3,
    title: 'title 3',
    content: 'content 3',
    view: 3,
    date: '2023-01-06',
  },
  {
    id: 4,
    title: 'title 4',
    content: 'content 4',
    view: 4,
    date: '2023-01-06',
  },
  {
    id: 5,
    title: 'title 5',
    content: 'content 5',
    view: 5,
    date: '2023-01-06',
  },
];
