import { hash } from "@/crypto";
import { twMerge } from "tailwind-merge";

/**
 * Function to handle date format from server to browser
 * returns date in y yyy-mm-dd format
 */

export const formatDate = (dateVal = "") => {
  if (!dateVal) return "";
  const date = new Date(dateVal);
  let dateRes = "";
  if (date.toString() === "Invalid Date") {
    dateRes = "";
  }
  dateRes = `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
    -2
  )}-${`0${date.getDate()}`.slice(-2)}`;

  return dateRes;
};

/**
 * Returns the Random string of given length
 * @returns randomly generated string of given length
 */

const generateRandomFingerprint = (length) => {
  const combinations =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-._+=";
  let fingerprint = "";
  for (let i = length; i > 0; i--) {
    fingerprint += combinations.charAt(
      Math.floor(Math.random() * combinations.length)
    );
  }

  return fingerprint;
};

/**
 * Returns the most frequent GroupId that occurred else empty string if no such GroupId Exists
 * @returns the Most Frequently Occurred GroupId of devices
 */

export const getDeviceFingerprint = async () => {
  if (typeof navigator.mediaDevices === "undefined")
    return generateRandomFingerprint(64);
  const devices = await navigator.mediaDevices.enumerateDevices();
  const deviceGroupIds = devices
    .map((device) => device.groupId)
    .filter((groupId) => (groupId ? true : false));
  const deviceGroupIdsOccurrence = deviceGroupIds.reduce(
    (prevDeviceGroupIdsOccurrence, groupId) => {
      prevDeviceGroupIdsOccurrence[groupId] =
        (prevDeviceGroupIdsOccurrence[groupId] || 0) + 1;

      return prevDeviceGroupIdsOccurrence;
    },
    {}
  );
  if (isEmptyObject(deviceGroupIdsOccurrence))
    return generateRandomFingerprint(64);

  return Object.keys(deviceGroupIdsOccurrence).reduce((a, b) =>
    deviceGroupIdsOccurrence[a] > deviceGroupIdsOccurrence[b] ? a : b
  );
};

export const CODE_VERIFIER_BASE =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-._~";

/**
 * Returns array of random numbers
 * @param {Number} length array length
 * @returns random numbers array
 */

export const getRandomNumbersArray = (length = 1) => {
  return window.crypto.getRandomValues(new Uint32Array(length));
};

/**
 * Returns the Random string for OpenID code challenge
 * @returns randomly generated string
 */

export const generateCodeChallenge = () => {
  const [randomNumber] = getRandomNumbersArray(1);
  const length = Math.floor(parseFloat(`0.${randomNumber}`) * 86) + 43;
  const randomList = getRandomNumbersArray(length);
  let result = "";
  randomList.forEach((item) => {
    result +=
      CODE_VERIFIER_BASE[
        Math.floor(parseFloat(`0.${item}`) * CODE_VERIFIER_BASE.length)
      ];
  });

  return result;
};

const ABSOLUTE_URL = /^(http[s]?:\/\/|\/)/i;

/**
 * The function checks if both input parameters are empty objects.
 * @returns The function `areEmptyObjects` is returning a boolean value.
 */

export const areEmptyObjects = (a, b) => {
  return (
    a &&
    b &&
    typeof a === "object" &&
    typeof b === "object" &&
    isEmptyObject(a) &&
    isEmptyObject(b)
  );
};

export const arraysEqual = (a, b) => {
  if (Object.is(a, b)) {
    return true;
  }

  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (!Object.is(a[i], b[i])) {
      return false;
    }
  }

  return true;
};

const { hasOwnProperty } = Object.prototype;

/**
 * The `shallowEqual` function checks if two objects are shallowly equal, meaning they have the same
 * keys and values at the top level.
 * @returns The function `shallowEqual` returns a boolean value. It returns `true` if the two input
 * objects `a` and `b` are shallowly equal, and `false` otherwise.
 */

