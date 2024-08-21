import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={index} className="relative flex items-center">
          <div
            className={`rounded-full h-8 w-8 flex items-center justify-center 
            ${currentStep >= index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-1 ${currentStep > index + 1 ? 'bg-blue-500' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
