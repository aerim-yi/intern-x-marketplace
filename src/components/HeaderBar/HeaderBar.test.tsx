import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { HeaderBar } from './HeaderBar';
import { useWalletHook } from '../../components/NavBar/useWallethook';

const emptyWallet = {
    walletInfo: {
        address: null
    },
    login: jest.fn(),
};

const wallet = {
    walletInfo: {
        address: "0xe3ece548F1DD4B1536Eb6eE188fE35350bc1aa1a"
    },
    logout: jest.fn(),
};

jest.mock('../../components/NavBar/useWallethook')

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    }),
}));

describe('HeaderBar component', () => {
    test('match snapshot before the wallet address is provided', () => {
        const { container } = render(
            <MemoryRouter>
                <HeaderBar />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })

    test('the connect wallet button is clicked and the login function is called', async () => {
        (useWalletHook as jest.Mock).mockReturnValue(emptyWallet);
        render(<MemoryRouter><HeaderBar /></MemoryRouter>)

        const button = screen.getByRole('button', { name: /Connect Wallet/i })
        await fireEvent.click(button)
        expect(emptyWallet.login).toHaveBeenCalled();
    })

    test('match snapshot after the wallet address is provided', () => {
        (useWalletHook as jest.Mock).mockReturnValue(wallet);
        const { container } = render(
            <MemoryRouter>
                <HeaderBar />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })

    test('the disconnect button is clicked and the logout and push function is called', async () => {
        (useWalletHook as jest.Mock).mockReturnValue(wallet);
        render(<MemoryRouter><HeaderBar /></MemoryRouter>)

        const button = screen.getByRole('button', { name: /Disconnect/i })
        await fireEvent.click(button)
        expect(wallet.logout).toHaveBeenCalled();
        expect(mockHistoryPush).toHaveBeenCalled();
    })
})
