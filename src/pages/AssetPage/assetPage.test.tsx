import AssetPage from './index';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'

jest.mock('../../api/assets-api');

describe('Asset page', () => {
    beforeEach(() => {
        // using 'jest-localstorage-mock' to mock localStorage.
        localStorage.setItem('WALLET_ADDRESS', 'address');
    });

    test('renders cards if request succeeds', async () => {
        // <Link> component does not work without a <Router> component.
        // Using <MemoryRouter> as a  workaround: https://stackoverflow.com/questions/63513697/react-testing-library-invariant-failed-you-should-not-use-route-outside-a-ro

        // getUserAssets()
        render(<MemoryRouter><AssetPage /></MemoryRouter>)
        // Get loading element
        const loadingElement = screen.getByText('Loading...')
        await waitForElementToBeRemoved(loadingElement)
        const assetCardElements = screen.getAllByTestId('assetCard');
        expect(assetCardElements).not.toHaveLength(0);
    })
})
