import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import img from './image.png';
import img1 from './image2.avif';

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const footerBackgroundColor = '#1976d2'; // Define footer background color
  const drawerBackgroundColor = 'blue'; // Define drawer background color when open

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" style={{ backgroundColor: footerBackgroundColor }}>
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: '20px' }}>
            Diwas E-commerce App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: drawerOpen ? footerBackgroundColor : '',
            borderRadius: ' 0 0  100px 0 ', // Curved edges from top-left to bottom-left
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" style={{ color: 'white', textAlign: 'center', width: '200px'}} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Products" style={{ color: 'white', textAlign: 'center', width: '200px' }}  />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" style={{ color: 'white', textAlign: 'center', width: '200px' }}  />
          </ListItem>
        </List>
      </Drawer>
      <Container sx={{ marginTop: '2rem', flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="220"
                image={img1}
                alt="Product Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SAMSUNG M32
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Image by SAMSUNG@officials.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Add more product cards as needed */}
        </Grid>
      </Container>
      <footer style={{ backgroundColor: footerBackgroundColor, color: '#fff', textAlign: 'center', padding: '1rem 0', marginTop: 'auto' }}>
        <p>&copy; 2024 Diwas E-commerce App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
