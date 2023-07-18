import React from "react";

interface Option {
  id: number;
  value: string | number;
  name: string | number;
}

interface Props {
  selectedOptions: Option[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

export const handleMultiSelection = (option: string | number, optionArray: Array<string | number>, setOptionArray: React.Dispatch<React.SetStateAction<(string | number)[]>>) => {
  const optionIdx = optionArray.findIndex((ele) => ele === option);
  if (optionIdx > -1) {
    setOptionArray(prevState => [...prevState.slice(0, optionIdx), ...prevState.slice(optionIdx + 1)])
  } else {
    setOptionArray(prevState => [...prevState, option]);
  }
}

export const multipleSelection = (option: listItem, optionArray: string[]) => {
  const valIndex = optionArray.findIndex(item => item === option.name)
  let updatedAr = [];
  if (valIndex > -1) {
    updatedAr = [...optionArray.slice(0, valIndex), ...optionArray.slice(valIndex + 1)];
  } else {
    updatedAr = [...optionArray, option.name];
  }
  return updatedAr;
}