import { render} from '@testing-library/react'
import HeaderBar from './HeaderBar'

describe('NavBar component', () => {
    test('match snapshot', () => {
        const { container } = render(<HeaderBar />);
        expect(container).toMatchSnapshot()
    })
})