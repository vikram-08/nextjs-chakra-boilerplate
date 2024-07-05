import React from "react";
import PropTypes from "prop-types";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  Box,
  Skeleton,
} from "@chakra-ui/react";
import {
  IconInfoCircle,
  IconInfoTriangle,
  IconCircleX,
  IconBulb,
  IconCircleCheck,
} from "@tabler/icons-react";

/**
 * Admonition component to display different types of alerts with custom icons and colors.
 * @param {Object} props - Component props.
 * @param {string} props.status - Status of the admonition (error, info, loading, success, warning).
 * @param {ReactNode} props.children - Content to be displayed inside the admonition.
 * @returns {JSX.Element} - Admonition component.
 */
const Admonition = ({ status, children }) => {
  // Define color and icon mappings
  const replacedStatuses = {
    danger: "error",
    tip: "loading",
    note: "info",
  };
  const actualStatus = replacedStatuses[status] || status;

  const statuses = {
    error: {
      colorScheme: "red",
      icon: IconCircleX,
    },
    info: {
      colorScheme: "cyan",
      icon: IconInfoCircle,
    },
    loading: {
      colorScheme: "gray",
      icon: IconBulb,
    },
    success: {
      colorScheme: "green",
      icon: IconCircleCheck,
    },
    warning: {
      colorScheme: "yellow",
      icon: IconInfoTriangle,
    },
  };

  // Get the selected status icon
  const currentStatus = statuses[actualStatus];

  // Render the Admonition component
  return (
    <Box
      borderWidth={1}
      borderLeft="6px solid"
      borderRadius={8}
      borderColor={`${currentStatus.colorScheme}.500`}
      bg={`${currentStatus.colorScheme}.50`}
      color={`${currentStatus.colorScheme}.600`}
      mb={4}
    >
      <Alert
        status={actualStatus}
        flexDirection={"column"}
        className="!items-start"
      >
        <Box display={"flex"} className="mb-2">
          <currentStatus.icon className="w-12 h-6" />
          <AlertTitle>{status.toUpperCase()}</AlertTitle>
        </Box>
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    </Box>
  );
};

// PropTypes
Admonition.propTypes = {
  status: PropTypes.oneOf([
    "error",
    "info",
    "tip",
    "danger",
    "loading",
    "success",
    "warning",
  ]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Admonition;

export const AdmonitionSkeleton = () => {
  return (
    <Box
      borderWidth={1}
      borderLeft="6px solid"
      borderRadius={8}
      color="gray.600"
      p={4}
      mb={4}
    >
      <Skeleton height="24px" width="50%" />
      <Skeleton height="16px" width="100%" mt={2} />
      <Skeleton height="16px" width="100%" mt={2} />
      <Skeleton height="16px" width="80%" mt={2} />
    </Box>
  );
};
