import { render, fireEvent, screen  } from '@testing-library/react'
import { Link } from '@imtbl/imx-sdk'
import CollectionItem from './CollectionItem'

const testProps = {
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
                name={testProps.name}
                url={testProps.url}
                price={testProps.price}
                orderId={testProps.orderId} />
        );
        expect(container).toMatchSnapshot()
    })

    test('Load placeholder image on error', () => {
        render(
            <CollectionItem
                name={testProps.name}
                url={testProps.url}
                price={testProps.price}
                orderId={testProps.orderId} />
        );
        const image = screen.getByRole('img');
        fireEvent.error(image)
        expect(image).toHaveAttribute('src','placeholderImg.jpg');
    })

    test('buyItem errors correctly', async () => {
        window.open = jest.fn();
        const testing = jest.spyOn(console, "log");
        render(
            <CollectionItem
                name={testProps.name}
                url={testProps.url}
                price={testProps.price}
                orderId={testProps.orderId} />
        );
        let buttonText = screen.getByText("Buy Now");
        await fireEvent.click(buttonText);
        expect(testing).toBeCalledWith("link buy error: Error: Unable to open window");
        expect(testing).toBeCalledTimes(1);

    })



})
