import styled from 'styled-components'
import {Typography, CardContent} from '../../../components'

export const LabelStyled = styled(Typography)`
    font-weight: 300;
    font-size: 1.2rem;

`
export const ValueStyled = styled(Typography)`
    font-weight: 300;
    font-size: 2.2rem;
`

export const CardContentStyled = styled(CardContent)`
    min-height: 130px;
    box-shadow: inset 0 0 1em #DEDEDE;
    border-left: 10px solid ${({color}) => color || '#5d78ff'}
`

export const CardPanelContentStyled = styled(CardContent)`
    padding: 20px;
`

export const CardPanelLabelStyled = styled(CardContent)`
    padding: 20px; 
    text-align: center;

`
export const CardPanelTextStyled = styled(CardContent)`
    display: flex;
    text-align: left;
    justify-content: space-between;
    flex-direction: column;
`

export const ItemStyled = styled.div`
    height: 35px;
    display: flex;
    justify-content: space-between;
    min-width: 150px;
`
