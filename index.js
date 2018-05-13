function ToggleIt(args = {}) {
  const on = (featureName, customCheck) => {
    if(typeof customCheck === "function") {
      return customCheck();
    } else {
      if(args.hasOwnProperty(featureName)) {
        return args[featureName];
      } else {
        return true;
      }
    }
  }

  return {
    on,
  }
}

module.exports = ToggleIt;
