import { AssetPage } from './index';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { getUserAssets } from '../../api/assets-api';
import { useWalletHook } from '../../components/NavBar/useWallethook';

const oneItemAssetData = {
    result: [{
        image_url: 'img',
        collection: {
            name: 'colllectionName'
        },
        name: 'testname',
    }]
};

const emptyImgAssetData = {
    result: [{
        image_url: '',
        collection: {
            name: 'colllectionName'
        },
        name: 'testname',
    }]
};

const noAssetsData = {
    result: []
};

jest.mock('../../api/assets-api');
jest.mock('../../components/NavBar/useWallethook')

describe('Asset page', () => {
    describe('when the wallet information exists', () => {
        const wallet = {
            walletInfo: {
                address: "0xe3ece548F1DD4B1536Eb6eE188fE35350bc1aa1a"
            }
        }

        beforeEach(() => {
            (useWalletHook as jest.Mock).mockReturnValue(wallet);
        })

        test('renders cards if request succeeds', async () => {
            (getUserAssets as jest.Mock).mockResolvedValue(oneItemAssetData);
            render(<MemoryRouter><AssetPage /></MemoryRouter>)

            // Get loading element
            const loadingElement = screen.getByText('Loading...')
            await waitForElementToBeRemoved(loadingElement)

            // Get test ids
            const assetCardElements = screen.getAllByTestId('AssetCard');
            const assetCardName = screen.getByTestId('AssetCard_Name');
            const assetCardCollectionName = screen.getByTestId('AssetCard_CollectionName');

            expect(getUserAssets).toHaveBeenCalled()
            expect(assetCardElements).toHaveLength(1);
            expect(assetCardName).toHaveTextContent(oneItemAssetData.result[0].name);
            expect(assetCardCollectionName).toHaveTextContent(oneItemAssetData.result[0].collection.name);
        })

        test('renders placehoder image if img_url is not available', async () => {

            (getUserAssets as jest.Mock).mockResolvedValue(emptyImgAssetData);
            render(<MemoryRouter><AssetPage /></MemoryRouter>)

            // Get loading element
            const loadingElement = screen.getByText('Loading...')
            await waitForElementToBeRemoved(loadingElement)

            const assetCard_Img = screen.getByTestId('AssetCard_Img');
            expect(assetCard_Img).toHaveAttribute('src', 'placeholderImg.jpg');
        })

        test('renders "No assets to show" when there is no asset available', async () => {

            (getUserAssets as jest.Mock).mockResolvedValue(noAssetsData);
            render(<MemoryRouter><AssetPage /></MemoryRouter>)

            // Get loading element
            const loadingElement = screen.getByText('Loading...')
            await waitForElementToBeRemoved(loadingElement)

            const noAssetElement = screen.getByText("No assets to show");
            expect(noAssetElement).toBeInTheDocument();
        })
    })

    describe('when the wallet information does not exist', () => {
        const wallet = {
            walletInfo: {
                address: ""
            }
        };
        (useWalletHook as jest.Mock).mockReturnValue(wallet);

        test('renders "Connect the wallet first!"', async () => {
            render(<MemoryRouter><AssetPage /></MemoryRouter>)

            const noWalletElement = screen.getByText("Connect the wallet first!");
            expect(noWalletElement).toBeInTheDocument();
        })
    })
})
