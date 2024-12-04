"use client";

import {
  Button,
  Container,
  Typography,
  Box,
  useTheme,  // Import the useTheme hook
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SignUpView() {
  const theme = useTheme();  // Access the MUI theme

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default, // Use theme background color
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
          bgcolor: theme.palette.background.paper, // Use theme background paper color
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        {/* Logo / Title */}
        <Typography variant="h5" sx={{ mb: 3 }}>
          Registrácia
        </Typography>

        {/* Sign-in link */}
        <Typography variant="body1" sx={{ mb: 6 }}>
          Už máte účet? <a href="/auth/prihlasenie">Prihláste sa</a>
        </Typography>

        {/* Google Sign Up */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google")}
          sx={{
            mb: 2,
            borderColor: theme.palette.primary.main, // Use theme primary color for border
          }}
        >
          Registrovať sa účtom Google
        </Button>

        {/* GitHub Sign Up */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GitHubIcon />}
          onClick={() => signIn("github")}
          sx={{
            mb: 1,
            bgcolor: "#24292e", // GitHub brand color (dark gray/black)
            color: "#ffffff",
            "&:hover": {
              bgcolor: "#1c2025", // Slightly darker on hover
            },
            borderColor: theme.palette.secondary.main, // Optional: theme secondary color
          }}
        >
          Registrovať sa účtom GitHub
        </Button>
      </Container>
    </Box>
  );
}



