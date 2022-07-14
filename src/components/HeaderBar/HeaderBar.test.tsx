import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { HeaderBar } from './HeaderBar'

describe('HeaderBar component', () => {
    test('match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <HeaderBar login={() => jest.fn()} logout={() => jest.fn()} walletAddress={'djhjhsa'} />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })
})
