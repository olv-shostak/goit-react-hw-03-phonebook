import styled from "@emotion/styled";

export const ContactsList = styled.ul`
    text-align: center;
`

export const ContactsItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 75px;
    font-size: 18px;
`
export const NameText = styled.span`
    font-size: 20px;
`

export const NumberText = styled.span`
    
`

export const ContactsButton = styled.button`
    padding: 5px 20px;
    font-size: 18px;
    background-color: #fd4646;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #da0000;
        box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.41);
    }
    &:focus {
        background-color: #da0000;
        box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.41);
        transform: scale(0.96);
    }
`