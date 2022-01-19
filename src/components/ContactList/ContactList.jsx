import React from "react";
import { ContactsList, ContactsItem, TextContainer, NameText, ContactsButton } from './ContactList.styled'

const ContactList = ({ find, deleteContact }) => {
    return (
      <ContactsList>
        {find.map((contact) => (
          <ContactsItem key={contact.id}>
            <TextContainer>
            <NameText>
              {contact.name}
            </NameText>
            <span>{contact.number}</span>
            </TextContainer>
            <ContactsButton type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </ContactsButton>
          </ContactsItem>
        ))}
      </ContactsList>
    );
  };
  
  export default ContactList;