export const shallowEqual = (a, b) => {
  if (areEmptyObjects(a, b)) {
    return true;
  }
  if (arraysEqual(a, b)) {
    return true;
  }

  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    if (areEmptyObjects(a[keysA[i]], b[keysA[i]])) {
      continue;
    }
    if (
      !hasOwnProperty.call(b, keysA[i]) ||
      !arraysEqual(a[keysA[i]], b[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
};

/**
 * Process a form key.  This will call itself in order to build up the object passed in.
 * @param {Object} obj - the object holding the JSON
 * @param {Object} props the properties, this will be destructured to keys and value
 */

const processKey = (obj, props) => {
  const { keys, value } = props;

  const currentKey = keys[0];

  // if there's only one key process and return

  if (keys.length === 1) {
    if (currentKey === "") {
      // if blank then it's an array so push value into it

      obj.push(value);
    } else {
      // assign value to object property or array position

      obj[currentKey] = value;
    }
  } else {
    const currentKeyNotDefined = obj[currentKey] === undefined;
    const currentKeyNotDefinedOrNotArray =
      currentKeyNotDefined || !Array.isArray(obj[currentKey]);
    const currentKeyNotDefinedOrNotObject =
      currentKeyNotDefined || !isObject(obj[currentKey]);
    const nextKey = keys[1];

    if (nextKey === "") {
      if (currentKeyNotDefinedOrNotArray) {
        // create an array for array values

        obj[currentKey] = [];
      }
    } else if (Number.isInteger(parseFloat(nextKey))) {
      // is a digit i.e. array index

      if (currentKeyNotDefinedOrNotArray) {
        // create an array for array values

        obj[currentKey] = [];
      }
    } else if (currentKeyNotDefinedOrNotObject) {
      // create an object

      obj[currentKey] = {};
    }

    // call process key again

    const lastKey = keys.slice(1);
    processKey(obj[currentKey], { keys: lastKey, value });
  }
};

/**
 * Serialize a HTML form
 *
 * @param {Object} form - the HTML form object
 */

export const formToJson = (form) => {
  const json = {};

  new FormData(form).forEach((value, key) => {
    // split the key out into an array of keys, a new key for each value wrapped
    // in squared brackets arrays should return an empty key then the value

    const keys = key.split("[").map((key) => key.replace(/\]/g, ""));

    // pass the keys and the form field value to the function

    processKey(json, { keys, value });
  });

  return json;
};

/**
 * The function `formToUrl` takes a form element, extracts its action URL, and appends the form data as
 * query parameters to the URL.
 * @returns a URL object that contains the form data appended as search parameters.
 */

export const formToUrl = (form) => {
  const url = new URL(form.action);

  new FormData(form).forEach((value, key) => {
    url.searchParams.append(key, value);
  });

  return url;
};

/**
 * The function `formToHref` converts a form element into a URL and returns the href value.
 * @returns a string value.
 */

export const formToHref = (form) => {
  const url = formToUrl(form);
  if (!ABSOLUTE_URL.test(form.getAttribute("action"))) {
    return url.href.replace(document.baseURI, "");
  }

  return url.href;
};

export function classNameConstructor(...args) {
  const classes = [];

  args.forEach((arg) => {
    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(classNameConstructor(...arg));
    } else if (typeof arg === "object" && arg !== null) {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}

export { classNameConstructor as clsx };

export function combineCSSClasses(...inputs) {
  return twMerge(classNameConstructor(inputs));
}

export function kebabToNormalCase(kebabStr) {
  // Check if the input is null, undefined, or not a string
  if (typeof kebabStr !== "string" || !kebabStr.trim()) {
    return ""; // Return an empty string for invalid input
  }

  return kebabStr
    .split("-") // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the words with a space
}

export function hashStringToNumber(str) {
  const hashString = hash(str);
  const trimmedHash = hashString.slice(0, 4);
  const hashNumber = parseInt(trimmedHash, 16);
  return hashNumber;
}

export function capitalizeFirstLetter(string) {
  if (typeof string !== "string" || string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

/**
 * Utility function to truncate text to a specified number of words.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} [maxLength=50] - The maximum number of words to retain.
 * @returns {string} The truncated text with ellipsis if it exceeds the maximum length.
 */
export function truncateText(text, maxLength = 50) {
  // Split the text into words
  const words = text.split(" ");

  if (words.length <= maxLength) {
    return text;
  }

  // Join only the first `maxLength` words
  let truncatedText = words.slice(0, maxLength).join(" ");

  // Check if the last character is a symbol and remove it if necessary
  if (!truncatedText[truncatedText.length - 1].match(/[a-zA-Z0-9]/)) {
    truncatedText = truncatedText.slice(0, -1);
  }

  return truncatedText + "...";
}

export function generateHash(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = hash(data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return parseInt(hashHex, 16);
}
