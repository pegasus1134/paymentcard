import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, Box } from '@mui/material';
import Logo from './astrochat.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff00',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
    }
  },
});

const PaymentCard = () => {
  const [upiId, setUpiId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = () => {
    alert(`Payment of ₹5000 processed from ${name} (${email}) with UPI ID ${upiId}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        padding="0 20px"
        style={{ boxSizing: 'border-box' }}
      >
        <Card style={{ flex: '0 1 auto', maxWidth: '80%', boxShadow: '0px 10px 20px rgba(0,0,0,0.5)', padding: '20px', boxSizing: 'border-box' }}>
          <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', boxSizing: 'border-box' }}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
              <img src={Logo} alt="astroChat" style={{ width: '70px', height: '70px', objectFit: 'cover', marginRight: '10px' }}/>
              <Typography gutterBottom variant="h4" component="div" color="primary">
                AstroAI
              </Typography>
            </div>
            <Card style={{backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.1)', width: 'calc(100% - 40px)', padding: '20px', marginBottom: '20px'}}>
              <Typography variant="h3" color="secondary" style={{fontWeight: 'bold'}}>
                ₹5000
              </Typography>
              <Typography variant="body2" color="secondary">
                Plan: Monthly Subscription
              </Typography>
            </Card>
            <Card style={{backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.1)', width: 'calc(100% - 40px)', padding: '20px'}}>
              <TextField
                label="Enter UPI ID"
                variant="outlined"
                style={{ width: '100%', marginTop: '20px', color: '#ffff00' }}
                value={upiId}
                onChange={e => setUpiId(e.target.value)}
                InputLabelProps={{style: { color: '#fff'}}}
              />
              <TextField
                label="Name"
                variant="outlined"
                style={{ width: '100%', marginTop: '20px', color: '#ffff00' }}
                value={name}
                onChange={e => setName(e.target.value)}
                InputLabelProps={{style: { color: '#fff'}}}
              />
              <TextField
                label="Email"
                variant="outlined"
                style={{ width: '100%', marginTop: '20px', color: '#ffff00' }}
                value={email}
                onChange={e => setEmail(e.target.value)}
                InputLabelProps={{style: { color: '#fff'}}}
              />
              <Button variant="contained" color="primary" onClick={handlePayment} style={{ marginTop: '20px' }}>
                Pay Now
              </Button>
            </Card>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default PaymentCard;

