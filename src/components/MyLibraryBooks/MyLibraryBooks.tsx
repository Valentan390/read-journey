import { FC } from "react";

import {
  MyLibraryBooks_div,
  MyLibraryBooks_h3,
  MyLibraryBooksWrapper,
} from "./MyLibraryBooks.styled";
import CustomSelectReadStatus from "./CustomSelectReadStatus/CustomSelectReadStatus";

import ListUserBooks from "../ListUserBooks/ListUserBooks";

const MyLibraryBooks: FC = () => {
  return (
    <MyLibraryBooksWrapper>
      <MyLibraryBooks_div>
        <MyLibraryBooks_h3>My library</MyLibraryBooks_h3>
        <CustomSelectReadStatus />
      </MyLibraryBooks_div>

      <ListUserBooks />
    </MyLibraryBooksWrapper>
  );
};

export default MyLibraryBooks;
