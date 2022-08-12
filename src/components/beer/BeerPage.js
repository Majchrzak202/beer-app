import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
  Collapse,
  Button,
  Box,
  CircularProgress,
} from "@material-ui/core";

import {
  ExpandMore as ExpandMoreIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ArrowBack,
} from "@material-ui/icons";

import MyTable from "./table/Table";
import useStyles from "./BeerPageStyles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BeerPage = () => {
  const [beer, setBeer] = useState();
  const [expanded, setExpanded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchBeer = async () => {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const data = await response.json();
      setBeer(data);
    };

    fetchBeer();
  }, [id]);

  if (typeof beer === "undefined") {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  const name = beer[0].name;
  const tagline = beer[0].tagline;
  const img = beer[0].image_url;
  const description = beer[0].description;
  const foodPair = beer[0].food_pairing.join(", ");

  return (
    <Card className={classes.page} sx={{ maxWidth: 245 }}>
      <div className={classes.header}>
        <CardHeader title={name} subheader={tagline} />
        <Button onClick={() => navigate("/")}>
          <ArrowBack />
        </Button>
      </div>
      <CardMedia
        className={classes.img}
        component="img"
        image={img}
        alt={name}
      />
      <CardContent>
        <Typography variant="body1" color="inherit">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
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
          <MyTable beer={beer} />
          <Typography paragraph>BEST MATCHES:</Typography>
          <Typography paragraph>{foodPair}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BeerPage;
