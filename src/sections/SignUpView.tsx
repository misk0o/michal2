"use client";

import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  useTheme,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SignUpView() {
  const theme = useTheme(); // Access the MUI theme
  const [agreeToGdpr, setAgreeToGdpr] = useState(false); // State for checkbox

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeToGdpr(event.target.checked); // Update checkbox state
  };

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
        <Typography variant="body1" sx={{ mb: 2 }}>
          Už máte účet? <a href="/auth/prihlasenie">Prihláste sa</a>
        </Typography>

        {/* GDPR Checkbox with reduced space */}
        <FormControlLabel
          control={
            <Checkbox
              checked={agreeToGdpr}
              onChange={handleCheckboxChange}
              color="primary"
            />
          }
          label={
            <Typography variant="body2">
              Súhlasíte s{" "}
              <a href="/gdpr" target="_blank" rel="noopener noreferrer">
                GDPR
              </a>
              a podminekami použivania ?
            </Typography>
          }
          sx={{ mb: 1 }} // Reduced margin between checkbox and link
        />

        {/* Google Sign Up */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google")}
          sx={{
            mb: 1,
            borderColor: theme.palette.primary.main, // Use theme's primary color for Google button
            color: theme.palette.primary.main,
            "&:hover": {
              borderColor: theme.palette.primary.dark, // Hover effect for Google button
            },
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
            borderColor: theme.palette.mode === "light" ? "#333" : "#fff", // GitHub color for border based on mode
            color: theme.palette.mode === "light" ? "#333" : "#fff", // Text color (GitHub brand color)
            "&:hover": {
              borderColor: theme.palette.mode === "light" ? "#444" : "#bbb", // Hover effect color
            },
          }}
        >
          Registrovať sa účtom GitHub
        </Button>
      </Container>
    </Box>
  );
}











