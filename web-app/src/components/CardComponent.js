import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function CardComponent({ imge, title, desc, link }) {
  const linkStyle1 = {
    color: "#00C6CF",
    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.45rem", lg: "1.5rem" },
    paddingTop: { xs: "0.4rem", sm: "0.6", md: "0.8rem" },
    fontWeight: "bold",
    fontFamily: 'Young Serif'
  };

  const linkStyle2 = {
    fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem", lg: "1rem" },
    padding: {
      xs: "0.8rem 0rem 1.2rem 0rem",
      sm: "1rem 0rem 1.5rem 0rem",
      md: "1.2rem 0rem 1.7rem 0rem",
    },
    fontFamily: 'Outfit'
  };

  const linkStyle3 = {
    backgroundImage: "linear-gradient(to right, #00C6CF, #7FD1AE)",
    borderRadius: "5px",
    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
    color: "#fff",
    width: { xs: "30%", sm: "50%" },
    "&:hover": {
      backgroundColor: "#e0e0e0",
      color: "#000",
    },
    fontFamily: 'Young Serif'
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="200" image={imge} alt={title} />
        <CardContent
          sx={{
            height: { xs: "9rem", sm: "11rem", md: "13rem", lg: "15rem" },
            overflow: "auto",
          }}
        >
          <Typography gutterBottom sx={linkStyle1} component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            align="justify"
            sx={linkStyle2}
            color="text.secondary"
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          sx={linkStyle3}
          color="primary"
          href={link}
          target="_blank"
        >
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
