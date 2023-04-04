import React, { Component } from 'react';
import { Button, Card, Dialog, Grid, IconButton, Typography, CardMedia, CardActions } from '@mui/material';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';

export class SimpleDialog extends Component {
  render(){
    return (
      <Dialog open={this.props.open}>
        <Card sx={{ padding: '10px' }}>
          <CardMedia
            component="img"
            height="300"
            image={this.props.image}
            alt="Paella dish"
            sx={{ width: '500px' }}
          />
          <CardActions sx={{ display: 'flex', justifyContent: 'right' }}>
            <Button sx={{ color: '#000', margin: '0' }} variant='outlined' onClick={this.props.handleClose}>CLOSE</Button>
          </CardActions>
        </Card>
      </Dialog>
    );
  };
} 

export class ImageResult extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ ...this.state, open: true })
  }
  
  handleClose = () => {
    this.setState({ ...this.state, open: false })
  }

  render() {
    const { tags, userImageURL, user } = this.props.image;
    return (
      <Grid item sx={{ position: 'relative', overflow: 'hidden', height: '300px' }} sm={6} xs={12} md={4} lg={3}>
          <div style={{ height: '100%' }}>
              <img src={userImageURL} alt="user" style={{ height: '100%', width: '100%' }} />
          </div>
          <div style={{ position: 'absolute', right: '0', bottom: '0', background: 'rgba(0, 0, 0, 0.5)', padding: '10px', color: '#fff', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Typography variant='body2'>{tags}</Typography>
              <Typography variant='body2'>by: {user}</Typography>
            </div>
            <IconButton onClick={this.handleOpen} size='small' sx={{ color: '#fff' }} aria-label="zoom">
              <ZoomInOutlinedIcon />
            </IconButton>
            <SimpleDialog open={this.state.open} handleClose={this.handleClose} image={userImageURL} />
          </div>
      </Grid>
    )
  }
}

export default ImageResult;