import { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const steps = [
  { id: 1, label: "1", component: Component1 },
  { id: 2, label: "2", component: Component2 },
  { id: 3, label: "3", component: Component3 },
];

const VerticalTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  const getStepState = (stepId: number) => {
    if (stepId === activeStep) return "active";
    if (stepId < activeStep) return "completed";
    return "inactive";
  };

  const getCircleClasses = (state: string) => {
    const baseClasses =
      "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg";

    switch (state) {
      case "active":
        return `${baseClasses} bg-blue-500 ring-4 ring-blue-200 animate-pulse`;
      case "completed":
        return `${baseClasses} bg-green-500 hover:bg-green-600`;
      case "inactive":
        return `${baseClasses} bg-gray-300 hover:bg-gray-400`;
      default:
        return baseClasses;
    }
  };

  const getLineClasses = (stepId: number) => {
    const isCompleted = stepId < activeStep;
    return `w-1 h-12 transition-all duration-500 ${isCompleted ? "bg-green-500" : "bg-gray-200"}`;
  };

  const ActiveComponent = steps.find(step => step.id === activeStep)?.component || Component1;

  return (
    <div className="flex min-h-60 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="w-20 bg-white shadow-lg flex flex-col items-center py-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={getCircleClasses(getStepState(step.id))}
              onClick={() => setActiveStep(step.id)}
            >
              {getStepState(step.id) === "completed" ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                step.label
              )}
            </div>

            {index < steps.length - 1 && <div className={getLineClasses(step.id)} />}
          </div>
        ))}
      </div>

      <div className="flex-1 p-8">
        <div key={activeStep} className="animate-in fade-in slide-in-from-right-4 duration-500">
          <ActiveComponent />
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors duration-200"
          >
            Prev
          </button>
          <button
            onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
            disabled={activeStep === steps.length}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
