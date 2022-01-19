import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormLabel = styled.label`
    margin-bottom: 30px;
    font-size: 28px;
`

export const InputField = styled.input`
    margin-left: 20px;
    width: 400px;
    height: 38px;
    font-size: 24px;
    padding: 5px;
    border: none;
    border-radius: 4px;
    padding-left: 15px;
    padding-right: 15px;
    &:hover, &:focus {
        outline: none;
    }
    &[name="number"]  {
        letter-spacing: 0.13em;
    }
`

export const FormButton = styled.button`
    padding: 5px 20px;
    font-size: 25px;
    background-color: #2e54fa;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #1100ff;
        box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.41);
    }
    &:focus {
        background-color: #1100ff;
        box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.41);
        transform: scale(0.96);
    }
`