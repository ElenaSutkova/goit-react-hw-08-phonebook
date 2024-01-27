import { useDispatch, useSelector } from "react-redux";
import { getContact, getFilter } from "Store/Selectors";
import { delContactsThunk } from "Store/ContactsThunk";
import styles from './ContactList.module.css'

const ContactList = function () {
    const dispatch = useDispatch();
    const filtered = useSelector(getFilter);
    const contacts = useSelector(getContact);

    const filterContact = e => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filtered.toLowerCase())
        )
    };

    const filteredContacts = filterContact();

    return (
        <ul className={styles.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <li className={styles.item} key={id}>
                    <p className={styles.name}>
                        {name}:{number}
                        <button
                            data-id={id}
                            onClick={() => dispatch(delContactsThunk(id))}
                            className={styles.button}
                            type="button">
                            Delete
                        </button>
                    </p>
                </li>
            ))}
        </ul>
    )
}

export default ContactList;