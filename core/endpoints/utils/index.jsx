export const getBodyAsJson = ({ data } = { data: {} }) => {
  try {
    return data;
  } catch (error) {
    return {};
  }
};

/**
 * Return the error response object from the response and JSON payload
 * Entire json object is included in payload in case things like devMessage are passed and needed
 *
 * @param {Response} response - the response
 * @param {Object} json - the json from the response
 * @return {Object} The error response JSON
 */
export const populateError = (response, json) => {
  const { status } = response;

  return {
    error: {
      ...json,
      status,
    },
  };
};

/**
 * Returns whether a property exists in an object
 *
 * Used to map checkbox string true into a boolean needed by the endpoint
 *
 * @param {object} prop The property to look for
 * @param {obj} prop The object to look in
 * @return {Boolean} Whether the property exists in the object was true.
 */
export const propertyExistsInObject = (prop, obj) => {
  if (obj === null || typeof obj !== "object") {
    return false;
  }

  return prop in obj;
};

export const objectToParams = (queryObject) => {
  // Check if queryObject is an object
  if (typeof queryObject !== "object" || queryObject === null) {
    return "";
  }

  // Convert the object into an array of key-value pairs
  const keyValueArray = Object.entries(queryObject);

  // Map over the array and join each key-value pair with '=' sign
  const keyValueStrings = keyValueArray.map(
    ([key, value]) => `${key}=${value}`
  );

  // Join all key-value strings with '&'
  return keyValueStrings.join("&");
};
