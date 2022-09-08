import React from 'react';
import ImageGridList from "./ImageGridList";
import Grid from "@mui/material/Grid";


function Gallery() {

    return (
        <Grid sx={{py: 12}}>
            <Grid container direction="row">
                <ImageGridList/>
            </Grid>
        </Grid>
    );
}

export default Gallery;
