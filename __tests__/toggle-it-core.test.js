const ToggleItCore = require('../index.js');

describe('.on', () => {
  test('returns true given a true feature', () => {
    const toggleIt = ToggleItCore({
      features: {
        feature1: true,
      }
    });

    expect(toggleIt.on('feature1')).toBe(true);
  });

  test('returns false given a false feature', () => {
    const toggleIt = ToggleItCore({
      features: {
        feature1: false,
      }
    });

    expect(toggleIt.on('feature1')).toBe(false);
  });

  describe('given an unknown feature', () => {
    test('defaults to true', () => {
      const toggleIt = ToggleItCore();

      expect(toggleIt.on('unknownFeature')).toBe(true);
    });

    test('returns de given default', () => {
      const toggleIt = ToggleItCore({
        options: {
          default: false,
        }
      });

      expect(toggleIt.on('unknownFeature')).toBe(false);
    })
  })

  describe('given a function', () => {
    test('overrides the initial value', () => {

      const toggleIt = ToggleItCore({
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
