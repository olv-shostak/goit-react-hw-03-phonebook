import React from "react";
import { FilterContainer, FilterLabel, FilterInput, FilterButton } from "./Filter.styled";

const Filter = ({ filter, onChange, clear }) => {
  return (
    <FilterContainer>
      <FilterLabel>Find contacts by name 
      <FilterInput
        type="text"
        value={filter}
        name="filter"
        onChange={onChange}
        placeholder="Enter search name"
        autoComplete="off"
      />
      </FilterLabel>
      <FilterButton type="button" onClick={() => clear()}>Clear</FilterButton>
    </FilterContainer>
  );
};

export default Filter;