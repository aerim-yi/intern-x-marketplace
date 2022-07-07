import { render, screen, fireEvent } from '@testing-library/react'
import {NavBar} from './navbar'
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom'
// import { wait } from '@testing-library/user-event/dist/utils';

test('renders nav bar marketplace text', () => {
    render(<Router><NavBar /></Router>);
    const linkElement = screen.getByText("Marketplace");
    expect(linkElement).toBeInTheDocument();
  });

test('renders nav bar asset text', async () => {
    render(<Router><NavBar /></Router>);
    const linkElement = screen.getByText("View Assets");
    expect(linkElement).toBeInTheDocument();
});

// test('renders switch in title', async() => {
//     render(<Router><NavBar /></Router>);
//     fireEvent.click(screen.getByText('Connect to Wallet'))
//     wait(1500); 
//     expect(screen.getByText('alert')).toHaveTextContent('Connected to Wallet')
// });
