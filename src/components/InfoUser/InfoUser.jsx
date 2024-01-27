import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "Store/DataUser/userSelect";
import { logoutThunk } from "Store/DataUser/userThunk";
import styles from './InfoUser.module.css'

const InfoUser = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        dispatch(logoutThunk())
    };

    return (
        <div>
            {user && (
                <div className={styles.div}>
                    <Button className={styles.button} onClick={handleSubmit}>Log Out</Button>
                </div>
            )}
        </div>
    )
}

export default InfoUser;