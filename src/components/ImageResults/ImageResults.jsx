import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageResult from './ImageResult';
import { Grid } from '@mui/material';

export class ImageResults extends Component {
  render() {
    console.log(this.props.images.images)
    return (
      <Grid container sx={{ padding: '20px' }}>
          {this.props.images.images.map((image) => {
              return <ImageResult key={image.previewURL} image={image} />
          })}
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
    images: state.images
})

export default connect(mapStateToProps, null)(ImageResults);
