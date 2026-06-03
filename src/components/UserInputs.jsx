import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const steps = [
  "Basic Informationals",
  "Contact Details",
  "Educational Details",
  "Review & Submit",
];

const UserInputs = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <h1>Personal details</h1>
            <div className="p-3 row gap-3">
              <TextField id="filled-basic" label="Full Name" variant="filled" />
              <TextField id="filled-basic" label="Location" variant="filled" />

              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Choose Job Title
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                >
                  {/* <MenuItem value="">
                      <em>None</em>
                    </MenuItem> */}
                  <MenuItem value={10}>Software Delevoper</MenuItem>
                  <MenuItem value={20}>Full Stack developer</MenuItem>
                  <MenuItem value={30}>Designer</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h1>Contcat details</h1>
            <div className="p-3 row gap-3">
              <TextField id="filled-basic" label="Email" variant="filled" />
              <TextField id="filled-basic" label="Contact" variant="filled" />
              <TextField id="filled-basic" label="Linked In" variant="filled" />
              <TextField id="filled-basic" label="Git Hub" variant="filled" />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h1>Educational details</h1>
            <div className="p-3 row gap-3">
              <TextField
                id="filled-basic"
                label="Bachelor's Degree"
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="University/College Name"
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="Year of Gradution"
                variant="filled"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Revie & submit</h1>
            <p>
              Our AI will generate Skills & Summary according to your job role.
              Click the Generate AI Skill & Summary button to Proceed.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>{renderStepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}

            {activeStep === steps.length - 1 ? (
              <Button
                color="primary"
                variant="contained"
                onClick={handleNext} 
                sx={{ mr: 1 }}
              >
                Generate AI Skills & summary
              </Button>
            ) :  (
              <Button
              
                variant="contained"
                onClick={handleNext} 
              >
                Next
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default UserInputs;
