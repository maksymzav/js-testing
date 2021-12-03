import {TestBed} from '@angular/core/testing';

import {FunctionsService} from './functions.service';

describe('FunctionsService', () => {
  let service: FunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('service.reverseString()', () => {
    it('should reverse a string 12345', () => {
      expect(service.reverseString('12345')).toBe('54321');
    });

    it('should reverse a string laptop', () => {
      expect(service.reverseString('laptop')).toBe('potpal');
    });

    it('should reverse a string with uppercase letters', () => {
      expect(service.reverseString('tAblE')).toBe('ElbAt');
    });
  });

  describe('service.reverseNumber()', () => {
    it('should reverse a number', () => {
      expect(service.reverseNumber(12345)).toBe(54321);
    });

    it('should reverse a number with a 0', () => {
      expect(service.reverseNumber(123450)).toBe(54321);
    });
  });

  describe('service.isPalindrome()', () => {
    it('should confirm "madam" is a palindrome', () => {
      expect(service.isPalindrome('madam')).toBe(true);
    });
    it('should confirm "nurses run" is a palindrome', () => {
      expect(service.isPalindrome('nurses run')).toBe(true);
    });
    it('should confirm that dog is NOT a palindrome', () => {
      expect(service.isPalindrome('dog')).toBe(false);
    });
  });

  describe('service.sortAlphabetically()', () => {
    it('should sort the string banderaisahero in alphabetical order', () => {
      expect(service.sortAlphabetically('banderaisahero')).toBe('aaabdeehinorrs');
    });
    it('should sort the string commonlanguage in alphabetical order', () => {
      expect(service.sortAlphabetically('commonlanguage')).toBe('aacegglmmnnoou');
    });
  });

  describe('service.capitalize()', () => {
    it('should capitalize the string bandera is a hero', () => {
      expect(service.sortAlphabetically('bandera is a hero')).toBe('Bandera Is A Hero');
    });
    it('should capitalize the string common language', () => {
      expect(service.sortAlphabetically('common language')).toBe('Common Language');
    });
  });
});
