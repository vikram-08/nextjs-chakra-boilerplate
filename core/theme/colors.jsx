/** extend additional color here */

const extendedColors = {
  java: {
    50: "#eafff6",
    100: "#ccffe7",
    200: "#9efcd4",
    300: "#5ff6be",
    400: "#19e19e",
    500: "#00ce8e",
    600: "#00a875",
    700: "#008661",
    800: "#006a4e",
    900: "#005742",
    950: "#003126",
  },
};

/** override chakra colors here */

/* The line `const overriddenChakraColors = {};` is declaring a constant variable named
`overriddenChakraColors` and assigning it an empty object `{}`. This object can be used to override
or replace the default Chakra colors with custom colors. */

const overriddenChakraColors = {};

/* The code is exporting a constant named `colors` which is an object. This object contains the merged
properties of two other objects: `overriddenChakraColors` and `extendedColors`. The spread operator
(`...`) is used to merge the properties of these two objects into the `colors` object. */

export const colors = {
  ...overriddenChakraColors,
  ...extendedColors,
};
