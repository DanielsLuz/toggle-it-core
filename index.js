function ToggleIt({ features = {}, options = { default: true } } = {}) {

  const on = (featureName, customCheck) => {
    if(typeof customCheck === "function") {
      return customCheck();
    } else {
      if(features.hasOwnProperty(featureName)) {
        return features[featureName];
      } else {
        return options.default;
      }
    }
  }

  return {
    on,
  }
}

module.exports = ToggleIt;
