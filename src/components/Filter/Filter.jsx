import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "Store/SliceFilter";
import { getFilter } from "Store/Selectors";
import styles from './Filter.module.css'

const Filter = function () {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        <label className={styles.label}>
            Find contacts by name
            <input
                type="text"
                name="filter"
                placeholder="Enter a name"
                className={styles.input}
                value={filter}
                onChange={e => dispatch(filterContacts(e.currentTarget.value))} />
        </label>
    )
};

export default Filter;