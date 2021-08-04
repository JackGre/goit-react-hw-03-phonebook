import React, { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';

import styles from "./App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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
