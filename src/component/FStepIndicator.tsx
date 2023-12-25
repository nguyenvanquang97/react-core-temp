import React from 'react';
import StepIndicator from 'react-native-step-indicator';

interface FStepIndicatorProps {
  lable: string[];
  stepCount: number;
  direction?: 'vertical';
  currentPosition: Number | any;
}

const customStyles = {
  stepStrokeUnFinishedColor: 'red',
};
const FStepIndicator: React.FC<FStepIndicatorProps> = ({
  lable,
  stepCount,
  direction,
  currentPosition,
}) => {
  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={currentPosition}
      labels={lable}
      direction={direction}
      stepCount={stepCount}
    />
  );
};
export default FStepIndicator;
