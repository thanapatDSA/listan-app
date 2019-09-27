import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import LinesEllipsisLoose from 'react-lines-ellipsis/lib/loose'
import propTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import AirDateTime, { AirTimeZone } from '../../helpers/airtime'

const useStyles = makeStyles((theme) => {
  return {
    media: {
      height: '100%',
      width: '100%',
      margin: 'auto'
    },
    expand: {
      transform: 'rotate(270deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(90deg)'
    },
    avatar: {
      backgroundColor: red[500]
    },
    chip: {
      margin: theme.spacing(1)
    }
  }
})

function ReviewCard(props) {
  const { cardData } = props
  const classes = useStyles()

  console.log(cardData)
  return (
    <Card
      style={{
        height: '95vh',
        display: 'flex'
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ height: '5vh' }}>
          <CardHeader title={cardData.title} subheader={cardData.author} />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            height: '60vh',
            paddingLeft: '20px',
            maxHeight: '320px',
            maxWidth: '255px'
          }}
        >
          <CardMedia
            className={classes.media}
            image={cardData.image_url}
            title={cardData.title}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            height: '60vh',
            maxHeight: '320px'
          }}
        >
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Type :{' '}
              <Chip
                size="small"
                variant="outlined"
                label={cardData.type}
                classes={classes.chip}
              />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Episodes:{' '}
              <Chip
                size="small"
                variant="outlined"
                label={!!cardData.episodes ? cardData.episodes : '-'}
                classes={classes.chip}
              />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Airing Start:{' '}
              <Chip
                size="small"
                variant="outlined"
                label={
                  !!cardData.airing_start ? (
                    <AirDateTime dateString={cardData.airing_start} />
                  ) : (
                    '-'
                  )
                }
                classes={classes.chip}
              />
              {!!cardData.airing_start ? (
                <Chip
                  size="small"
                  variant="outlined"
                  label={<AirTimeZone dateString={cardData.airing_start} />}
                  classes={classes.chip}
                />
              ) : (
                <div />
              )}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Source:{' '}
              <Chip
                size="small"
                variant="outlined"
                label={!!cardData.source ? cardData.source : '-'}
                classes={classes.chip}
              />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Score:{' '}
              <Chip
                size="small"
                variant="outlined"
                label={!!cardData.score ? cardData.score : '-'}
                classes={classes.chip}
              />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Producers:{' '}
              {!!cardData.producers ? (
                cardData.producers.map((producer) => {
                  return (
                    <Chip
                      size="small"
                      variant="outlined"
                      label={!!producer.name ? producer.name : '-'}
                      classes={classes.chip}
                    />
                  )
                })
              ) : (
                <div />
              )}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Genres:{' '}
              {!!cardData.genres ? (
                cardData.genres.map((genres) => {
                  return (
                    <Chip
                      size="small"
                      variant="outlined"
                      label={!!genres.name ? genres.name : '-'}
                      classes={classes.chip}
                    />
                  )
                })
              ) : (
                <div />
              )}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <LinesEllipsisLoose text={cardData.synopsis} maxLine="6" lineHeight="16" />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <CardActions disableSpacing style={{ position: 'absolute', bottom: 0 }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

ReviewCard.defaultProps = {
  cardData: () => {},
  expandCard: false
}

// eslint-disable-next-line react/no-typos
ReviewCard.propTypes = {
  cardData: propTypes.func,
  expandCard: propTypes.func
}

export default ReviewCard
