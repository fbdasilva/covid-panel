import React, {memo} from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import {Card, Typography, Button, Select, MenuItem} from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import {CardPanelLabelStyled, CardPanelTextStyled, CardPanelContentStyled, ItemStyled} from './style'

const navigatorHasShare = navigator.share

function Panel({updateAt, onChange, data, country, getCoviddata}){
    const {cases, recovered, deaths, todayCases, active } = data

    
    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`}/>
            </ItemStyled>
        </MenuItem>
    )
    
    const textCovid19 = `Pais: ${country} - recuperados: ${recovered}`

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19dio.netlify.app/'
        })
    }


    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <CardPanelTextStyled>
                        <CardPanelLabelStyled>
                            <Typography variant="h4" component="span" color="primary">COVID-19 </Typography>
                        </CardPanelLabelStyled>
                        <Typography variant="h6" component="span" color="primary">Coronavirus Dashboard </Typography>
                        <Typography variant="h7" component="span" color="primary">Last update: {updateAt}</Typography>
                    </CardPanelTextStyled>
                    <div className='pnl-btn'>
                        <div className='pt-2'>
                            <Select onChange={onChange} value={country}>
                                 {COUNTRIES.map(renderCountries)}
                            </Select>
                        </div>
                        {navigatorHasShare ? renderShareButton : renderCopyButton}
                    </div>
                </div>
                
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)