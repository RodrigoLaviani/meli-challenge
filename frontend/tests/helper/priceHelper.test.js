import formatPrice from '../../src/shared/helper/priceHelper';

describe('formatPrice', () => {
    test('should format the price correctly for currency ARS', () => {
      const price = {
        currency: 'ARS',
        amount: 1000
      };
      const result = formatPrice(price);
      expect(result).toBe('$ 1.000');
    });
  
    test('should format the price correctly for currency other than ARS', () => {
      const price = {
        currency: 'USD',
        amount: 1000
      };
      const result = formatPrice(price);
      expect(result).toBe('U$S 1.000');
    });
});
  