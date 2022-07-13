import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { CollectionsPage } from './index'
import { getCollections } from '../../api/collections-api';

const collectionData = {
    result: [{
        name: 'name',
        collection_image_url: 'url'
    }]
}

jest.mock('../../api/collections-api')

describe('Collection page', () => {
    beforeEach(() => {
        (getCollections as jest.Mock).mockResolvedValue(collectionData);
    });

    test('renders cards if request succeeds', async () => {
        render(<MemoryRouter><CollectionsPage /></MemoryRouter>)

        // Get loading element
        const loadingElement = screen.getByText('Loading...')
        await waitForElementToBeRemoved(loadingElement)

        // Get test ids
        const collectionCardElements = screen.getAllByTestId('CollectionCard');
        const collectionCardName = screen.getByTestId('CollectionCard_Name');
        const collectionCardImg = screen.getByTestId('CollectionCard__Img');

        expect(getCollections).toHaveBeenCalled()
        expect(collectionCardElements).toHaveLength(1);
        expect(collectionCardName).toHaveTextContent(collectionData.result[0].name);
        expect(collectionCardImg).toHaveAttribute('src', collectionData.result[0].collection_image_url);
    })
})
