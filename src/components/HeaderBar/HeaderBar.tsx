import { Navbar, Container, ButtonGroup, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

interface Props {
    walletAddress: string | undefined;
    logout: () => void;
    login: () => void;
}

export const HeaderBar: React.FC<Props> = ({ login, logout, walletAddress }) => {
    const history = useHistory();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                    <Navbar.Brand>Intern X Marketplace</Navbar.Brand>
                </Link>
                {walletAddress &&
                    <ButtonGroup>
                        <Link to={'/asset'} style={{ textDecoration: 'none', color: 'black' }}>
                            <Button variant="outline-info">Asset</Button>
                        </Link>
                        <Link to={'/wallet_management'} style={{ textDecoration: 'none', color: 'black' }}>
                            <Button variant="outline-info">Wallet</Button>
                        </Link>
                        <Button variant="outline-info" onClick={() => { logout(); history.push('/') }}>
                            Disconnect
                        </Button>
                    </ButtonGroup>
                }
                {!walletAddress &&
                    <ButtonGroup className='walletButtonGroup'>
                        <Button variant="outline-info" onClick={login}>
                            Connect Wallet
                        </Button>
                    </ButtonGroup>
                }
            </Container>
        </Navbar>
    )
}
