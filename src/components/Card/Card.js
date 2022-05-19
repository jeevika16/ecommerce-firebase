import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 350,
    margin: 20,
    display: 'inline-block',
   
  },
});

export default function CardItem({category}) {
  const classes = useStyles();

  const {img,title,author} = category

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {author}
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
          Shop now
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
   
    </Card>
  );
}
