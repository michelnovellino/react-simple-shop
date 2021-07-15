import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";

import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Badge, MenuItem } from "@material-ui/core";

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
  const context = useContext(CartContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          SHOP
        </Typography>
        <Badge
          onClick={handleClick}
          style={{ cursor: "pointer" }}
          badgeContent={context.cartItems.length}
          color="secondary"
        >
          <ShoppingCart />
        </Badge>
      </Toolbar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {context.cartItems?.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.title} | ${item.price}
          </MenuItem>
        ))}
        <MenuItem onClick={handleClose}>${context.total.toFixed(3)}</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default ProductComponent;
