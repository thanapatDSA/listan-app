import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Grow
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LinesEllipsis from 'react-lines-ellipsis'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => {
  return {
    media: {
      height: '316px',
      width: '225px',
      paddingTop: '56.25%', // 16:9
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
    }
  }
})

function ReviewCard(props) {
  const { cardData, expandCard } = props
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  function handleExpandClick() {
    setExpanded(!expanded)
    expandCard(!expanded)
  }

  return (
    <Grid container direction="row" spacing={4}>
      <Card
        style={{
          minWidth: 345,
          maxWidth: !expanded ? '60vh' : '150vh',
          minHeight: '80vh',
          display: 'flex'
        }}
      >
        <Grid container direction="column" xs={expanded ? 6 : 12}>
          <CardHeader title={cardData.title} subheader={cardData.author} />
          <CardMedia
            className={classes.media}
            image={cardData.image_url}
            title={cardData.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <LinesEllipsis text={cardData.synopsis} maxLine={expanded ? 10 : 1} />
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Grid>
        <Grid container direction="column" xs={6}>
          <Grow in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                1/2 cup of the broth in a pot until simmering, add saffron and set aside
                for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                large plate and set aside, leaving chicken and chorizo in the pan. Add
                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                stirring often until thickened and fragrant, about 10 minutes. Add saffron
                broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Grow>
        </Grid>
      </Card>
    </Grid>
  )
}

ReviewCard.defaultProps = {
  cardData: () => {},
  expandCard: false
}

// eslint-disable-next-line react/no-typos
ReviewCard.PropTypes = {
  cardData: PropTypes.func,
  expandCard: PropTypes.func
}

export default ReviewCard
