import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import logsignimg from "../assets/karelys-ruiz-PqyzuzFiQwfY-unsplash.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SkinCareAdvice() {
  return (
    <div>
      <Header />
      <Stack
        sx={{
          backgroundImage: `url(${logsignimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px 10px 0 0",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "2rem", sm: "2.25rem", md: "2.6rem", lg: "2.8rem" },
            fontFamily: "Young Serif",
            padding: '12rem 7rem',
            width: { md: "70%", lg: "55%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          DERMATOLOGIST-RECOMMENDED SKIN CARE FOR YOUR 20S
          </Typography>
      </Stack>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          paddingTop={{ xs: "4rem", md: "6rem" }}
        >
          DERMATOLOGIST-RECOMMENDED SKIN CARE FOR YOUR 20S
        </Typography>

        <Typography paragraph>
          Your 20s is an ideal time to start a skin care routine and adopt skin
          healthy habits. "The skin care choices you make now will affect what
          your skin looks like in your next decade – and beyond," says
          board-certified dermatologist Rajani Katta, MD, FAAD.
        </Typography>

        <Typography variant="h6" gutterBottom>
          6 skin care practices to start in your 20s
        </Typography>

        <Typography paragraph>
          With an overwhelming array of products and skin care trends, it can be
          difficult to know what’s good for your skin. That’s why we asked two
          board-certified dermatologists to share their expertise.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1, Use these two skin care products daily:
        </Typography>

        <Typography paragraph>
          To keep your skin looking its best, dermatologists recommend using
          these two skin care products every day:
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          A mild cleanser:
        </Typography>

        <Typography paragraph>
          When selecting a cleanser, choose one for your skin type. Dr. Katta
          says, "For example, if you have acne-prone skin, use a mild cleanser
          that removes oil." Dry skin does better with a hydrating cleanser.
        </Typography>

        <Typography paragraph>
          To get the best results from your cleanser, wash your face twice a day
          – when you get up and before bed. You also want to wash after
          sweating.
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          Sunscreen (SPF 30 or higher, broad spectrum, and water resistant):
        </Typography>

        <Typography paragraph>
          Any time you plan to be outside during the day, even if it’s to take a
          walk or drive to work, you expose your skin to the sun’s harmful rays.
        </Typography>

        <Typography paragraph>
          If you will be outside during daylight, protect your skin. Apply
          sunscreen to your face and any skin that clothing won’t cover, putting
          the sunscreen on 15 minutes before you go outdoors. Always put
          sunscreen on after other skin care products – and beneath your makeup.
        </Typography>

        <Typography paragraph>
          Like your cleanser, you want to use a sunscreen formulated for your
          skin type. If you have oily skin, look for the words "non-comedogenic"
          or "won’t clog pores" on the product. Women with darker skin tones may
          want to use a tinted sunscreen. Most tinted sunscreens won’t leave a
          white cast on your skin.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          2, Add in a skin care product that addresses your primary skin concern:
        </Typography>

        <Typography paragraph>
          "In our 20s, women’s skin care concerns can vary greatly," says Dr.
          Katta. While some women have acne-prone skin, others are noticing fine
          lines and other signs of aging. Dark spots can be the biggest concern
          for some.
        </Typography>

        <Typography paragraph>
          The best way to address your concerns is to use a skin care product
          that contains science-backed ingredients, says board-certified
          dermatologist Rebecca Baxt, MD, FAAD. She recommends the following
          ingredients:
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          3, Vitamin C serum or cream:
        </Typography>

        <Typography paragraph>
          Science shows that this ingredient can reduce skin aging and dark
          spots.
        </Typography>

        <Typography paragraph>
          4, Like other skin care products, you want to use a product formulated
          for your concern and skin type.
        </Typography>

        <Typography paragraph>
          When to apply vitamin C: Dr. Baxt tells her patients, "Apply it after
          washing your face in the morning, before you put on your sunscreen."
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          Retinoid:
        </Typography>

        <Typography paragraph>
          5, The term "retinoid" is a catch-all for an array of vitamin A-based
          products used on skin. It can treat mild fine lines and wrinkles,
          acne, and dark spots. It can also improve skin texture.
        </Typography>

        <Typography paragraph>
          6, If you’re looking to treat uneven skin tone, dark spots, or your
          skin’s texture, 
        </Typography>
      </Container>
      <Footer />
    </div>
  );
}

export default SkinCareAdvice;
