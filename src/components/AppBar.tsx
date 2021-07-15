import React, { useContext} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";

import { CartContext } from "../contexts/cart.context";

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
  const context = useContext(CartContext)

  return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              SHOP
            </Typography>
            <Badge badgeContent={context.cartItems.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </Toolbar>
        </AppBar>
  );
};

export default ProductComponent;
