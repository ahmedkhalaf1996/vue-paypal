import PayPalProp from '@/util/paypalProp';

describe('paypalProp.js', () => {
  describe('new paypalProp()', () => {
    test('construct with most options specified', () => {
      const paypal = new PayPalProp({
        name: 'some-name',
        paypalName: 'somePaypal',
        injection: 'someExperience',
      });

      expect(paypal).toEqual(expect.objectContaining({
        name: 'some-name',
        propName: 'somePaypal',
        injection: 'someExperience',
      }));
    });

    test('construct with just name specified', () => {
      const paypal = new PayPalProp({ name: 'some-name' });

      expect(paypal).toEqual(expect.objectContaining({
        name: 'some-name',
        propName: 'some-name',
        injection: 'button',
      }));
    });
  });

  test('getVmProp()', () => {
    const paypal = new PayPalProp({
      name: 'some-name',
      paypalName: 'somePaypal',
      injection: 'someExperience',
    });

    const prop = paypal.getVmProp();

    expect(prop).toEqual({
      type: Object,
      required: false,
    });
  });

  test('change()', () => {
    const paypal = new PayPalProp({
      name: 'some-name',
      paypalName: 'somePaypal',
      injection: 'someExperience',
    });

    const o = {
      'some-name': { text: 'paypal is so cool' },
    };

    const diff = paypal.getChange(o);

    expect(diff).toEqual({
      name: 'somePaypal',
      value: { text: 'paypal is so cool' },
    });
  });
});
