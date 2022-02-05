export interface Question {
  readonly id: number, 
  title: string,
  votes: number,
  answers: number,
  views: number,
  tags: string[],
  createdAt: string
}

export interface Navigation {
  navigate: Function
}
