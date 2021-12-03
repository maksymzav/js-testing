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
});
