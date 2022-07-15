import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { HeaderBar } from './HeaderBar'

describe('HeaderBar component', () => {
    test('match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <HeaderBar />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })
})
