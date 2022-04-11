import React from 'react';
import ImageGridList from "./ImageGridList";
import Grid from "@mui/material/Grid";


function Gallery() {

    return (
        <Grid sx={{pt: 8}}>
            <Grid container direction="row">
                <ImageGridList/>
            </Grid>
        </Grid>
    );
}

export default Gallery;
