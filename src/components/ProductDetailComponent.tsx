import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, makeStyles } from "@material-ui/core";
import { CartContext } from "../contexts/cart.context";

export const DetailStyles = makeStyles({
    root: {
      maxWidth: 1200,
      margin: 'auto'
    },
    media: {
      height: 240,
      backgroundSize: 'contain'
    },
    noLinkStyles:{
      textDecoration: 'none'
    },
    spacing: {
      display: 'flex',
      justifyContent: 'space-around'
  }
  });

type Props = Products.Product;

const ProductDetail: React.FC<Props> = (props: Props) => {
  const classes = DetailStyles();
  const { addToCart } = useContext(CartContext);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.spacing}>
        <Typography gutterBottom component="h1">
          ${props.price}
        </Typography>
        <Button
          onClick={() => addToCart({
            id: props.id,
            title: props.title,
            price: props.price,
            description: props.description,
            category: props.category,
            image: props.image
          })}
          size="small"
          color="primary"
        >
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductDetail;
