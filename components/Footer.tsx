"use client"
import Image from "next/image"
import Link from "next/link"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { Typography, Box, Grid, IconButton, Container } from "@mui/material"

function Footer() {
  return (
    <footer className="bg-blue-600 text-stone-300 py-12">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={6} lg={3}>
            <div className="flex items-center gap-2 text-white mb-4">
              <Image
                src="/logo/navbar-workdan-logo.png"
                className="max-h-16"
                alt="workdan logo"
                width={100}
                height={200}
              />
              <span className="text-lg font-semibold">Workdan Tour and Travel</span>
            </div>
            <p className="text-sm text-white">
              Crafting immersive travel experiences that engage all senses and create lasting memories.
            </p>
          </Grid>

          {/* Explore Links */}
          <Grid item xs={12} md={6} lg={2}>
            <h3 className="text-white font-medium mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#destinations" className="hover:text-white transition-colors text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#experiences" className="hover:text-white transition-colors text-white">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#stories" className="hover:text-white transition-colors text-white">
                  Travel Stories
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Company Links */}
          <Grid item xs={12} md={6} lg={2}>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition-colors text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-white transition-colors text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#responsible" className="hover:text-white transition-colors text-white">
                  Responsible Travel
                </Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-white transition-colors text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6} lg={2.5}>
            <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 500, mb: 2 }}>
              Contact Us
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <PhoneIcon sx={{ color: "#d6d3d1", fontSize: 18, mr: 1 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: "white", fontSize: "0.875rem" }}>
                    +251 906700007
                  </Typography>
                  {/* <Typography variant="body2" sx={{ color: "white", fontSize: "0.875rem" }}>
                    +251 922 789 012
                  </Typography> */}
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <WhatsAppIcon sx={{ color: "#d6d3d1", fontSize: 18, mr: 1 }} />
                <Typography variant="body2" sx={{ color: "white", fontSize: "0.875rem" }}>
                +251 906700007
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <EmailIcon sx={{ color: "#d6d3d1", fontSize: 18, mr: 1 }} />
                <Typography variant="body2" sx={{ color: "white", fontSize: "0.875rem" }}>
                  info@workdantravel.com
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <LocationOnIcon sx={{ color: "#d6d3d1", fontSize: 18, mr: 1, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: "white", fontSize: "0.875rem", lineHeight: 1.4 }}>
                Megenagna Wach Bldg. 2nd Floor, 1000 ADDIS ABABA, Ethiopia
                  <br />
                  Ethiopia
                </Typography>
              </Box>
            </Box>

            {/* Mini Map */}
            <Box
              sx={{
                width: "100%",
                height: 120,
                borderRadius: 2,
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  border: "2px solid rgba(255,255,255,0.4)",
                  transform: "scale(1.02)",
                },
              }}
              onClick={() => window.open("https://maps.google.com/?q=Bole+Road+Addis+Ababa+Ethiopia", "_blank")}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31523.74683377328!2d38.76200651083985!3d9.020968499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85fd6575b29f%3A0x9322f27baa2f5a9f!2zV2FjaCBCdWlsZGluZyB8IE1lZ2VuYWduYSB8IOGLi-GJvSDhiIXhipXhjLsgfCDhiJjhjIjhipPhips!5e0!3m2!1sen!2set!4v1749733378329!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Workdan Tour and Travel Location"
              />
            </Box>

            <Typography
              variant="caption"
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.75rem",
                mt: 1,
                display: "block",
                textAlign: "center",
              }}
            >
              Click map to view in Google Maps
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={6} lg={2.5}>
            <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 500, mb: 2 }}>
              Follow Us
            </Typography>
            <Typography variant="body2" sx={{ color: "white", mb: 3, fontSize: "0.875rem" }}>
              Join our community and get inspired by fellow travelers' stories and adventures.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              <IconButton
                component="a"
                href="https://facebook.com/workdantravel"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#d6d3d1",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(217, 119, 6, 0.2)",
                    color: "white",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com/workdantravel"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#d6d3d1",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(217, 119, 6, 0.2)",
                    color: "white",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/workdantravel"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#d6d3d1",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(217, 119, 6, 0.2)",
                    color: "white",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://youtube.com/workdantravel"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#d6d3d1",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(217, 119, 6, 0.2)",
                    color: "white",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/251906700007"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#d6d3d1",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(37, 211, 102, 0.2)",
                    color: "white",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>

            {/* Quick Contact Actions */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" sx={{ color: "white", mb: 1.5, fontSize: "0.875rem" }}>
                Quick Contact:
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Box
                  component="a"
                  href="tel:+251 906700007"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 2,
                    py: 1,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: 1,
                    color: "white",
                    textDecoration: "none",
                    fontSize: "0.75rem",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 14 }} />
                  Call
                </Box>
                <Box
                  component="a"
                  href="mailto:workdantrading@gmail.com"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 2,
                    py: 1,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: 1,
                    color: "white",
                    textDecoration: "none",
                    fontSize: "0.75rem",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <EmailIcon sx={{ fontSize: 14 }} />
                  Email
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ mt: 6, pt: 3, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ color: "white", fontSize: "0.875rem" }}>
                &copy; {new Date().getFullYear()} Workdan Tour and Travel. All rights reserved.
              </Typography>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" }, gap: 3 }}>
                <Link href="/privacy" className="text-white hover:text-amber-200 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white hover:text-amber-200 transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-white hover:text-amber-200 transition-colors text-sm">
                  Cookie Policy
                </Link>
              </Box>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer
