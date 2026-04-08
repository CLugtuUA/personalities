import { useState, useRef } from 'react';
import { 
  Typography, Box, Button, CardMedia, 
  Collapse, IconButton, Paper, Divider, Chip, Stack, CssBaseline 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';

import { personalitiesData } from './data';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const bioRef = useRef(null);

  const isFirstPerson = currentIndex === 0;
  const isLastPerson = currentIndex === personalitiesData.length - 1;

  function handleNext() {
    if (!isLastPerson) {
      setCurrentIndex(currentIndex + 1);
      setExpanded(false);
    }
  }

  function handleBack() {
    if (!isFirstPerson) {
      setCurrentIndex(currentIndex - 1);
      setExpanded(false);
    }
  }

  function toggleExpand() {
    setExpanded(!expanded);
    if (!expanded) {
      setTimeout(function() {
        bioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }

  const currentPerson = personalitiesData[currentIndex];

  return (
    <>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        width: '100%',
        background: 'radial-gradient(at 0% 0%, hsla(210,100%,95%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,100%,90%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(260,100%,95%,1) 0, transparent 50%)',
        bgcolor: '#f8fafc',
        py: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Box sx={{ width: '100%', maxWidth: 700, px: 3 }}>

          {/* HEADER */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: { xs: 3, md: 4 }
          }}>
            <Typography variant="overline" sx={{ letterSpacing: 4, color: 'primary.main', fontWeight: 700 }}>
              Featured Gallery
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#1e293b', mt: 0.5, textShadow: '0 2px 4px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              Global Best Speakers
            </Typography>

            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              sx={{ mt: 2.5 }}
              justifyContent="center"
              alignItems="center"
            >
              {[
                { label: 'CHARLENE LUGTU', icon: <AccountCircleIcon fontSize="small" /> },
                { label: 'C-PEITEL3', icon: <SchoolIcon fontSize="small" /> },
                { label: 'BSIT-3B', icon: <GroupIcon fontSize="small" /> }
              ].map(function(item, index) {
                return (
                  <Paper key={index} elevation={0} sx={{ 
                    px: 3, py: 0.75, borderRadius: 10, bgcolor: 'white', border: '1px solid #e2e8f0',
                    display: 'flex', alignItems: 'center', gap: 1, color: '#64748b'
                  }}>
                    {item.icon}
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{item.label}</Typography>
                  </Paper>
                );
              })}
            </Stack>
          </Box>

          {/* MAIN CARD */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

            {/* FLOATING IMAGE */}
            <Paper elevation={20} sx={{ 
              width: { xs: '200px', sm: '260px' }, 
              height: { xs: '200px', sm: '260px' }, 
              borderRadius: '24% 76% 70% 30% / 30% 30% 70% 70%',
              overflow: 'hidden', zIndex: 2, 
              mb: -8, 
              border: '6px solid white',
              transition: 'all 0.5s ease-in-out',
              flexShrink: 0,
            }}>
              <CardMedia
                component="img"
                image={currentPerson.image}
                alt={currentPerson.name}
                sx={{ height: '100%', objectFit: 'cover' }}
              />
            </Paper>

            {/* CONTENT PANEL */}
            <Paper sx={{ 
              width: '100%',
              pt: 10, pb: 3, px: 3,
              borderRadius: 8,
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', textAlign: 'center' }}> 
                {currentPerson.name}
              </Typography>

              <Chip 
                label={`Stage Speaker ${currentIndex + 1} / ${personalitiesData.length}`} 
                sx={{ mt: 1.5, bgcolor: '#f1f5f9', fontWeight: 700, color: '#475569' }} 
              />

              <Divider sx={{ my: 3, opacity: 0.6, width: '100%' }} />

              {/* NAVIGATION */}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, width: '100%' }}>
                <IconButton 
                  onClick={handleBack} 
                  disabled={isFirstPerson}
                  sx={{ width: 48, height: 48, border: '1px solid #e2e8f0', '&:disabled': { opacity: 0.3 } }}
                >
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>

                <Button
                  onClick={toggleExpand}
                  variant="text"
                  endIcon={<ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />}
                  sx={{ fontWeight: 700, color: 'primary.main', px: 3 }}
                >
                  {expanded ? 'CLOSE' : 'VIEW PROFILE'}
                </Button>

                <IconButton 
                  onClick={handleNext} 
                  disabled={isLastPerson}
                  sx={{ width: 48, height: 48, bgcolor: '#1e293b', color: 'white', '&:hover': { bgcolor: '#0f172a' }, '&:disabled': { bgcolor: '#e2e8f0' } }}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* BIO */}
              <Collapse in={expanded} ref={bioRef} sx={{ width: '100%' }}>
                <Box sx={{ mt: 3, p: 2.5, bgcolor: 'rgba(255,255,255,0.5)', borderRadius: 4, textAlign: 'justify' }}>
                  <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.7 }}> 
                    {currentPerson.description}
                  </Typography>
                </Box>
              </Collapse>
            </Paper>
          </Box>

        </Box>
      </Box>
    </>
  );
}