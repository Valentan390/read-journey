import { FC } from "react";
import Select, { SingleValue } from "react-select";
import { SelectCustom } from "./CustomSelectReadStatus.styled";
import { useAppDispatch } from "../../../hooks";
import { setStatusBookFilter } from "../../../redux/filter/filterSlise";

// export interface ICustomSelectReadStatus {
//   value: string;
//   label: string;
// }

// const categoriesBooks = ["Unread", "In progress", "Done", "All books"];

// const options = categoriesBooks.map((categorie) => ({
//   value: categorie === "All books" ? "" : categorie,
//   label: categorie,
// }));

// const defaultOption = options.find((option) => option.label === "All books");

export interface CategoriesBooks {
  value: string;
  label: string;
}

const categoriesBooks: CategoriesBooks[] = [
  { value: "unread", label: "Unread" },
  { value: "in-progress", label: "In progress" },
  { value: "done", label: "Done" },
  { value: "", label: "All books" },
];

const defaultOption = categoriesBooks[3];

const CustomSelectReadStatus: FC = () => {
  const dispatch = useAppDispatch();

  const handleSelectChange = (newValue: SingleValue<CategoriesBooks>) => {
    if (newValue) {
      dispatch(setStatusBookFilter(newValue.value));
    }
  };

  return (
    <Select
      options={categoriesBooks}
      defaultValue={defaultOption}
      styles={SelectCustom()}
      onChange={handleSelectChange}
      isMulti={false}
    />
  );
};

export default CustomSelectReadStatus;
