import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './ContactForm.module.css';



class ContactForm extends Component {
state = {
    name: '',
    number: '',
    }
    onChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    addContact = (e) => {
        e.preventDefault()
        const newContact = {
            name: this.state.name,
            number: this.state.number,
            id: shortid.generate(),

        }
        this.props.onSubmit(newContact)
        
        this.setState({
            name: '',
            number: '',
        })

    }

    render() {
        return (
            <form className={styles.Form} onSubmit={this.addContact}>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={this.state.number}
                    onChange={this.onChange}
                />
                <button type="submit"
                >Add contact</button>
               
            </form>
        );
    }
}

export default ContactForm;