"use client";

import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box, Avatar, Tooltip } from "@mui/material";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  AddCircle as AddCircleIcon,
  Login as LoginIcon,
  AppRegistration as AppRegistrationIcon,
  Logout as LogoutIcon,
  Info as InfoIcon,
  Gavel as GavelIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [value, setValue] = useState("/");
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  // Paths for authenticated users (private paths)
  const privatePaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Hľadať", value: "/hladat", icon: <SearchIcon /> },
    { label: "Pridať", value: "/prispevok", icon: <AddCircleIcon /> },
    {
      label: "Profil",
      value: "/profil",
      icon: session?.user?.image ? (
        <Avatar alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
    { label: "Odhlásiť", value: "/auth/odhlasenie", icon: <LogoutIcon /> },
  ];

  // Paths for non-authenticated users (public paths)
  const publicPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "O nás", value: "/o-nás", icon: <InfoIcon /> },
    { label: "GDPR", value: "/gdpr", icon: <GavelIcon /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  // Select paths based on user authentication status
  const navigationPaths = status === "authenticated" ? privatePaths : publicPaths;

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "background.paper",
        boxShadow: 2,
        borderTop: "1px solid",
        borderColor: "divider",
        zIndex: 1000,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
        sx={{
          backgroundColor: "background.paper",
          "& .Mui-selected": {
            color: "primary.main", // Highlight color for the selected item
          },
          "& .MuiBottomNavigationAction-root": {
            minWidth: "50px",
            "&.Mui-selected .MuiSvgIcon-root": {
              fontSize: "28px",
            },
          },
        }}
      >
        {navigationPaths.map((path) => (
          <Tooltip key={path.value} title={path.label} arrow>
            <BottomNavigationAction
              label={path.label}
              value={path.value}
              icon={path.icon}
              sx={{
                color: "text.secondary",
                "& .MuiSvgIcon-root": {
                  fontSize: "24px",
                },
                "&:hover": {
                  backgroundColor: "action.hover", // Hover effect
                },
              }}
            />
          </Tooltip>
        ))}
      </BottomNavigation>
    </Box>
  );
}







