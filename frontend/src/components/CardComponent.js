import { useTheme } from "@emotion/react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function CardComponent({ imge, title, desc }) {
  const theme = useTheme();

  const linkStyle1 = {
    color: theme.palette.text.main,
    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.45rem", lg: "1.5rem" },
    paddingTop: { xs: "0.4rem", sm: "0.6", md: "0.8rem" },
    fontWeight: "bold",
    fontFamily: theme.typography.fontFamily
  };

  const linkStyle2 = {
    fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem", lg: "1rem" },
    padding: {
      xs: "0.8rem 0rem 1.2rem 0rem",
      sm: "1rem 0rem 1.5rem 0rem",
      md: "1.2rem 0rem 1.7rem 0rem",
    },
    fontFamily: theme.typography.fontFamily
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="200" image={imge} alt={title} />
        <CardContent sx={{ background: theme.palette.primary.main}}>
          <Typography gutterBottom sx={linkStyle1} component="div" noWrap>
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
    </Card>
  );
}

export default CardComponent;
