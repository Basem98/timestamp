const { isProperDate } = require('./controllers');

// A unit tests suite to test the date validation functions that go into the timestamp API's controllers
describe('Date Validation', () => {
  const currentDateMillisec = Date.now();

  test('Should return a proper Date object if the passed input is a proper timestamp integer', () => {
    expect(isProperDate(currentDateMillisec)).toEqual(new Date(currentDateMillisec));
  });

  test('Should return a proper Date object if the passed input is a proper timestamp string', () => {
    expect(isProperDate('12-05-2015')).toEqual(new Date('12-05-2015'));
  });

  test('Should return a proper Date object of the current date if the passed input is an empty string', () => {
    const currentDate = new Date();
    expect(isProperDate(null)).toEqual(currentDate);
  });

  test('Should return NaN if the passed input is an invalid date value', () => {
    expect(isProperDate('not-a-date')).toEqual(null);
  });
});