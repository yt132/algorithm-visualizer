import React from 'react';
import styles from './stylesheet.scss';
import { classes } from '/common/util';
import { Button } from '/components';

class ListItem extends React.Component {
  render() {
    const { className, children, indent, ...props } = this.props;

    return (
      <Button className={classes(styles.list_item, indent && styles.indent, className)} {...props}>
        {children}
      </Button>
    );
  }
}

export default ListItem;

