import { Container, List, Stack, Typography } from "@mui/material";
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
            padding: "12rem 7rem",
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

        <List sx={{ listStyle: "decimal", pl: 4 }}>
          <ol>
            <li style={{ padding: "2rem" }}>
              <Typography>
                Use these two skin care products daily: To keep your skin
                looking its best, dermatologists recommend using these two skin
                care products every day:
              </Typography>
              <ul style={{ padding: "1rem" }}>
                <li style={{ padding: "0.7rem" }}>
                  <Typography>
                    A mild cleanser: When selecting a cleanser, choose one for
                    your skin type. Dr. Katta says, “For example, if you have
                    acne-prone skin, use a mild cleanser that removes oil.” Dry
                    skin does better with a hydrating cleanser. To get the best
                    results from your cleanser, wash your face twice a day –
                    when you get up and before bed. You also want to wash after
                    sweating.
                  </Typography>
                </li>
                <li style={{ padding: "0.7rem" }}>
                  <Typography>
                    Sunscreen (SPF 30 or higher, broad spectrum, and water
                    resistant): Any time you plan to be outside during the day,
                    even if it’s to take a walk or drive to work, you expose
                    your skin to the sun’s harmful rays. If you will be outside
                    during daylight, protect your skin. Apply sunscreen to your
                    face and any skin that clothing won’t cover, putting the
                    sunscreen on 15 minutes before you go outdoors. Always put
                    sunscreen on after other skin care products – and beneath
                    your makeup.
                  </Typography>
                </li>
              </ul>
            </li>

            <li style={{ padding: "2rem" }}>
              <Typography>
                Add in a skin care product that addresses your primary skin
                concern: “In our 20s, women’s skin care concerns can vary
                greatly,” says Dr. Katta. While some women have acne-prone skin,
                others are noticing fine lines and other signs of aging. Dark
                spots can be the biggest concern for some. The best way to
                address your concerns is to use a skin care product that
                contains science-backed ingredients, says board-certified
                dermatologist Rebecca Baxt, MD, FAAD. She recommends the
                following ingredients:
              </Typography>
              <ul style={{ padding: "1rem" }}>
                <li style={{ padding: "0.7rem" }}>
                  <Typography>
                    Vitamin C serum or cream: Science shows that this ingredient
                    can reduce skin aging and dark spots. Like other skin care
                    products, you want to use a product formulated for your
                    concern and skin type. When to apply vitamin C: Dr. Baxt
                    tells her patients, “Apply it after washing your face in the
                    morning, before you put on your sunscreen.”
                  </Typography>
                </li>
                <li style={{ padding: "0.7rem" }}>
                  <Typography>
                    Retinoid: The term "retinoid" is a catch-all for an array of
                    vitamin A-based products used on skin. It can treat mild
                    fine lines and wrinkles, acne, and dark spots. It can also
                    improve skin texture. If you’re looking to treat uneven skin
                    tone, dark spots, or your skin’s texture, look for the word
                    “retinol.” It’s a type of retinoid that’s used for these
                    purposes.
                  </Typography>
                </li>
              </ul>
            </li>

            <li style={{ padding: "2rem" }}>
              <Typography>
                Make your skin care routine Adjustable, Consistent, and Tailored
                (ACT). To help her patients remember this point, Dr. Katta tells
                them to build ACT into their skin care. Here’s why. “For a skin
                care routine to meet your needs, it must be adjustable,” says
                Dr. Katta. For example, you may need a moisturizer during the
                winter when the air tends to be dry. You’ll also need to adjust
                your skin care with the passing years. If a product you chose
                irritates your skin, you’ll want to stop using it right away.
                When it comes to creating a skin care routine, consistency is
                also key. Unless a skin care product is irritating your skin,
                you need to keep using it. It takes at least 30 days to know
                whether it’s working. With so many skin care trends and products
                available, following one routine can be difficult. The results
                you see on social media can tempt you to add in another product
                or two. That’s understandable. When temptation to try a new
                product or routine hits, remember this fact. To get results, you
                need to use products consistently. It takes time to see results.
                If you try new skin care products too often, you may not see any
                progress. In fact, all you may have to show for it is irritated
                skin.
              </Typography>
            </li>

            <li style={{ padding: "2rem" }}>
              <Typography>
                Keep your skin looking its best with healthy habits. Drs. Baxt
                and Katta stress that keeping your skin looking its best
                requires more than a skin care routine. Here’s the are key
                skin-healthy habits they recommend:
              </Typography>
              <ul style={{ padding: "1rem" }}>
                <li style={{ padding: "0.7rem" }}>
                  <Typography>
                    Stop tanning. “Tanning is 100% awful for your skin and your
                    health,” says Dr. Baxt. Every day dermatologists tell their
                    patients that it can cause wrinkles, brown spots, and skin
                    cancer. Dr. Baxt’s advice: “If you use tanning beds or any
                    other indoor tanning device, stop immediately.”
                  </Typography>
                </li>
                <li style={{ padding: "0.7rem" }}>
                  <Typography>
                    Protect your skin from the sun. To protect your skin from
                    the sun, the AAD recommends that you seek shade, cover up
                    with clothing, and wear sunscreen that offers SPF 30 or
                    higher, broad-spectrum protection, and water resistance.”
                    Protecting your skin from the sun every day that you go
                    outside is one of the best things you can do to keep your
                    skin healthy. For most people, going about your day exposes
                    you to the sun’s harmful rays. “Without sun protection,
                    you’re constantly damaging your skin with everyday
                    activities like walking around your neighborhood, taking a
                    train, and going to and from an outdoor parking lot.” says
                    Dr. Baxt.
                  </Typography>
                </li>
              </ul>
            </li>

            <li style={{ padding: "2rem" }}>
              <Typography>
                Be cautious about skin care trends that you see on social media.
                Some skin care trends you see on social media can do more harm
                than good. One skin problem that dermatologists frequently treat
                is the damage done by overusing exfoliating products people see
                on social media. An exfoliator is designed to remove the top
                layer of skin, leaving you with glowing skin. When overused, an
                exfoliator can damage the protective layer called the skin
                barrier. A damaged skin barrier leaves you with raw and
                irritated skin. “You may develop allergic reactions to products
                that previously didn’t cause a problem,” says Dr. Katta. To get
                helpful skin care advice, Dr. Katta recommends following
                board-certified dermatologists on social media.
              </Typography>
            </li>

            <li style={{ padding: "2rem" }}>
              <Typography>
                See a dermatologist if you have a skin condition. Dr. Baxt says,
                “Anyone with a skin condition that affects their quality of life
                like eczema or rosacea should see a board-certified
                dermatologist.”
              </Typography>
            </li>
          </ol>
        </List>
      </Container>
      <Stack paddingTop={{ xs: "4rem", md: "6rem" }}>
        <Footer />
      </Stack>
    </div>
  );
}

export default SkinCareAdvice;
