import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Recherche() {

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    let searchValue = JSON.parse(localStorage.getItem('searchValue'))
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log(searchValue)
    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    let consoElec = "Consommation éléctrique " + searchValue.ce + " -> " + searchValue.uniteCe
    let consoIc = "Consommation Ic -> " + searchValue.ic + " / " + searchValue.uniteIc
    return (
        <Card >
            <CardHeader

                title={searchValue.modele}
                subheader={searchValue.marque}
            />
            <CardMedia
                component="img"
                height="400"
                image={process.env.PUBLIC_URL + '/live-from-space.jpg'}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Mots clés : {searchValue.keywords}
                    <br />
                    <h3>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                Information sur la consommation du produit :
                            </Typography>
                            <Demo>
                                <List dense={dense}>
                                        <ListItem>
                                            <ListItemText
                                                primary={consoElec}
                                            />
                                            <ListItemText
                                                primary={consoIc}
                                            />
                                        </ListItem>
                                </List>
                            </Demo>
                        </Grid>
                    </h3>
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Description:</Typography>
                    <Typography paragraph>
                        {searchValue.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}