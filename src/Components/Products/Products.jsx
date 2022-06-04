import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Product/Product';

const Products = () => {
    const products = [
        {id: 1, name: 'Product 1', price: '$100', description: 'Hola'},
        {id: 2, name: 'Product 2', price: '$200', description: 'buy'},
        {id: 3, name: 'Product 3', price: '$300', description: 'deff'},
    ]
    return (
        <main>
            <Grid container justify="center" spacing={4}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Product key={product.id} product={product}/>
                </Grid>
            ))}
            </Grid>
        </main>
    );
};

export default Products;