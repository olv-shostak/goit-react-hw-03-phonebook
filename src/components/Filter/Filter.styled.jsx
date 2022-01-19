import styled from "@emotion/styled";

export const FilterContainer = styled.div`
    margin-bottom: 25px;
`

export const FilterLabel = styled.label`
    font-size: 24px;
`

export const FilterInput = styled.input`
    width: 300px;
    height: 36px;
    margin-left: 20px;
    font-size: 16px;
    outline: none;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-left: 10px;
`

export const FilterButton = styled.button`
    width: 80px;
    height: 38px;
    font-size: 16px;
    background-color: #2e54fa;
    color: white;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    &:hover, &:focus {
        background-color: #1100ff;
    }
`