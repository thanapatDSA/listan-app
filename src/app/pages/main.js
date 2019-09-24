import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { CircularProgress, makeStyles } from '@material-ui/core'
import '../styles/App.css'
// import { images } from '../../imageData'
import RecipeReviewCard from '../components/cardInfo'
import GridListData from '../components/gridListData'
import { apiGetSeasonNow } from '../api/list'
import Container from '@material-ui/core/Container'

const contentCardStyls = (isLoading) => {
  return {
    backgroundColor: '#212121',
    minWidth: '40vh',
    display: isLoading ? 'none' : 'flex',
    justifyContent: 'center',
    paddingTop: '10px',
    paddingBottom: '20px',
    paddingRight: '20px'
  }
}

const contentListStyls = (expandCard) => {
  return {
    backgroundColor: '#212121',
    minWidth: '60vh',
    justifyContent: 'center',
    paddingTop: '10px',
    paddingBottom: '20px',
    paddingLe: '5px',
    display: expandCard ? 'none' : 'flex'
  }
}

const isLoadingContentStyls = {
  paddingTop: '40vh'
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#212121'
  },
  gridList: {
    width: '100vh',
    height: 600
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  progress: {
    width: '80px',
    height: '80px'
  }
}))

const App = () => {
  const [cardData, setCardData] = useState()
  const [expandCard, setExpandCard] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({})
  const classes = useStyles()

  useEffect(() => {
    callAPIGetSeasonNow()
  }, [])

  const callAPIGetSeasonNow = async () => {
    setIsLoading(true)
    const result = await apiGetSeasonNow()
    setIsLoading(false)
    setData(result)
  }

  useEffect(() => {
    console.log(expandCard)
  }, [expandCard])

  return (
    <Container maxWidth={'100vw'}>
      <Grid container alignItems="stretch">
        <Grid item style={contentListStyls(expandCard)} direction="row" xs="auto">
          {isLoading ? (
            <div style={isLoadingContentStyls}>
              <CircularProgress size={80} className={classes.progress} />
            </div>
          ) : (
            <GridListData
              data={data}
              setCardData={setCardData}
              expandCard={!expandCard}
            />
          )}
        </Grid>
        {expandCard && (
          <Grid item style={contentCardStyls(Boolean(!cardData))} direction="row" xs="6">
            {console.log(cardData)}
            <RecipeReviewCard cardData={cardData} expandCard={setExpandCard} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default App
