/* This code snippet defines a JavaScript object named `Divider`. It has two properties: */

const Divider = {
  defaultProps: { size: "md" },
  sizes: {
    xl: { borderWidth: "8px" },
    lg: { borderWidth: "4px" },
    md: { borderWidth: "2px" },
    sm: { borderWidth: "1px" },
  },
};

export default Divider;
