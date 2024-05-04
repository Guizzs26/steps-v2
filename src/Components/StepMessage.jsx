/* eslint-disable react/prop-types */
export default function StepMessage({ step, children }) {
  return (
    <div className="message">
      Step {step}: {children}
    </div>
  );
}
