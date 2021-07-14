import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

type Props = Products.Product;

const DetailStyles = makeStyles({
  root: {
    maxWidth: 345,
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

const ProductComponent: React.FC<Props> = (props: Props) => {
  const classes = DetailStyles();

  return (
    <Card className={classes.root}>
       <Link className={classes.noLinkStyles} to={`/detail/${props.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title.length > 30 ? props.title.slice(0,27) + '...' : props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description.length > 80 ? props.description.slice(0,77) + '...' : props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
       </Link>
      <CardActions className={classes.spacing}>
      <Typography gutterBottom component="p">
      ${props.price}
      </Typography>
        <Button size="small" color="primary">
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductComponent;