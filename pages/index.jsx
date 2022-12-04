import { ImageList, Typography } from "@mui/material";
import { Container } from "@mui/system";

import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <>
      <Header />
      <Typography align="center" mt={4} variant="h3">
        BelArts
      </Typography>
      <Container>
        <ImageSlider />
      </Container>
    </>
  );
}
