import { useState } from "react";

export const useLocation = () => {
  const [selectedOption, setSelectedOption] = useState<string>("All Location");

  return { selectedOption, setSelectedOption };
};
