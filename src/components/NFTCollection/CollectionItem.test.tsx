import { render } from '@testing-library/react'
import CollectionItem from './CollectionItem'

const testProps = {
    name: 'collectionName',
    url: 'http.test.com',
    price: 'price',
    orderId: 'orderId',
}

describe('CollectionItem component', () => {
    test('match snapshot', () => {
        const { container } = render(
            <CollectionItem
                name={testProps.name}
                url={testProps.url}
                price={testProps.price}
                orderId={testProps.orderId} />
        );
        expect(container).toMatchSnapshot()
    })
})
