import { useState, useEffect } from "react";
import { Button} from "react-bootstrap";
import { getContact } from "Store/Selectors";
import { useDispatch, useSelector } from "react-redux";
import { addContactsThunk, getContactsThunk } from "Store/ContactsThunk";
import styles from './ContactForm.module.css'

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    const handleChange = e => {
        const { name, value } = e.target;
        name === 'name' ? setName(value) : setNumber(value)
    };

    const handleSubmit = e => {
        e.preventDefault()
        if (
            contacts.some(
                value => value.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            alert(`${name} is alredy in contacts`)
        } else {
            dispatch(addContactsThunk({ name, number }))
        }
        reset()
    };

    const reset = () => {
        setName('')
        setNumber('')
    };

    const contacts = useSelector(getContact)

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>Name
                <input
                    type="text"
                    name="name"
                    placeholder="Enter a name"
                    className={styles.input}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={styles.label}>Number
                <input
                    type="tel"
                    name="number"
                    placeholder="Enter a number"
                    className={styles.input}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    onChange={handleChange}
                    required
                />
            </label>
            <Button size="sm" variant="outline-secondary" type="submit" style={{display: 'block', margin: 'auto'}}>Add Contact</Button>
        </form>
    )
}

export default ContactForm;