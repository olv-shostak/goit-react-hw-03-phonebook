import React from 'react';
import { Container, Section, Title, TitleContacts } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  findContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
    }
  };

  handlChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  clearFilterInput = () => {
    this.setState({ filter: '' });
  };

  render() {
    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm enterSubmit={this.addContact}></ContactForm>
        </Section>
        <Section>
          <TitleContacts>Contacts</TitleContacts>
          {this.state.contacts.length === 0 ? (
            <Notification message="There is no any contact"></Notification>
          ) : (
            <Filter
              filter={this.state.filter}
              onChange={this.handlChange}
              clear={this.clearFilterInput}
            />
          )}
          <ContactList find={this.findContact()} deleteContact={this.deleteContact}></ContactList>
        </Section>
      </Container>
    );
  }
}

export default App;
