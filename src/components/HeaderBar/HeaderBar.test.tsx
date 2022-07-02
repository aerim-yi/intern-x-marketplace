import { render, screen } from '@testing-library/react'
import HeaderBar from './HeaderBar'

describe('NavBar component', () => {
    test('renders Intern X as a text', () => {
        render(<HeaderBar />);
        const navBarBrandElement = screen.getByText('Intern X Marketplace');
        expect(navBarBrandElement).toBeInTheDocument()
    })
})