import { FC } from "react";

import {
  MyLibraryBooks_div,
  MyLibraryBooks_h3,
  MyLibraryBooksWrapper,
} from "./MyLibraryBooks.styled";
import CustomSelectReadStatus from "./CustomSelectReadStatus/CustomSelectReadStatus";
import NoData from "../NoData/NoData";

const MyLibraryBooks: FC = () => {
  return (
    <MyLibraryBooksWrapper>
      <MyLibraryBooks_div>
        <MyLibraryBooks_h3>My library</MyLibraryBooks_h3>
        <CustomSelectReadStatus />
      </MyLibraryBooks_div>

      <NoData />
    </MyLibraryBooksWrapper>
  );
};

export default MyLibraryBooks;
