import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/18462/production/_122562499_whatsubject.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://i.ytimg.com/vi/CzsUYtieSiU/maxresdefault.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'data:image/jpeg;base64,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',
  },
  
];

function TrendingSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                  borderRadius:"0.5rem"
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}

export default TrendingSlider;
