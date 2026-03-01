import React, { useState } from 'react';
import { Collapse, IconButton, Stack, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './App.css';

// local image assets
import marieCurieImg from './assets/mariecurie.jpg';
import nikolaTeslaImg from './assets/nikolatesla.jpeg';
import isaacNewtonImg from './assets/isaacnewton.jpg';
import rosalindFranklinImg from './assets/rosalindfranklin.jpg';
import katherineJohnsonImg from './assets/katherinejohnson.jpg';

const scientists = [
  {
    name: "Albert Einstein",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    link: "https://en.wikipedia.org/wiki/Albert_Einstein",
    description: "Theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. He is best known for his mass–energy equivalence formula E = mc²."
  },
  {
    name: "Marie Curie",
    image: marieCurieImg,
    link: "https://en.wikipedia.org/wiki/Marie_Curie",
    description: "Pioneering physicist and chemist who conducted groundbreaking research on radioactivity. She was the first person to win two Nobel Prizes in different scientific fields."
  },
  {
    name: "Isaac Newton",
    image: isaacNewtonImg,
    link: "https://en.wikipedia.org/wiki/Isaac_Newton",
    description: "Mathematician and physicist who formulated the laws of motion and universal gravitation."
  },
  {
    name: "Nikola Tesla",
    image: nikolaTeslaImg,
    link: "https://en.wikipedia.org/wiki/Nikola_Tesla",
    description: "Inventor best known for his contributions to the design of the modern alternating current (AC) electricity supply system."
  },
  {
    name: "Ada Lovelace",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
    link: "https://en.wikipedia.org/wiki/Ada_Lovelace",
    description: "Mathematician and writer chiefly known for her work on Charles Babbage's early mechanical computer. She is the first computer programmer."
  },
  {
    name: "Charles Darwin",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Charles_Darwin_seated_crop.jpg",
    link: "https://en.wikipedia.org/wiki/Charles_Darwin",
    description: "Naturalist and biologist best known for his contributions to the science of evolution."
  },
  {
    name: "Rosalind Franklin",
    image: rosalindFranklinImg,
    link: "https://en.wikipedia.org/wiki/Rosalind_Franklin",
    description: "Chemist whose work was central to the understanding of the molecular structures of DNA."
  },
  {
    name: "Galileo Galilei",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
    link: "https://en.wikipedia.org/wiki/Galileo_Galilei",
    description: "Astronomer often called the 'father of observational astronomy' for his telescope improvements."
  },
  {
    name: "Stephen Hawking",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
    link: "https://en.wikipedia.org/wiki/Stephen_Hawking",
    description: "Theoretical physicist known for his work on black holes and 'A Brief History of Time'."
  },
  {
    name: "Katherine Johnson",
    image: katherineJohnsonImg,
    link: "https://en.wikipedia.org/wiki/Katherine_Johnson",
    description: "NASA mathematician whose orbital mechanics calculations were critical to the first U.S. crewed spaceflights."
  }
];

function App() {
  const [index, setIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleNext = () => {
    setShowInfo(false);
    setIndex((prev) => (prev + 1) % scientists.length);
  };

  const handleBack = () => {
    setShowInfo(false);
    setIndex((prev) => (prev - 1 + scientists.length) % scientists.length);
  };

  const person = scientists[index];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div className="scientist-card">
        <div className="card-padding">
          <Typography variant="h4" className="header-title" sx={{ fontWeight: 'bold', mb: 0.5 }}>
            LEGENDARY SCIENTISTS
          </Typography>
          <Typography variant="subtitle1" className="id-subtitle" sx={{ color: 'text.secondary', mb: 3 }}>
            Charlene Lugtu - C-PEITEL3
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button variant="contained" onClick={handleBack} className="nav-btn">
              Back
            </Button>
            <Button variant="contained" onClick={handleNext} className="nav-btn">
              Next
            </Button>
          </Stack>

          <div className="image-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <a href={person.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={person.image} 
                alt={person.name} 
                className="scientist-img" 
                style={{ maxHeight: '300px', borderRadius: '8px' }}
              />
            </a>
          </div>

          <Typography variant="h4" className="name-display" sx={{ mb: 1 }}>
            {person.name}
          </Typography>
          <Typography variant="h6" className="counter-display" sx={{ color: 'text.secondary' }}>
            {index + 1} of {scientists.length}
          </Typography>
        </div>

        <div className="expand-container" style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
          <IconButton onClick={() => setShowInfo(!showInfo)} aria-label="show more">
            <ExpandMoreIcon 
              sx={{ 
                transform: showInfo ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s',
                fontSize: 40
              }} 
            />
          </IconButton>
        </div>

        <Collapse in={showInfo} timeout="auto">
          <div className="description-box" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #ddd' }}>
            <Typography variant="body1">
              {person.description}
            </Typography>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default App;