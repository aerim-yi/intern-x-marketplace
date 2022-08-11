import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import CollectionCard from './CollectionCard'
import placeholderImg from '../../asset/placeholderImg.jpg'


const testProps = {
    url: 'http.test.com',
    name: 'collectionName'
}

describe('CollectionCard component', () => {
    test('match snapshot', () => {
        const { container } = render(
            <CollectionCard
                name={testProps.name}
                url={testProps.url} />
        );
        expect(container).toMatchSnapshot()
    })

    test('Load placeholder image on error', () => {
        render(
            <CollectionCard
                name={testProps.name}
                url={testProps.url} />
        );
        const image = screen.getByRole('img');
        fireEvent.error(image)
        expect(image).toHaveAttribute('src','placeholderImg.jpg');
    })
})
