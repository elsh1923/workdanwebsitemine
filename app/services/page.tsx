"use client"
import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  DialogActions,
  Tabs,
  Tab,
} from "@mui/material"
import {
  FlightTakeoff,
  Tour,
  EventAvailable,
  Hiking,
  CameraAlt,
  Check,
  Star,
  Close,
  AccessTime,
  Groups,
  LocationOn,
} from "@mui/icons-material"
import { BriefcaseBusiness, PlaneTakeoff } from "lucide-react"

// Services data for easy management and future additions
const services = [
  {
    id: "travel-planning-consultation",
    title: "Travel Planning & Consultation",
    description:
    "Whether you’re planning a honeymoon, a solo trip, or a group adventure, our Travel Planning & Consultation service takes the stress out of organizing your journey. Let us build your perfect itinerary — one that matches your style, schedule, and goals.",
    icon: PlaneTakeoff,
    features: [
      "Tailored travel plans based on your interests, time, and budget.",
      "Guidance with document preparation and application tracking.",
      "Expert suggestions on where to go and when to go.",
      "Smart cost breakdowns to make the most of your money.",
      "Personalized advice and recommendations via call, chat, or in-person.",
    ],
    popular: true,
    // Detailed information for modal
    fullDescription:"Planning a trip should feel exciting not overwhelming. That’s where Work DanTour & Travel comes in. Our Travel Planning & Consultation service is designed to help you craft the perfect journey from scratch. We begin by listening to your preferences: Are you seeking adventure, rest, exploration, or culture? Once we understand your travel vision, we tailor a custom itinerary that fits your needs, timeline, and budget. Need help figuring out where to go? We offer destination insights based on your travel goals and the time of year. We also assist with visa and passport requirements, helping you gather and submit documents, saving you time and avoiding delays. Whether you’re traveling locally or abroad, we’ll recommend the best transportation, help you compare flight options, and ensure your accommodation is reliable and comfortable. Plus, we offer ongoing consultation through every stage from planning to departure so you’ll never feel lost or confused. Think of us as your personal travel assistant, available to guide you every step of the way.",
    duration: "Varies based on your schedule",
    groupSize: "Private experience",
    // pricing: [
    //   { name: "Essential", price: 299, description: "Basic planning assistance" },
    //   { name: "Premium", price: 599, description: "Comprehensive planning with 24/7 support" },
    //   { name: "Luxury", price: 999, description: "VIP planning with exclusive experiences" },
    // ],
    testimonials: [
      {
        name: "Sarah Johnson",
        location: "New York",
        comment:
          "The custom itinerary created for our family trip to Ethiopia was perfect. Every detail was considered, and we experienced the country in a way we never could have on our own.",
      },
      {
        name: "Michael Chen",
        location: "San Francisco",
        comment:
          "I was amazed by how well they understood what I was looking for. My solo adventure through the historical sites was exactly what I needed.",
      },
    ],
    faq: [
      {
        question: "How far in advance should I book?",
        answer:
          "For the best results, we recommend booking our services at least 3-6 months before your intended travel date. This gives us ample time to create a thoughtful itinerary and secure the best accommodations and experiences, especially during peak seasons.",
      },
      {
        question: "Can you work with specific budget constraints?",
        answer:
          "We pride ourselves on creating memorable experiences for all budgets. During our initial consultation, we'll discuss your budget parameters and craft an itinerary that maximizes your experience while respecting your financial boundaries.",
      },
    ],
  },
  {
    id: "uae-business-consultant",
    title: "🇦🇪 UAE Business Consultant Activities",
    description:
      "From company setup to strategic advisory, our UAE Business Consultant services provide end-to-end support for entrepreneurs and corporations looking to establish and grow in the UAE market. Whether you're starting a new venture or expanding an existing one, we handle the legal, financial, and operational complexities for you.",
    icon: BriefcaseBusiness, // make sure to import this from lucide-react or any icon set you're using
    features: [
      "Complete support for Mainland, Free Zone, and Offshore company formation.",
      "Professional document handling, licensing, and visa services.",
      "Expert business strategy and market entry advisory.",
      "Banking, taxation, and legal document assistance under one roof.",
      "Networking, events, and branding support for scaling businesses.",
    ],
    popular: true,
    fullDescription:
      "Setting up and growing a business in the UAE can be complex—but with our expert consulting services, it becomes seamless. We assist you from the very first step: whether you're looking to register a company in a Free Zone, Mainland, or Offshore jurisdiction, or need a trusted local sponsor. Our team also supports you with PRO services for employee visas and legal document processing, financial strategy development, banking setup, tax advisory, and everything in between. We also go beyond the paperwork — organizing corporate events, setting up physical office space, and ensuring your brand is protected with trademark registration and compliance.",
    duration: "Ongoing support based on your business needs",
    groupSize: "Business clients (solo entrepreneurs to large teams)",
    locations: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "RAK", "Umm Al Quwain"],
    testimonials: [
      {
        name: "Fatima Al Mazrouei",
        location: "Dubai",
        comment:
          "The team made my business setup in the Dubai Free Zone fast and hassle-free. From legal paperwork to banking—everything was taken care of.",
      },
      {
        name: "James Turner",
        location: "London",
        comment:
          "I wanted to expand my consultancy into the UAE and was overwhelmed by the regulations. They helped me set up, structure my model, and even hosted my launch event!",
      },
    ],
    faq: [
      {
        question: "Do I need to be in the UAE to start the company formation process?",
        answer:
          "No, many steps can be done remotely. However, some steps like visa stamping and biometric registration may require physical presence depending on your setup type.",
      },
      {
        question: "Which jurisdiction is best — Mainland, Free Zone, or Offshore?",
        answer:
          "It depends on your business activity, client base, and licensing needs. We'll consult with you to determine the most strategic and cost-effective option.",
      },
      {
        question: "Can you help with setting up a corporate bank account?",
        answer:
          "Absolutely. We assist with preparing documentation, arranging meetings, and ensuring compliance to open both personal and business bank accounts.",
      },
    ],
  },
  // {
  //   id: "photography-tours",
  //   title: "Photography Tours",
  //   description:
  //     "Capture the beauty of Ethiopia through your lens. Designed for photography enthusiasts of all levels, our specialized tours focus on capturing Ethiopia's stunning landscapes, vibrant cultures, and unique wildlife.",
  //   icon: CameraAlt,
  //   features: [
  //     "Professional photographer guides",
  //     "Small groups (maximum 8 photographers)",
  //     "Optimal timing for lighting conditions",
  //     "Access to unique vantage points",
  //   ],
  //   popular: false,
  //   // Detailed information for modal
  //   fullDescription:
  //     "Designed for photography enthusiasts of all levels, our specialized tours focus on capturing Ethiopia's stunning landscapes, vibrant cultures, and unique wildlife. Led by professional photographers who know the perfect locations and lighting conditions, these tours will help you create a stunning portfolio while improving your photography skills.",
  //   duration: "1 day to 12 days",
  //   groupSize: "2-8 photographers",
  //   pricing: [
  //     { name: "Photo Day", price: 199, description: "One-day photography excursion" },
  //     { name: "Visual Journey", price: 1499, description: "7-day photography adventure" },
  //     { name: "Master Class", price: 2999, description: "12-day comprehensive expedition with advanced instruction" },
  //   ],
  //   locations: [
  //     "Lalibela at Dawn",
  //     "Omo Valley Tribes",
  //     "Simien Mountains Landscapes",
  //     "Danakil Depression Colors",
  //     "Bale Mountains Wildlife",
  //   ],
  //   testimonials: [
  //     {
  //       name: "Richard Brown",
  //       location: "Chicago",
  //       comment:
  //         "As an amateur photographer, I learned so much on this tour. The guide knew exactly where to be at what time, and my photos are better than I ever imagined possible.",
  //     },
  //     {
  //       name: "Aiko Tanaka",
  //       location: "Tokyo",
  //       comment:
  //         "The Visual Journey was perfectly organized for photographers. We had amazing access to cultural ceremonies and the post-processing sessions helped me develop my style.",
  //     },
  //   ],
  //   faq: [
  //     {
  //       question: "What camera equipment should I bring?",
  //       answer:
  //         "We recommend bringing your DSLR or mirrorless camera, a variety of lenses (wide-angle, standard zoom, and telephoto if possible), plenty of memory cards, extra batteries, a tripod, and any filters you typically use. A detailed equipment list will be provided based on your specific tour.",
  //     },
  //     {
  //       question: "Are these tours suitable for beginners?",
  //       answer:
  //         "Yes! We welcome photographers of all skill levels. Our Photo Day and Visual Journey tours are perfect for beginners and intermediates, with guides providing technical assistance as needed. The Master Class is more suitable for advanced enthusiasts and semi-professionals looking to refine their skills.",
  //     },
  //   ],
  // },
]

