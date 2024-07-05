import React from "react";
import {
  Box,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper as ChakraStepper,
  StepTitle,
  StepDescription,
  useSteps,
  StepNumber,
  StepIcon,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "@/components";
import PropTypes from "prop-types";

/**
 * A robust stepper component that allows customization and can be used for various purposes.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {number} props.activeStep - The active step index.
 * @param {Array} props.steps - An array of step objects, each containing a title and description.
 * @param {string} [props.size='lg'] - The size of the stepper ('sm', 'md', 'lg', etc.).
 * @param {string} [props.colorScheme='yellow'] - The color scheme for the stepper.
 * @param {boolean} [props.showStepNumbers=false] - Whether to show step numbers.
 * @param {Object} props.statusIcons - Icons for step status (complete, incomplete, active).
 * @returns {JSX.Element} The rendered `Stepper` component.
 * @example  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Step 1", description: "Step One Description" },
    { title: "Step 2", description: "Step Two Description" },
    { title: "Step 3", description: "Step Three Description" },
  ];

  const customStatusIcons = {
    complete: "✅",
    incomplete: "❌",
    active: "🔥",
  };

   <Stepper
          activeStep={activeStep}
          steps={steps}
          size="lg"
          colorScheme="teal"
          showStepNumbers={true}
          statusIcons={customStatusIcons}
    />
 */

export default function Stepper({
  activeStep,
  steps,
  size = "lg",
  colorScheme = "yellow",
  showStepNumbers = false,
  statusIcons,
}) {
  const { setActiveStep } = useSteps({
    index: activeStep,
    count: steps.length,
  });

  const stepCompleteIcon = statusIcons?.complete;
  const stepInCompleteIcon = statusIcons?.incomplete;
  const stepActiveIcon = statusIcons?.active;

  const [isBigScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <ChakraStepper
      colorScheme={colorScheme}
      index={activeStep}
      orientation={!isBigScreen ? "vertical" : "horizontal"}
      gap={!isBigScreen ? 0 : 4}
    >
      {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)} cursor="pointer">
          {step.link && activeStep === index ? (
            <Link href={step.link} showUnderline={false}>
              <StepIndicator>
                <StepStatus
                  complete={stepCompleteIcon ?? <StepIcon />}
                  incomplete={stepInCompleteIcon ?? <StepNumber />}
                  active={stepActiveIcon ?? <StepNumber />}
                />
              </StepIndicator>
            </Link>
          ) : (
            <StepIndicator>
              <StepStatus
                complete={stepCompleteIcon ?? <StepIcon />}
                incomplete={stepInCompleteIcon ?? <StepNumber />}
                active={stepActiveIcon ?? <StepNumber />}
              />
            </StepIndicator>
          )}

          {showStepNumbers && <StepNumber size={size}>{index + 1}</StepNumber>}
          {step.link && activeStep === index ? (
            <Link href={step.link} showUnderline={false}>
              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
            </Link>
          ) : (
            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
          )}

          <StepSeparator />
        </Step>
      ))}
    </ChakraStepper>
  );
}

Stepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  size: PropTypes.string,
  colorScheme: PropTypes.string,
  showStepNumbers: PropTypes.bool,
  statusIcons: PropTypes.shape({
    complete: PropTypes.node,
    incomplete: PropTypes.node,
    active: PropTypes.node,
  }),
};
