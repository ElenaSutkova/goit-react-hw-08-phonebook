import InfoUser from "components/InfoUser/InfoUser";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "Store/DataUser/userSelect";
import styles from './Navigation.module.css'

const Navigation = () => {
    const user = useSelector(selectUser);
    const token = useSelector(selectToken) ?? '';

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/goit-react-hw-08-phonebook/contacts" className={styles.phonebook} style={{color: 'rgba( 0,0,0 , 0.65)', fontSize: '35px'}}>
                        Phonebook
                    </Navbar.Brand>
                    {!user && (
                        <Nav>
                            {token && (
                                <Nav.Link to="/contacts" as={Link}>
                                    Contacts
                                </Nav.Link>
                            )}
                            <Nav.Link to="signup" as={Link} className={styles.signup}>
                                Sign Up
                            </Nav.Link>
                            <Nav.Link to="/login" as={Link} className={styles.login}>
                                Login
                            </Nav.Link>
                        </Nav>
                    )}

                    <InfoUser className="d-flex flex-column" />
                </Container>
            </Navbar>
            <Container className={styles.container}>
                {user ? (
                    <h1 className={styles.title}>Welcome '{user.name}' your contacts</h1>
                ) : (
                    <h1 className={styles.title}>Welcome Guest! Please login or register</h1>
                )}
            </Container>
        </>
    )
};

export default Navigation;