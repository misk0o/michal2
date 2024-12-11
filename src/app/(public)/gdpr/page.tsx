import { Container, Typography, Link } from "@mui/material";

export const metadata = { title: "GDPR | Petrik" };

export default function Gdpr() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 3,
      }}
    >
      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
        General Data Protection Regulation (GDPR)
      </Typography>
      
      <Typography variant="h6" sx={{ mb: 2 }}>
        Introduction
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy
        in the European Union and the European Economic Area. It also addresses the transfer of personal data outside the EU and EEA.
      </Typography>
      
      <Typography variant="h6" sx={{ mb: 2 }}>
        Data Collection and Use
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        We collect and process personal data to provide and improve our services. The data we collect includes, but is not limited to, the following:
      </Typography>
      <ul>
        <li><Typography variant="body1">Name</Typography></li>
        <li><Typography variant="body1">Email address</Typography></li>
        <li><Typography variant="body1">IP address</Typography></li>
      </ul>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Your Rights
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Under GDPR, you have the following rights regarding your personal data:
      </Typography>
      <ul>
        <li><Typography variant="body1">Right to access: You have the right to request copies of your personal data.</Typography></li>
        <li><Typography variant="body1">Right to rectification: You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</Typography></li>
        <li><Typography variant="body1">Right to erasure: You have the right to request that we erase your personal data, under certain conditions.</Typography></li>
        <li><Typography variant="body1">Right to restrict processing: You have the right to request that we restrict the processing of your personal data, under certain conditions.</Typography></li>
        <li><Typography variant="body1">Right to object to processing: You have the right to object to our processing of your personal data, under certain conditions.</Typography></li>
        <li><Typography variant="body1">Right to data portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Typography></li>
      </ul>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        If you have any questions or concerns regarding your personal data and how we process it, feel free to contact us at:
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="mailto:support@yourdomain.com" color="primary">
          support@yourdomain.com
        </Link>
      </Typography>
      
      <Typography variant="body1" sx={{ mt: 3 }}>
        For more detailed information on the GDPR, please visit{" "}
        <Link href="https://gdpr.eu/" target="_blank" color="primary">
          GDPR Official Website
        </Link>
      </Typography>
    </Container>
  );
}

