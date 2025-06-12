import React from 'react'
import Image from "next/image"
import Link from "next/link"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import PinterestIcon from "@mui/icons-material/Pinterest"
import {
  Typography,
  Box,
  Grid,
  IconButton,
} from "@mui/material"

function Footer() {
  return (
    <div>
      <footer className="bg-blue-600 text-stone-300 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
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
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-white">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-white">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-white">
                    Travel Styles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-white">
                    Seasonal Journeys
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-white">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-white">
                    Responsible Travel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Grid container spacing={4}>
                <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 500, mb: 2 }}>
                  Follow Us
                </Typography>
                <Typography variant="body2" className="text-white" sx={{ mb: 2 }}>
                  Join our community and get inspired by fellow travelers' stories and adventures.
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <IconButton
                    component="a"
                    href="https://facebook.com/wanderlustchronicles"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#d6d3d1",
                      "&:hover": {
                        backgroundColor: "rgba(217, 119, 6, 0.1)",
                      },
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://instagram.com/wanderlustchronicles"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#d6d3d1",
                      "&:hover": {
                        backgroundColor: "rgba(217, 119, 6, 0.1)",
                      },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://twitter.com/wanderlustchronicles"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#d6d3d1",
                      "&:hover": {
                        backgroundColor: "rgba(217, 119, 6, 0.1)",
                      },
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://youtube.com/wanderlustchronicles"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#d6d3d1",
                      "&:hover": {
                        backgroundColor: "rgba(217, 119, 6, 0.1)",
                      },
                    }}
                  >
                    <YouTubeIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.tiktok.com/@wanderlustchronicles"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#d6d3d1",
                      "&:hover": {
                        backgroundColor: "rgba(217, 119, 6, 0.1)",
                      },
                    }}
                  >

                  </IconButton>
                </Box>
              </Grid>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-stone-700 text-sm text-center">
            <p className="text-white">&copy; {new Date().getFullYear()} Workdan Tour and Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
