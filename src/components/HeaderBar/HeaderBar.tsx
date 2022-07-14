import { useState } from 'react';
import { Link } from '@imtbl/imx-sdk';
import { Navbar, Container, ButtonGroup, Button } from 'react-bootstrap';
import { Link as LinkPage, useHistory } from "react-router-dom";


export const HeaderBar = () => {
    const [walletAddress, setWalletAddress] = useState(localStorage.WALLET_ADDRESS)
    const history = useHistory();

    const linkAddress = process.env.REACT_APP_LINKADDRESS
    const link = new Link(linkAddress);

    async function login() {
        const { address, starkPublicKey } = await link.setup({});
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem('STARK_PUBLIC_KEY', starkPublicKey);
        setWalletAddress(localStorage.WALLET_ADDRESS);
    }

    function logout() {
        localStorage.removeItem('WALLET_ADDRESS');
        setWalletAddress(localStorage.WALLET_ADDRESS);
        history.push('/')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Intern X Marketplace</Navbar.Brand>
                {walletAddress &&
                    <ButtonGroup>
                        <LinkPage to={'/asset'} style={{ textDecoration: 'none', color: 'black' }}>
                            <Button variant="outline-info">Asset</Button>
                        </LinkPage>
                        <LinkPage to={'/wallet_management'} style={{ textDecoration: 'none', color: 'black' }}>
                            <Button variant="outline-info">Wallet</Button>
                        </LinkPage>
                        <Button variant="outline-info" onClick={logout}>
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
