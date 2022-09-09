import "./PotionCard.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function PotionCard(potion) {
    const potionsTypes = {
        "drinking": require("../assets/img/red-potion.png"),
        "throwing": require("../assets/img/green-potion.png"),
        "other": require("../assets/img/purple-potion.png")
    };

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}  id="card-background">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={require(potion.img)}
                        alt={ potion.name }
                    />
                    <CardContent id="desc">
                        <Typography gutterBottom variant="h5" component="div">
                            <img src={potionsTypes[potion.type]} width="50vh" alt="Purple potion" className="potion-type"/>
                            <h4>{ potion.name }</h4>
                        </Typography>
                        <Typography variant="body2">
                            { potion.desc }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="actions" id="desc">
                    <div>
                        <Button size="small" color="primary" disabled="false">
                            Buy
                        </Button>
                    </div>
                    <div>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </div>

                </CardActions>
            </Card>
        </div>
    );
}

export default PotionCard;