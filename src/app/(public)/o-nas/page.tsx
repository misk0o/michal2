// src/pages/about.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export const metadata = { title: "About Us | ZoskaDezinfogram" };

export default function AboutUs() {
  return (
    <Container maxWidth="md" sx={{ padding: "2rem" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Learn More About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to **ZoskaDezinfogram**! We aim to provide top-notch content for all those
        who are passionate about digital trends and information. Stay tuned as we continue to
        grow, offering insightful posts and much more.
      </Typography>
      <Typography variant="body1">
        You can find more information about our school here:
      </Typography>
      <Typography variant="body1" component="div">
        <Link href="https://zochova.sk/" target="_blank" rel="noopener" color="primary">
          Official Website
        </Link>
      </Typography>
      <Typography variant="body1" component="div">
        <Link href="https://www.facebook.com/spsezochova/" target="_blank" rel="noopener" color="primary">
          Facebook Page
        </Link>
      </Typography>
      <Typography variant="body1" component="div">
        <Link href="https://www.instagram.com/spsezochova/" target="_blank" rel="noopener" color="primary">
          Instagram Profile
        </Link>
      </Typography>
    </Container>
  );
}