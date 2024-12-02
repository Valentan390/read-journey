import { FC } from "react";
import Select from "react-select";
import { SelectCustom } from "./CustomSelectReadStatus.styled";

export interface ICustomSelectReadStatus {
  value: string;
  label: string;
}

const categoriesBooks: string[] = [
  "Unread",
  "In progress",
  "Done",
  "All books",
];

const options = categoriesBooks.map((categorie) => ({
  value: categorie === "All books" ? "" : categorie,
  label: categorie,
}));

const defaultOption = options.find((option) => option.label === "All books");

const CustomSelectReadStatus: FC = () => {
  return (
    <Select
      options={options}
      defaultValue={defaultOption}
      styles={SelectCustom()}
    />
  );
};

export default CustomSelectReadStatus;
