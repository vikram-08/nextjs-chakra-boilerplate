"use client";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useCountUp } from "@/hooks";

/**
 * A card component to display statistics with a title, stat, and an icon.
 * @param {Object} props - The component's props.
 * @param {string} props.title - The title text.
 * @param {string} props.stat - The statistic value.
 * @param {React.Node} props.icon - The icon component to display.
 */
function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

/**
 * A component to display basic statistics with dynamic data.
 * @param {Object} props - The component's props.
 * @param {string} props.title - The title to display above the statistics.
 * @param {Array} props.statistics - An array of statistic objects.
 * @example
 * // Usage example:
 * <Statistics
 *   title="Our Company Statistics"
 *   statistics={[
 *     {
 *       title: "Users",
 *       stat: "5,000",
 *       icon: <BsPerson size={"3em"} />,
 *     },
 *     {
 *       title: "Servers",
 *       stat: "1,000",
 *       icon: <FiServer size={"3em"} />,
 *     },
 *     {
 *       title: "Datacenters",
 *       stat: "7",
 *       icon: <GoLocation size={"3em"} />,
 *     },
 *     // Add more statistics as needed
 *   ]}
 * />
 */
function Statistics(props) {
  const { title, statistics } = props;
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Text
        as="h1"
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        {title}
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {statistics.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            stat={stat.stat}
            icon={stat.icon}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

Statistics.propTypes = {
  /**
   * The title to display above the statistics.
   */
  title: PropTypes.string.isRequired,

  /**
   * An array of statistic objects. Each object should have a `title`, `stat`, and `icon`.
   */
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      stat: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Statistics;

/**
 * Statistics Component
 *
 * A component to display statistics about the team and projects.
 *
 * @component
 * @example
 * // Example usage of Statistics component with values in an array
 * const statsData = [
 *   { count: 4, label: "active team members" },
 *   { count: 51, suffix: "k", label: "projects shipping faster" },
 *   { count: 100, suffix: "+", label: "captivating readers around the world" },
 * ];
 * <Statistics statsData={statsData} />
 *
 * @param {Array} statsData - An array of objects representing statistic data.
 */
export function AnimatedStatistics({ statsData }) {
  return (
    <React.Fragment>
      <Box className="force-full-width relative z-40 border border-divide-color dark:border-dark-divide-color bg-gray-50 dark:bg-black">
        <Box className="mx-auto flex w-full max-w-screen-monitor flex-col items-center justify-evenly space-y-16 py-8 md:flex-row md:space-y-0">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              count={stat.count}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
}

/**
 * StatItem Component
 *
 * A subcomponent to display an individual statistic item.
 *
 * @component
 * @param {number} count - The numerical value for the statistic.
 * @param {string} [suffix] - The optional suffix to append to the count.
 * @param {string} label - The label or description for the statistic.
 */
function StatItem({ count, suffix = "", label }) {
  const countRef = useRef(null);

  useCountUp(countRef, count, {
    enableScrollSpy: true,
    suffix,
    scrollSpyDelay: 200,
    scrollSpyOnce: false,
  });

  return (
    <Box className="flex flex-col text-center">
      <span
        ref={countRef}
        className="text-[64px] font-bold leading-[64px] tracking-[-2%] bg-clip-text text-transparent bg-gradient-to-r from-[#3DBFF5] to-[#6F42C1]"
      />
      <span className="text-base leading-[22px] text-gray-800 dark:text-white">
        {label}
      </span>
    </Box>
  );
}

// Define PropTypes for the Statistics component
AnimatedStatistics.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      suffix: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Define PropTypes for the StatItem component
StatItem.propTypes = {
  count: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string.isRequired,
};
