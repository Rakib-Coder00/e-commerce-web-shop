import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton , CardActions } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styes'

const Product = ({product}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
               <div className={classes.content}>
                    <Typography variant="h5" gutterBottom>{product.name}</Typography>
                    <Typography variant="h5">{product.price}</Typography>
                   </div> 
                   <Typography variant='h2' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="add to Cart">
                <AddShoppingCart />
            </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;