"use client";

import {
  Button,
  Container,
  Typography,
  Box,
  useTheme, // Import useTheme hook
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignInView() {
  const theme = useTheme(); // Access the MUI theme

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",  // Horizontally center the container
        alignItems: "center",      // Vertically center the container
        minHeight: "100vh",        // Ensure full viewport height for centering
        backgroundColor: theme.palette.background.default, // Optional: use theme background
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // Centering the content vertically
          p: 3,
          bgcolor: theme.palette.background.paper, // Use theme's paper color
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        {/* Logo / Title */}
        <Typography variant="h5" sx={{ mb: 3 }}>
          Prihlásenie
        </Typography>

        <Typography variant="body1" sx={{ mb: 6 }}>
          Nemáte ešte účet? <a href="/auth/registracia">Registrovať sa</a>
        </Typography>

        {/* Google Sign In */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google")}
          sx={{ mb: 1 }}
        >
          Prihlásiť sa účtom Google
        </Button>
      </Container>
    </Box>
  );
}



      // {/* Facebook Sign Up */}
      // <Button
      //   variant="outlined"
      //   fullWidth
      //   startIcon={<FacebookIcon />}
      //   sx={{ mb: 4 }}
      // >
      //   Prihlásiť sa účtom Facebook
      // </Button>

      // {/* Divider */}
      // <Divider sx={{ width: "100%", mb: 2 }}>
      //   <Typography variant="body2">alebo</Typography>
      // </Divider>

      // {/* Email */}
      // <TextField
      //   margin="normal"
      //   fullWidth
      //   label="Email"
      //   type="email"
      //   variant="outlined"
      //   required
      //   defaultValue="your@email.com"
      // />

      // {/* Password */}
      // <TextField
      //   margin="normal"
      //   fullWidth
      //   label="Password"
      //   type="password"
      //   variant="outlined"
      //   required
      //   defaultValue="******"
      // />

      // {/* Checkbox */}
      // <FormControlLabel
      //   control={<Checkbox color="primary" />}
      //   label="Chcem dostávať novinky na email"
      //   sx={{ mt: 2 }}
      // />

      // {/* Sign Up Button */}
      // <Button
      //   variant="contained"
      //   fullWidth
      //   size="large"
      //   sx={{ mt: 2, mb: 1 }}
      // >
      //   Prihlásiť
      // </Button>