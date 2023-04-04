import { Grid, Select, MenuItem, InputLabel, TextField } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/actions';

export class Search extends Component {
    state = {
        amount: 5,
        searchText: ''
    }

    onChange = (e) => {
        const { amount } = this.state;
        let searchValue = e.target.value
        this.setState({ ...this.state, searchText: searchValue }, () => {
            this.props.fetchImages(searchValue, amount);
        })
    }

    onAmountChange = (e) => this.setState({ ...this.state, amount: e.target.value });

    render() {
        const { amount, searchText } = this.state;
        return (
            <Grid container sx={{ padding: '20px' }} spacing={2}>
                <Grid item sm={12}>
                    <InputLabel id="demo-simple-select-standard-label">Search for images</InputLabel>
                    <TextField
                        required
                        label="Required"
                        fullWidth
                        value={searchText}
                        variant='standard'
                        onChange={(e) => this.onChange(e)}
                    />
                </Grid>
                <Grid item sm={12}>
                    <InputLabel id="demo-simple-select-standard-label">Amount</InputLabel>
                    <Select sx={{ width: '120px' }}
                        name="amount"
                        value={amount}
                        variant='standard'
                        onChange={this.onAmountChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        )
    }
}

export default connect(null, { fetchImages })(Search);