export default function ServicesPage() {
  // State for modal
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  // Handle opening the modal with service details
  const handleOpenModal = (service: typeof services[number]) => {
    setSelectedService(service)
    setModalOpen(true)
    setActiveTab(0) // Reset tab when opening modal
  }

  // Handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false)
  }

  // Handle tab change in modal
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 6, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                Our Services
              </Typography>
              <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
                Discover the perfect way to experience Ethiopia with our range of specialized travel services
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 300,
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                <Box
                component="img"
                src="/navbar-workdan-logo.png"
                alt="Ethiopia Travel Services"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 400,
            height: 400,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.05)",
          }}
        />
      </Box>

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
              Crafting Unforgettable Ethiopian Experiences
            </Typography>
            <Typography variant="body1" paragraph>
              At Wanderlust Chronicles, we believe that travel should be more than just visiting places—it should be
              about creating stories that last a lifetime. Our carefully designed services ensure that your Ethiopian
              journey will be filled with authentic experiences, cultural insights, and breathtaking moments.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you're seeking adventure in the Simien Mountains, cultural immersion with local communities, or a
              perfectly planned itinerary that hits all the highlights, our expert team is here to make your travel
              dreams a reality.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4, bgcolor: "primary.light", color: "white" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Star sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Why Choose Our Services
                </Typography>
              </Box>
              <List disablePadding>
                {[
                  "Local expertise and authentic experiences",
                  "Personalized attention to your preferences",
                  "Sustainable and responsible travel practices",
                  "24/7 support throughout your journey",
                  "Unique access to hidden gems and local communities",
                ].map((item, index) => (
                  <ListItem key={index} disableGutters sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36, color: "white" }}>
                      <Check />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Services Section */}
      <Box sx={{ bgcolor: "background.paper", py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", color: "text.secondary" }}>
              Explore our range of specialized services designed to make your Ethiopian adventure truly memorable
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Grid item xs={12} md={6} lg={4} key={service.id}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      },
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    {service.popular && (
                      <Chip
                        label="Popular"
                        color="primary"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: -10,
                          right: 20,
                          zIndex: 1,
                        }}
                      />
                    )}
                    <CardContent sx={{ p: 3, flexGrow: 1 }}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "50%",
                            bgcolor: "primary.main",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                          }}
                        >
                          <Icon />
                        </Box>
                        <Typography variant="h5" component="h3" fontWeight="bold">
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                        {service.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                          Key Features:
                        </Typography>
                        <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0" }}>
                          {service.features.map((feature, index) => (
                            <li key={index}>
                              <Typography variant="body2" color="text.secondary">
                                {feature}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button variant="contained" fullWidth onClick={() => handleOpenModal(service)}>
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: "background.paper", py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
              What Our Clients Say
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", color: "text.secondary" }}>
              Hear from travelers who have experienced our services
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                name: "Sarah Johnson",
                location: "New York",
                quote:
                  "The custom itinerary created for our family trip to Ethiopia was perfect. Every detail was considered, and we experienced the country in a way we never could have on our own.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Michael Chen",
                location: "San Francisco",
                quote:
                  "I was amazed by how well they understood what I was looking for. My solo adventure through the historical sites was exactly what I needed.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Emma Rodriguez",
                location: "Madrid",
                quote:
                  "The guided tour package was perfect for our first visit to Ethiopia. We saw so much in just 7 days, and our guide made everything seamless.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box sx={{ display: "flex", mb: 3 }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} sx={{ color: "amber.500", fontSize: 20 }} />
                      ))}
                    </Box>
                    <Typography variant="body1" paragraph sx={{ fontStyle: "italic", mb: 4 }}>
                      "{testimonial.quote}"
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        component="img"
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          mr: 2,
                          objectFit: "cover",
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Card
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            bgcolor: "primary.dark",
            color: "white",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: "url(/navbar-workdan-logo.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <CardContent sx={{ position: "relative", p: { xs: 3, md: 6 } }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                  Ready to Start Your Ethiopian Adventure?
                </Typography>
                <Typography variant="body1" paragraph sx={{ opacity: 0.9 }}>
                  Our travel experts are ready to help you plan the perfect journey. Contact us for a free consultation
                  and let us help you create memories that will last a lifetime.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: "primary.dark",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.9)",
                    },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Contact Us
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>

      {/* Service Details Modal */}
      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        scroll="paper"
        aria-labelledby="service-details-title"
      >
        {selectedService && (
          <>
            <DialogTitle id="service-details-title" sx={{ pb: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <selectedService.icon />
                  </Box>
                  <Typography variant="h5" component="h2" fontWeight="bold">
                    {selectedService.title}
                  </Typography>
                </Box>
                <IconButton edge="end" color="inherit" onClick={handleCloseModal} aria-label="close">
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>
            <Divider />

            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="service details tabs"
              >
                <Tab label="Overview" />
                {/* <Tab label="Pricing" /> */}
                <Tab label="Testimonials" />
                <Tab label="FAQ" />
              </Tabs>
            </Box>

            <DialogContent dividers sx={{ p: 0 }}>
              {/* Overview Tab */}
              <Box role="tabpanel" hidden={activeTab !== 0} sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                  {selectedService.fullDescription}
                </Typography>

                <Grid container spacing={3} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <AccessTime color="primary" sx={{ mr: 1 }} />
                      <Typography variant="subtitle1" fontWeight="bold">
                        Duration
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {selectedService.duration}
                    </Typography>
                  </Grid>
                </Grid>

                <Typography variant="h6" sx={{ mt: 4, mb: 2 }} fontWeight="bold">
                  Key Features
                </Typography>
                <Grid container spacing={2}>
                  {selectedService.features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                        <Check color="primary" sx={{ mt: 0.3, mr: 1 }} />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Pricing Tab */}
              {/* <Box role="tabpanel" hidden={activeTab !== 1} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Available Options
                </Typography>
                <Grid container spacing={3}>
                  {selectedService.pricing.map((plan, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          border: index === 1 ? "2px solid" : "1px solid", // Highlight middle option
                          borderColor: index === 1 ? "primary.main" : "divider",
                          position: "relative",
                        }}
                      >
                        {index === 1 && (
                          <Chip
                            label="Most Popular"
                            color="primary"
                            size="small"
                            sx={{
                              position: "absolute",
                              top: -10,
                              right: 16,
                            }}
                          />
                        )}
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                            {plan.name}
                          </Typography>
                          <Box sx={{ display: "flex", alignItems: "baseline", mb: 2 }}>
                            <Typography variant="h4" component="span" fontWeight="bold" color="primary">
                              ${plan.price}
                            </Typography>
                            <Typography variant="body2" component="span" color="text.secondary" sx={{ ml: 1 }}>
                              per person
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {plan.description}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ p: 2 }}>
                          <Button variant="contained" fullWidth>
                            Select
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mt: 4, p: 3, bgcolor: "background.default", borderRadius: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Note:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All prices are per person and may vary based on group size and specific requirements. Contact us for
                    a personalized quote or to discuss custom options.
                  </Typography>
                </Box>
              </Box> */}

              {/* Testimonials Tab */}
              <Box role="tabpanel" hidden={activeTab !== 1} sx={{ p: 3 }}>
                {selectedService.testimonials.map((testimonial, index) => (
                  <Paper
                    key={index}
                    elevation={1}
                    sx={{ p: 3, mb: 3, borderLeft: "4px solid", borderColor: "primary.main" }}
                  >
                    <Typography variant="body1" paragraph sx={{ fontStyle: "italic" }}>
                      "{testimonial.comment}"
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>

              {/* FAQ Tab */}
              <Box role="tabpanel" hidden={activeTab !== 2} sx={{ p: 3 }}>
                {selectedService.faq.map((item, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {item.question}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.answer}
                    </Typography>
                    {index < selectedService.faq.length - 1 && <Divider sx={{ mt: 3 }} />}
                  </Box>
                ))}
              </Box>
            </DialogContent>

            <DialogActions sx={{ p: 2 }}>
              <Button onClick={handleCloseModal}>Close</Button>
              <Button variant="contained" color="primary">
                Book This Service
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  )
}
