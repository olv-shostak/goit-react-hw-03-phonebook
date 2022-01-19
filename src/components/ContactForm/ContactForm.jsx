import React from "react";
import { nanoid } from 'nanoid';
import { Form, FormLabel, InputField, FormButton } from "./ContactForm.styled";

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
      };

      createContact = (name, number) => {
        return { id: nanoid(3), name, number };
      };

    handleOnChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({[name] : value });
      };
    
    handleSubmit = (e) => {
        const { name, number } = this.state;
        e.preventDefault();
        const newContact = this.createContact(name, number);
        this.props.enterSubmit(newContact)
        this.reset();
      }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
          <FormLabel>
            Name
            <InputField
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              autoComplete="off"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </FormLabel>
          <FormLabel>
            Phone
            <InputField
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              autoComplete='off'
              value={this.state.number}
              onChange={this.handleOnChange}
            />
          </FormLabel>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
        )
    }
}

export default ContactForm;