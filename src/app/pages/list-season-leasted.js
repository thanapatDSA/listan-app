import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import MiniDrawer from '../components/layout/sidemenu'
import GridListData from '../components/gridListData'
import { apiGetSeasonNow } from '../api/list'
import ReviewCard from '../components/cardInfo'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#212121',
    height: '110vh'
  },
  item: {
    display: 'flex',
    justifyContent: 'center'
  },
  isLoadingContentStyls: {
    paddingTop: '40vh'
  },
  containerLayout: {
    paddingTop: '5vh',
    paddingLeft: '100px',
    paddingRight: '20px'
  },
  paper: {
    backgroundColor: '#424242',
    flexGrow: 2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#ffff'
  },
  progress: {
    width: '80px',
    height: '80px'
  }
}))

const List = () => {
  const classes = useStyles()
  const [expanContent, setexpanContent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({})
  const [cardData, setCardData] = useState()

  useEffect(() => {
    callAPIGetSeasonNow()
  }, [])

  const callAPIGetSeasonNow = async () => {
    setIsLoading(true)
    const result = await apiGetSeasonNow()
    console.log(result)
    setIsLoading(false)
    setData(result)
  }

  console.log(cardData)

  return (
    <Grid className={classes.root}>
      <MiniDrawer />
      <Grid container className={classes.containerLayout} spacing={2}>
        <Grid className={classes.item} item xs={Boolean(cardData) ? '7' : '12'}>
          {isLoading ? (
            <div className={classes.isLoadingContentStyls}>
              <CircularProgress size={80} className={classes.progress} />
            </div>
          ) : (
            <GridListData
              data={data}
              setCardData={setCardData}
              expandCard={!expanContent}
            />
          )}
        </Grid>
        <Grid
          className={classes.item}
          style={{ display: Boolean(cardData) ? 'flex' : 'none' }}
          item
          xs="5"
        >
          <ReviewCard cardData={cardData} expandCard={setexpanContent} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default List
