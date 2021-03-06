function ToggleItCore({ features = {}, options = { default: true } } = {}) {
  let _features = features;

  const setFeaturesData = (features) => {
    _features = features;
  }

  const on = (featureName, customCheck) => {
    if(_features.hasOwnProperty(featureName)) {
      if(typeof customCheck === "function") {
        return customCheck(_features[featureName]);
      } else {
        return _features[featureName];
      }
    } else {
      return options.default;
    }
  }

  return {
    on,
    setFeaturesData,
  }
}

module.exports = ToggleItCore;
