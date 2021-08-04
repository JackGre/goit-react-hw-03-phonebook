import React, { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';

import styles from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  onSubmit = (newContact) => {
    const check = this.state.contacts.find(el => {
      return el.name === newContact.name
    })
    
    console.log(check)
    
    if (check !== undefined) {
      alert(`${newContact.name} is already in contacts`)
      return;
    }
    
    
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  removeContact = (id) => {
    const filterContacts = this.state.contacts.filter(contact => {
      return (
        contact.id !== id)
    })
    this.setState({ contacts: filterContacts })
  };
  
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }

  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  render() {
    
    const { filter } = this.state;
     const normalizedFilter = this.state.filter.toLowerCase();
     const visibleFilterContact = this.state.contacts.filter(({name}) =>
         name.toLowerCase().includes(normalizedFilter))

    return (
      <div className={styles.Container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit}/>
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleFilterContact} onClick={this.removeContact} />
      </div>
    );
  }
}

export default App;
