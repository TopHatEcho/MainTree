const { validator } = require('./timedtest.js');

describe('should check if username is allowed', () => {
  test('should allow both numbers and letters', () => {
    expect(validator('Geoff66')).toEqual(true);
  });
  test('should allow - in username', () => {
    expect(validator('Geoff-66')).toEqual(true);
  });
  test('no space allowed', () => {
    expect(validator('Geoff 66')).toEqual(false);
  });
  test('can not end in -', () => {
    expect(validator('Geoff66-')).toEqual(false);
  });
  test('can not be longer than 16 or shorter than 6', () => {
    expect(validator('Geoff6sdawdawdadadwa')).toEqual(false);
    expect(validator('Geoff')).toEqual(false);
  });

  test('allow only 1 -', () => {
    expect(validator('Geoff--66')).toEqual(false);
  });

});