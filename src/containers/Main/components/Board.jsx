import React, {memo} from 'react'
import { PropTypes } from 'prop-types'
import {Grid, Skeleton} from '../../../components'
import Card from './Card'

function Board ({data}){
    const {cases, active, recovered, deaths, todayCases, todayDeaths} = data;

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return(
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Card value={getValue(cases)} label="Cases" color='#C7A4DF'/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(recovered)} label="Recovered" color='#78E293'/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(deaths)} label="Deaths" color='#F8EA86'/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(active)} label="Active" color='#F6C9E7'/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(todayCases)} label="Today cases" color='#ECD39D'/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(todayDeaths)} label="Today deaths" color='#9DD8EC'/>
            </Grid>
        </Grid>
    )
}

export default memo(Board)