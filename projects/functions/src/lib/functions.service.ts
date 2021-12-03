import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() {
  }

  reverseString(input: string): string {
    return '';
  }

  reverseNumber(input: number): number {
    return 0;
  }

  isPalindrome(input: string): boolean {
    return false;
  }

  sortAlphabetically(input: string): string {
    return '';
  }

  capitalize(input: string): string {
    return '';
  }
}
