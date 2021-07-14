import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }),
);

const ProductComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" className={classes.title}>
        Shop
      </Typography>
        <Badge badgeContent={4} color="secondary">
        <ShoppingCart />
        </Badge>
    </Toolbar>
  </AppBar>
  );
};

export default ProductComponent;
