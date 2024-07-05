import React, { Children, isValidElement, cloneElement } from "react";
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * `TabHeadersList` is a component used within the `Tabs` component to render a list of tab headers.
 *
 * @component `children` React component that will be rendered as tab headers.
 * @example
 * <Tabs>
 *   <TabHeadersList>
 *     <TabItem>Tab 1</TabItem>
 *     <TabItem>Tab 2</TabItem>
 *   </TabHeadersList>
 *   ...
 * </Tabs>
 */

export function TabHeadersList(props) {
  const { children } = props;
  return <TabList {...props}>{children}</TabList>;
}

/**
 * `TabContentsList` is a component used within the `Tabs` component to render a list of tab contents.
 *
 * @component `children` React component that will be rendered as tab contents.
 * @example
 * <Tabs>
 *   ...
 *   <TabContentsList>
 *     <TabPanelItem>Content 1</TabPanelItem>
 *     <TabPanelItem>Content 2</TabPanelItem>
 *   </TabContentsList>
 * </Tabs>
 */

export function TabContentsList(props) {
  const { children } = props;
  return <TabPanels {...props}>{children}</TabPanels>;
}

/**
 * `Tabs` A React component that helps you build accessible tabs, by providing keyboard interactions and 
  ARIA attributes described in the WAI-ARIA Tab Panel Design Pattern.
 *
 * @component `children` React component that will be rendered in the UI
 * @boolean `isFitted` If true, tabs will stretch to width of the tablist.
 * @boolean `isLazy` Performance 🚀: If true, rendering of the tab panel's will be deferred until it is selected.
 * @number `defaultOpen` The initial index of the selected tab (in uncontrolled mode)
 * @string variant The variant of the Tabs
 * @supportedValues "line" | "enclosed" | "enclosed-colored" | "soft-rounded" | "solid-rounded" | "unstyled"
 * @example <Tabs variant="enclosed" defaultOpen={0}>
  <TabItem>Tab 1</TabItem>
  <TabItem>Tab 2</TabItem>
  <TabPanelItem>Content 1</TabPanelItem>
  <TabPanelItem>Content 2</TabPanelItem>
  </Tab>
 */

export default function Tabs(props) {
  const {
    isFitted = true,
    variant = "enclosed",
    isLazy = true,
    defaultOpen = 0,
    children,
  } = props;

  return (
    <ChakraTabs
      isFitted={isFitted}
      variant={variant}
      isLazy={isLazy}
      defaultIndex={defaultOpen}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          if (child.type === TabHeadersList) {
            // Clone and pass props to TabList

            return cloneElement(child, {
              ...child.props,
              children: Children.map(child.props.children, (tab, index) => {
                if (tab.type === Tab) {
                  // Clone and pass index to TabItem

                  return cloneElement(tab, { index });
                }
                return null;
              }),
            });
          } else if (child.type === TabContentsList) {
            // Clone and pass props to TabPanels

            return cloneElement(child, {
              ...child.props,
              children: Children.map(child.props.children, (panel, index) => {
                if (panel.type === TabPanel) {
                  // Clone and pass index to TabPanelItem

                  return cloneElement(panel, { index });
                }
                return null;
              }),
            });
          }
        }
        return null;
      })}
    </ChakraTabs>
  );
}

Tabs.propTypes = {
  isFitted: PropTypes.bool,
  variant: PropTypes.oneOf([
    "line",
    "enclosed",
    "enclosed-colored",
    "soft-rounded",
    "solid-rounded",
    "unstyled",
  ]),
  isLazy: PropTypes.bool,
  defaultOpen: PropTypes.number,
  children: PropTypes.node.isRequired,
};
