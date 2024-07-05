import React, { Children } from "react";
import PropTypes from "prop-types";
import {
  Accordion as AccordionSection,
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Divider,
  AccordionIcon,
  Skeleton,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

/**
 * `AccordionItem` is a wrapper that provides context and focus management for all accordion items.
 * It wraps all accordion items in a div for better grouping.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.title] - Accordion button title.
 * @param {number} [props.flex] - Defines how a flex item will grow or shrink to fit the space available in its flex container.
 * @param {string} [props.textAlign] - The CSS `text-align` property.
 * @supportedValues "top" | "right" | "bottom" | "left"
 * @example 
 * import { AccordionItem } from "@/Accordion";
   
   <AccordionItem title="Why do we use it?">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </AccordionItem>
 */

export function AccordionItem({ children }) {
  return <React.Fragment>{children}</React.Fragment>;
}

AccordionItem.propTypes = {
  title: PropTypes.string,
  flex: PropTypes.number,
  textAlign: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

/**
 * `Accordion` is a wrapper that provides context and focus management for all accordion items.
 * It wraps all accordion items in a div for better grouping.
 *
 * @param {object} props - The component's props.
 * @param {boolean} [props.allowToggle] - If set to true, any expanded item may be collapsed again.
 * @param {ReactNode} [props.children] - React component that will be rendered in the UI.
 * @param {number[]} [props.defaultOpen] - The initial index(es) of the expanded accordion item.
 * @param {boolean} [props.allowMultiple] - If set to true, the accordion will permit multiple items to be expanded at once.
 * @example import Accordion, { AccordionItem } from "@/Accordion";
  
    <Accordion defaultOpen={[0, 1]}>
          <AccordionItem title="What is Lorem Ipsum?">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </AccordionItem>
          <AccordionItem title="Why do we use it?">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </AccordionItem>
          <AccordionItem title="Where does it come from?">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </AccordionItem>
        </Accordion>
 */

export default function Accordion({
  allowToggle = true,
  defaultOpen = [],
  allowMultiple = false,
  children,
}) {
  return (
    <AccordionSection
      defaultIndex={defaultOpen}
      allowToggle={allowToggle}
      allowMultiple={allowMultiple}
    >
      {Children.map(children, (child) => {
        const {
          props: { title, flex = 1, textAlign = "left" },
        } = child;
        return (
          <ChakraAccordionItem>
            <AccordionButton>
              <Box as="span" flex={flex} textAlign={textAlign}>
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <Divider />
            <AccordionPanel>{child}</AccordionPanel>
          </ChakraAccordionItem>
        );
      })}
    </AccordionSection>
  );
}

Accordion.propTypes = {
  allowToggle: PropTypes.bool,
  defaultOpen: PropTypes.arrayOf(PropTypes.number),
  allowMultiple: PropTypes.bool,
  children: PropTypes.node,
};

export function AccordionSkeleton() {
  return (
    <VStack spacing={4} align="stretch">
      {Array(3)
        .fill("")
        .map((_, index) => (
          <Box key={index} padding="6" boxShadow="lg" width="100%">
            <Skeleton height="20px" mb="4" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
            <Divider my="4" />
          </Box>
        ))}
    </VStack>
  );
}
