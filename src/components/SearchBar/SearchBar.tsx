import React from "react";
import styles from "./SearchBar.module.css";

interface IProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = (props: IProps) => {
  const { searchTerm, setSearchTerm } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      name="search"
      placeholder="Type to search"
      onChange={onChange}
      value={searchTerm}
    />
  );
};

export default SearchBar;
