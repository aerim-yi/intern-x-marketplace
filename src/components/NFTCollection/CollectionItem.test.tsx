import { render, fireEvent, screen  } from '@testing-library/react'
import { Link } from '@imtbl/imx-sdk'
import CollectionItem from './CollectionItem'

const collectionItemProps = {
    name: 'collectionName',
    url: 'http.test.com',
    price: 'price',
    orderId: 'orderId',
}

const linkAddress = 'https://link.ropsten.x.immutable.com';
const link = new Link(linkAddress);

describe('CollectionItem component', () => {
    test('match snapshot', () => {
        const { container } = render(
            <CollectionItem
                name={collectionItemProps.name}
                url={collectionItemProps.url}
                price={collectionItemProps.price}
                orderId={collectionItemProps.orderId} />
        );
        expect(container).toMatchSnapshot()
    })

    test('load placeholder image on error', () => {
        render(
            <CollectionItem
                name={collectionItemProps.name}
                url={collectionItemProps.url}
                price={collectionItemProps.price}
                orderId={collectionItemProps.orderId} />
        );
        const image = screen.getByRole('img');
        fireEvent.error(image)
        expect(image).toHaveAttribute('src','placeholderImg.jpg');
    })

    test('trigger console log if buyItem times out', async () => {
        window.open = jest.fn();
        const testing = jest.spyOn(console, "log");
        render(
            <CollectionItem
                name={collectionItemProps.name}
                url={collectionItemProps.url}
                price={collectionItemProps.price}
                orderId={collectionItemProps.orderId} />
        );
        let buttonText = screen.getByText("Buy Now");
        await fireEvent.click(buttonText);
        expect(testing).toBeCalledWith("link buy error: Error: Unable to open window");
        expect(testing).toBeCalledTimes(1);

    })
})
