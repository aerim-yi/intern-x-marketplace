import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import CollectionPage from './index'

describe('Collection page', () => {
    test('renders cards if request succeeds', async () => {
        // <Link> componeent does not work without a <Router> component.
        // Using <MemoryRouter> as a  workaround: https://stackoverflow.com/questions/63513697/react-testing-library-invariant-failed-you-should-not-use-route-outside-a-ro
        render(<MemoryRouter><CollectionPage /></MemoryRouter>)

        // Get loading element
        const loadingElement = screen.getByText('Loading...')
        await waitForElementToBeRemoved(loadingElement)
        const collectionCardElements = screen.getAllByTestId('collectionCard');
        expect(collectionCardElements).not.toHaveLength(0);
    })
})
