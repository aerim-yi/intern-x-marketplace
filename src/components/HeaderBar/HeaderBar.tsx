import { Navbar, Container, ButtonGroup, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { useWalletHook } from '../NavBar/useWallethook';
import { Hamburger } from '../HumburgerMenu/HumburgerMenu';

export const HeaderBar: React.FC = () => {
    const history = useHistory();
    const wallet = useWalletHook();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Hamburger open={true}/>

                <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                    <Navbar.Brand>Intern X Marketplace</Navbar.Brand>
                </Link>
                {wallet?.walletInfo?.address &&
                    <ButtonGroup>
                        <Link to={'/asset'} style={{ textDecoration: 'none', color: 'black' }}>
                            <Button variant="outline-info">Asset</Button>
                        </Link>
                        <Link to={'/wallet_management'} style={{ textDecoration: 'none', color: 'black' }}>
                            <Button variant="outline-info">Wallet</Button>
                        </Link>
                        <Button variant="outline-info" onClick={() => { wallet?.logout(); history.push('/') }}>
                            Disconnect
                        </Button>
                    </ButtonGroup>
                }
                {!wallet?.walletInfo?.address &&
                    <ButtonGroup className='walletButtonGroup'>
                        <Button variant="outline-info" onClick={wallet?.login}>
                            Connect Wallet
                        </Button>
                    </ButtonGroup>
                }
            </Container>
        </Navbar>
    )
}
