/* eslint-disable no-undef */
import CryptoJS from "crypto-js";
import config from "@/config";

/**
 * The function `stringify` takes in data and a type parameter, and returns a string representation of
 * the data based on the type.
 * @returns The function `stringify` returns a string representation of the `data` parameter based on
 * the `type` parameter. The specific return value depends on the value of `type` and the type of
 * `data`.
 */

const stringify = (data, type) => {
  switch (type) {
    case "hash":
      return typeof data === "object"
        ? JSON.stringify(data)
        : typeof data !== "string"
          ? String(data) + "||"
          : data + "||";
    case "sign":
      return typeof data === "object"
        ? JSON.stringify(data)
        : typeof data !== "string"
          ? String(data)
          : data;
    default:
      if (typeof data === "object") {
        return JSON.stringify(data);
      } else if (typeof data !== "string") {
        return String(data);
      } else {
        return data;
      }
  }
};

/**
 * The function `oldHash` takes an algorithm and data as input, and returns the hash value of the data
 * using the specified algorithm (or MD5 by default).
 * @returns the hash value of the input data using the specified algorithm. The hash value is converted
 * to a hexadecimal string before being returned.
 */

export const oldHash = (algo, data) => {
  const algos = ["MD5", "SHA1", "SHA256", "SHA512"];
  const useAlgo = algos.includes(algo.toUpperCase())
    ? algo.toUpperCase()
    : "MD5";
  return CryptoJS[useAlgo](data).toString(CryptoJS.enc.Hex);
};

//Hashing functions
/**
 * The function `hash` takes an algorithm, data, and key as input and returns the hash value of the
 * concatenated stringified data and key using the specified algorithm.
 * @returns a hashed string representation of the concatenated `data` and `key` values using the
 * specified hashing algorithm (`algo`). The hashing algorithm used is determined by the `algo`
 * parameter, which can be one of the following: "MD5", "SHA1", "SHA256", or "SHA512". If the `algo`
 * parameter is not one of these options, the default
 */

export const hash = (data, algo = "md5", key) => {
  const algos = ["MD5", "SHA1", "SHA256", "SHA512"];
  const useAlgo = algos.includes(algo.toUpperCase())
    ? algo.toUpperCase()
    : "MD5";
  return CryptoJS[useAlgo](stringify(data, "hash") + stringify(key)).toString(
    CryptoJS.enc.Hex
  );
};

/**
 * The function `sign` takes an algorithm, data, and key as input and returns a hexadecimal string
 * representing the signature of the data using the specified algorithm and key.
 * @returns a string representation of the HMAC (Hash-based Message Authentication Code) signature of
 * the data using the specified algorithm and key. The signature is returned as a hexadecimal string.
 */

export const sign = (algo, data, key) => {
  const algos = ["HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"];
  const useAlgo = algos.includes(algo) ? algo : "HmacSHA256";
  return CryptoJS[useAlgo](stringify(key), stringify(data)).toString(
    CryptoJS.enc.Hex
  );
};

/**
 * The function converts a hexadecimal string to a binary string.
 * @returns The function `hex2bin` returns a binary representation of the input `data` which is
 * converted from a hexadecimal string.
 */

export const hex2bin = (data) => {
  return Buffer.from(data, "hex").toString();
};

/**
 * The function `bini2hex` converts binary data to hexadecimal format using the `Buffer` class in
 * JavaScript.
 * @returns The function `bini2hex` returns a hexadecimal representation of the input data.
 */
export const bini2hex = (data) => {
  return Buffer.from(data, "binary").toString("hex");
};

/**
 * The function `aesEncrypt` encrypts a plain text using AES encryption with a specified key and
 * initialization vector.
 * @returns The function `aesEncrypt` returns the encrypted version of the `plainText` using AES
 * encryption.
 */

export const aesEncrypt = (plainText) => {
  return CryptoJS.AES.encrypt(
    stringify(plainText),
    CryptoJS.enc.Utf8.parse(config.key),
    {
      iv: CryptoJS.enc.Utf8.parse(config.iv),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    }
  ).toString();
};

/**
 * The function `aesDecrypt` is used to decrypt a given cipher text using AES encryption in JavaScript
 * React.
 * @returns The function `aesDecrypt` returns the decrypted plaintext obtained by decrypting the
 * `cipherText` using AES encryption with the specified key, initialization vector (IV), padding, and
 * mode. The decrypted plaintext is returned as a string in UTF-8 encoding.
 */

export const aesDecrypt = (cipherText) => {
  return CryptoJS.AES.decrypt(cipherText, CryptoJS.enc.Utf8.parse(config.key), {
    iv: CryptoJS.enc.Utf8.parse(config.iv),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  }).toString(CryptoJS.enc.Utf8);
};
