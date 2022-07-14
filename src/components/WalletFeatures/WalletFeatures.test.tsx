import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import WalletFeatures from "./WalletFeatures";
import "@testing-library/jest-dom";

test("renders nav bar marketplace text", () => {
  render(
    <Router>
      <WalletFeatures />
    </Router>
  );
  const linkElement = screen.getByText("Marketplace");
  expect(linkElement).toBeInTheDocument();
});

test("renders nav bar asset text", async () => {
  render(
    <Router>
      <WalletFeatures />
    </Router>
  );
  const linkElement = screen.getByText("View Assets");
  expect(linkElement).toBeInTheDocument();
});
