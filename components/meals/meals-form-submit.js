"use client";

import { useFormStatus } from "react-dom";

const MealsFormSubmition = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Save Meal"}
      </button>
    </div>
  );
};

export default MealsFormSubmition;
