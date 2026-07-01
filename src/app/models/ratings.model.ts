export interface Ratings {

  google?: number;

  glassdoor?: number;

  interviewDifficulty?:
    | 'Easy'
    | 'Medium'
    | 'Hard';
}