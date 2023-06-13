export function getNonEmptyKey(obj) {
    for (let key in obj) {
        const value = obj[key];
        if (typeof value !== "undefined" && Object.keys(value).length > 0) {
            return key;
        }
    }
    return null; // Return null if no non-empty key is found
}
export function getNonEmptyObject(...objects) {
  for (let object of objects) {
      if (typeof object !== "undefined" && Object.keys(object).length > 0) {
          return object;
      }
  }
  return null; // Return null if no non-empty object is found
}
