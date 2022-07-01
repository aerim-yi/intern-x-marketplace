import { Navbar, Container } from 'react-bootstrap';


const HeaderBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Intern X</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default HeaderBar