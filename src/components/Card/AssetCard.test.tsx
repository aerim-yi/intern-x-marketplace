import { render } from '@testing-library/react'
import AssetCard from './AssetCard'

const testProps = {
    collectionName: 'collectionName',
    itemName: 'itemName',
    src: 'http.test.com',
}

describe('AssetCard component', () => {
    test.only('match snapshot', () => {
        const { container } = render(
            <AssetCard
                collectionName={testProps.collectionName}
                itemName={testProps.itemName}
                src={testProps.src} />
        );
        expect(container).toMatchSnapshot()
    })
})
