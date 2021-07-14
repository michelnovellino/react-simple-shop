import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

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
        <Button size="small" color="primary">
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductDetail;
