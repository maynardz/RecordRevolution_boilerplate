import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import styled from 'styled-components';
import albumObj from '../albumObj';
console.log(albumObj);

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Background = styled.div`
  background: linear-gradient(to bottom, white, #d4d4d4)
`;

/*

flex: 1 does the following:

flex-grow : 1; // this means that the div will grow in same proportion as the window-size
flex-shrink : 1; // this means that the div will shrink in same proportion as the window-size
flex-basis : 0; // this means that the div does not have a starting value and as such will take up screen per the screen size available. e.g:- if 3 divs are in the wrapper then each div will take 33%.

*/

const Wrapper = styled.div`
    display: block;
    margin: auto;
    padding: 2em;
`;

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight: 450
  },
});

const Albums = () => {

    const classes = useStyles();

    return(
        <Background>
            <Row>
                {
                    albumObj.map((album, index) => (
                        <Column key={index}>
                            <Wrapper>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        alt={album.album_title}
                                        height="180"
                                        image={album.image_src}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">{album.album_title}</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">{album.description}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="dark">Share</Button>
                                        <Button size="small" color="dark">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Wrapper>
                        </Column>
                    ))
                }
            </Row>
        </Background>
    )
}

export default Albums;