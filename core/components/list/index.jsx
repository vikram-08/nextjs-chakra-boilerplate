import React, { Children } from "react";
import PropTypes from "prop-types";
import {
  ListItem as ChakraListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { ChakraIcon } from "@/components";

/**
 * `List` is a dynamic list component that allows you to create ordered or unordered lists with icons.
 *
 * @param {object} props - The component's props.
 * @param {boolean} [props.ordered] - Determines whether it's an ordered (true) or unordered (false) list.
 * @param {ReactNode} props.children - List items to be rendered within the list.
 * @returns {JSX.Element} The rendered `List` component.
 * @example  <List ordered={true}>
        <ListItem iconName="like" showIcon={false}>Order 1 </ListItem>
        <ListItem iconName="chat" showIcon={false} >Order 2 </ListItem>
        </List>
 */

export default function List({ ordered = false, children, ...props }) {
  const ListComponent = ordered ? OrderedList : UnorderedList;

  return (
    <ListComponent {...props}>
      {Children.map(children, (child) => {
        const { iconName, showIcon } = child.props;
        return (
          <ChakraListItem>
            {showIcon && (
              <ListIcon>
                <ChakraIcon iconName={iconName} />
              </ListIcon>
            )}
            {child}
          </ChakraListItem>
        );
      })}
    </ListComponent>
  );
}

List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

/**
 * `ListItem` is a wrapper that provides context and focus management for all list items.
 * It wraps all list items in a div for better grouping.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.iconName] - Icon to be shown before the text.
 * @param {boolean} [props.showIcon] - If true, the icon will be displayed.
 * @param {ReactNode} props.children - List item content to be rendered within the list item.
 * @example
 * // Usage example:
 * <ListItem iconName="check-circle" showIcon={true}>Item 1</ListItem>
 */

export function ListItem({ children }) {
  return <React.Fragment>{children}</React.Fragment>;
}

ListItem.propTypes = {
  iconName: PropTypes.string,
  showIcon: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
