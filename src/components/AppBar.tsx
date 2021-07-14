import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";

import { ShopContext } from "../App";

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
    },
  })
);

const ProductComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <ShopContext.Consumer>
      {(products) => (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              SHOP
            </Typography>
            <Badge badgeContent={products.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </Toolbar>
        </AppBar>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductComponent;
