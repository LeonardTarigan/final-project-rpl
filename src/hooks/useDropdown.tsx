import { useState } from "react";

export const useDropdown = (initialValue: string) => {
  const [selectedOption, setSelectedOption] = useState<string>(initialValue);

  return { selectedOption, setSelectedOption };
};
