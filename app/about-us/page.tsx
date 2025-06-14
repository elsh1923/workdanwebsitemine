"use client"
import { Container, Typography, Box, Grid, Card, CardContent, Paper, Chip, Divider } from "@mui/material"
import {
  Verified,
  EmojiEvents,
  Security,
  TravelExplore,
  Groups,
  Eco,
  Timeline,
  LocationOn,
  Phone,
  Email,
  Star,
  CheckCircle,
} from "@mui/icons-material"
import Image from "next/image"

export default function AboutPage() {
  // Company statistics
  const stats = [
    { number: "500+", label: "Happy Travelers", icon: Groups },
    { number: "50+", label: "Destinations", icon: LocationOn },
    { number: "4", label: "Years Experience", icon: Timeline },
    { number: "4.9", label: "Average Rating", icon: Star },
  ]

  // Certificates data with image placeholders
  const certificates = [
    {
      title: "Certificate of Appreciation",
      description: "For an active participation in reviewing the Zeroing Bureaucracy Charter for government",
      year: "2024",
    //   certificateNumber: "ETO-2023-001234",
      image: "/certificates/Apprtiaction Certificate-1.png?height=400&width=300&text=ETO+Certificate",
      icon: Verified,
    },
    {
      title: "Certificate of Channel Partnership",
      description: "in recognition for being our valued channel partner",
      year: "2025",
    //   certificateNumber: "IATA-2022-567890",
      image: "/certificates/WORKDANE CHANNEL PARTNER_CERTFICATE_250227_153946-1.png?height=400&width=300&text=IATA+Certificate",
      icon: TravelExplore,
    },
  ]

  // Company values
  const values = [
    {
      title: "Authentic Experiences",
      description:
        "We create genuine connections between travelers and local communities, ensuring every journey tells a unique story.",
      icon: Groups,
      color: "#1976d2",
    },
    {
      title: "Safety & Security",
      description:
        "Your safety is our top priority. We maintain the highest safety standards and provide 24/7 support throughout your journey.",
      icon: Security,
      color: "#d32f2f",
    },
    {
      title: "Sustainable Tourism",
      description:
        "We promote responsible travel that benefits local communities and preserves Ethiopia's natural and cultural heritage.",
      icon: Eco,
      color: "#2e7d32",
    },
    {
      title: "Expert Guidance",
      description:
        "Our experienced local guides provide deep insights into Ethiopia's history, culture, and hidden treasures.",
      icon: TravelExplore,
      color: "#ed6c02",
    },
  ]

  // Company timeline
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Wanderlust Chronicles was established with a vision to showcase Ethiopia's beauty to the world.",
    },
    {
      year: "2021",
      title: "First Certifications",
      description: "Obtained our initial tourism licenses and began operations with our first group of travelers.",
    },
    {
      year: "2022",
      title: "Expansion & Growth",
      description:
        "Expanded our services and achieved IATA certification, enabling us to offer comprehensive travel solutions.",
    },
    {
      year: "2023",
      title: "Excellence Recognition",
      description:
        "Received multiple quality awards and eco-tourism certifications, establishing our reputation for excellence.",
    },
  ]

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "70vh" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, rgba(25, 118, 215, 0.3) 0%, rgba(217, 119, 6, 0.8) 100%)",
              zIndex: 1,
            },
          }}
        >
          <Box
            component="img"
            src="/about-us.png?height=1080&width=1920&text=Ethiopian+Landscape"
            alt="About Wanderlust Chronicles"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, color: "white", textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "3rem", md: "5rem" },
              mb: 2,
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
              background: "linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h4"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              fontWeight: 300,
            }}
          >
            
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
            <Chip
              label="Licensed & Certified"
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                color: "white",
                fontWeight: "bold",
                backdropFilter: "blur(10px)",
              }}
            />
            <Chip
              label="4+ Years Experience"
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                color: "white",
                fontWeight: "bold",
                backdropFilter: "blur(10px)",
              }}
            />
            <Chip
              label="500+ Happy Travelers"
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                color: "white",
                fontWeight: "bold",
                backdropFilter: "blur(10px)",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ bgcolor: "white", py: 6, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Grid item xs={6} md={3} key={index}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: "50%",
                        p: 4,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                        boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                      }}
                    >
                        <Icon sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography variant="h3" component="div" fontWeight="bold" color="primary.main">
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontWeight="medium">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" gutterBottom fontWeight="bold" color="primary.main">
              Our Story
            </Typography>
            <Typography variant="h6" paragraph color="text.secondary" sx={{ mb: 4 }}>
              Born from a passion for Ethiopia's incredible heritage and natural beauty
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              Wanderlust Chronicles was founded in 2020 by a team of passionate travel enthusiasts who recognized the
              untapped potential of Ethiopia as a world-class travel destination. Our founder, having grown up in the
              diverse landscapes of Ethiopia, understood the need for authentic, responsible travel experiences that
              truly showcase what makes this ancient land so extraordinary.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              What started as a small local operation has grown into a trusted travel company, serving hundreds of
              satisfied travelers from around the globe. We've built our reputation on delivering exceptional
              experiences while maintaining the highest standards of safety, authenticity, and sustainability.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              Today, we are proud to be recognized as one of Ethiopia's leading travel companies, with multiple
              certifications and awards that reflect our commitment to excellence and responsible tourism.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: 500,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transform: "rotate(2deg)",
                "&:hover": {
                  transform: "rotate(0deg)",
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <Image
                src="/placeholder.svg?height=800&width=600&text=Our+Team+Story"
                alt="Our team in Ethiopia"
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  bgcolor: "rgba(255,255,255,0.95)",
                  p: 2,
                  borderRadius: 2,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Our Team in Action
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Guiding travelers through Ethiopia's wonders
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Certificates Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom fontWeight="bold">
            Our Certifications & Awards
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", color: "text.secondary", mb: 4 }}>
            Recognized for our commitment to quality, safety, and professional excellence
          </Typography>
          <Divider sx={{ maxWidth: 200, mx: "auto", height: 4, bgcolor: "primary.main", borderRadius: 2 }} />
        </Box>

        <Grid container spacing={4}>
          {certificates.map((cert, index) => {
            const Icon = cert.icon
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.4s ease",
                    border: "3px solid",
                    borderColor: "primary.main",
                    borderRadius: 3,
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: "0 20px 40px rgba(25, 118, 210, 0.2)",
                      borderColor: "secondary.main",
                    },
                  }}
                >
                  {/* Certificate Image */}
                  <Box
                    sx={{
                      position: "relative",
                      height: 200,
                      overflow: "hidden",
                      bgcolor: "grey.100",
                    }}
                  >
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.title} Certificate`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: "50%",
                        p: 1,
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      }}
                    >
                        <Icon sx={{ fontSize: 24 }} />
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                        color: "white",
                        p: 2,
                      }}
                    >
                      <Typography variant="subtitle2" fontWeight="bold">
                        Certificate #{cert.certificateNumber}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Chip label={cert.year} color="primary" size="small" sx={{ fontWeight: "bold" }} />
                      <Box sx={{ flexGrow: 1 }} />
                      <Verified sx={{ color: "success.main", fontSize: 20 }} />
                    </Box>

                    <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" color="primary.main">
                      {cert.title}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.6 }}>
                      {cert.description}
                    </Typography>

                    <Box
                      sx={{
                        mt: 2,
                        p: 2,
                        bgcolor: "grey.50",
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "grey.200",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        <strong>Certification Year:</strong> {cert.year}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {/* <strong>Certificate ID:</strong> {cert.certificateNumber} */}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>

        {/* Certificate Verification Note */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              bgcolor: "primary.light",
              color: "white",
              borderRadius: 3,
              maxWidth: 800,
              mx: "auto",
            }}
          >
            <Verified sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" gutterBottom fontWeight="bold">
              All Certifications Verified
            </Typography>
            <Typography variant="body1">
              All our certifications and licenses are current and can be verified with the respective issuing
              authorities. We maintain the highest standards of compliance and regularly update our certifications to
              ensure we meet all industry requirements.
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* Contact CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1976d2 0%, #d97706 100%)",
          color: "white",
          py: 10,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2" gutterBottom fontWeight="bold">
              If you have any questions or need assistance, please contact us.
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                  <Phone sx={{ mr: 1, fontSize: 24 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Call Us
                  </Typography>
                </Box>
                <Typography variant="body1">+251 906700007</Typography>
                <Typography variant="body1">+251 911625035</Typography>
                <Typography variant="body1">+251 906665577</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                  <Email sx={{ mr: 1, fontSize: 24 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Email Us
                  </Typography>
                </Box>
                <Typography variant="body1">
                  workdaneuae@gmail.com
              </Typography>
                <Typography variant="body1">workdantrading@gmail.com</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                  <LocationOn sx={{ mr: 1, fontSize: 24 }} />
                  <Typography variant="h6" fontWeight="bold">
                    Visit Us
                  </Typography>
                </Box>
                <Typography variant="body1">Megenagna Wach Bldg. 2nd Floor, </Typography>
                <Typography variant="body1">1000 ADDIS ABABA, Ethiopia</Typography>
                <Typography variant="body1">United Arab Emirates, Sharjah Business center, Ground Floor</Typography>
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Chip
                label="Licensed & Insured"
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: "bold",
                  backdropFilter: "blur(10px)",
                }}
              />
              <Chip
                label="24/7 Support"
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: "bold",
                  backdropFilter: "blur(10px)",
                }}
              />
              <Chip
                label="Best Price Guarantee"
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: "bold",
                  backdropFilter: "blur(10px)",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
