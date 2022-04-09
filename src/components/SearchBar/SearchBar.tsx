import React from 'react';
import './SearchBar.css';

interface IProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar(props: IProps) {
  const { searchTerm, setSearchTerm } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <input
      className="search__input"
      type="text"
      name="search"
      placeholder="Type to search"
      onChange={onChange}
      value={searchTerm}
    />
  );
}

export default SearchBar;
