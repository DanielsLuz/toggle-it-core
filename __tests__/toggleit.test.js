const ToggleIt = require('../index.js');

describe('.on', () => {
  test('returns true given a true feature', () => {
    const toggleIt = ToggleIt({
      feature1: true,
    });

    expect(toggleIt.on('feature1')).toBe(true);
  });

  test('returns false given a false feature', () => {
    const toggleIt = ToggleIt({
      feature1: false,
    });

    expect(toggleIt.on('feature1')).toBe(false);
  });

  test('returns true given a unknown feature', () => {
    const toggleIt = ToggleIt();

    expect(toggleIt.on('unknownFeature')).toBe(true);
  });

  describe('given a function', () => {
    test('overrides the initial value', () => {

      const toggleIt = ToggleIt({
        feature1: false,
      });

      const someCustomFunction = () => {
        return true;
      }
      expect(toggleIt.on('feature1', someCustomFunction)).toBe(true);
    })
  });
});
