import React from 'react'
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Grow,
  CircularProgress
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PropTypes from 'prop-types'

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

function GridListData(props) {
  const { data, setCardData, expandCard } = props
  const classes = useStyles()

  return (
    <GridList
      cellHeight={200}
      className={classes.gridList}
      cols={4}
      style={{ minHeight: '100vh' }}
    >
      {data.anime?.map((tile) => (
        <Grow in={expandCard} timeout="auto">
          <GridListTile key={tile.title} cols={tile.col || 1}>
            <LazyLoadImage
              style={{ width: '25vh', height: '35vh' }}
              placeholder={
                <CircularProgress
                  size={20}
                  style={{ paddingTop: '20vh', paddingRight: '20vh' }}
                />
              }
              src={tile.image_url}
              alt={tile.type}
              onClick={() => setCardData(tile)}
            />

            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              subtitle={<span>by: {tile.type}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                  onClick={() => setCardData(tile)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        </Grow>
      ))}
    </GridList>
  )
}

GridListData.defaultProps = {
  data: () => {},
  setCardData: () => {},
  expandCard: true
}

// eslint-disable-next-line react/no-typos
GridListData.PropTypes = {
  data: PropTypes.func,
  setCardData: PropTypes.func,
  expandCard: PropTypes.func
}

export default GridListData
