const ToggleIt = require('../index.js');

describe('.on', () => {
  test('returns true given a true feature', () => {
    const toggleIt = ToggleIt({
      features: {
        feature1: true,
      }
    });

    expect(toggleIt.on('feature1')).toBe(true);
  });

  test('returns false given a false feature', () => {
    const toggleIt = ToggleIt({
      features: {
        feature1: false,
      }
    });

    expect(toggleIt.on('feature1')).toBe(false);
  });

  describe('given an unknown feature', () => {
    test('defaults to true', () => {
      const toggleIt = ToggleIt();

      expect(toggleIt.on('unknownFeature')).toBe(true);
    });

    test('returns de given default', () => {
      const toggleIt = ToggleIt({
        options: {
          default: false,
        }
      });

      expect(toggleIt.on('unknownFeature')).toBe(false);
    })
  })

  describe('given a function', () => {
    test('overrides the initial value', () => {

      const toggleIt = ToggleIt({
        features: {
          feature1: false,
        }
      });

      const someCustomFunction = () => {
        return true;
      }
      expect(toggleIt.on('feature1', someCustomFunction)).toBe(true);
    })
  });
});
