import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "../App";

describe("Account area feature", () => {
  test("redirects to login page when token is not available on products page", async () => {
    // Mock a scenario where token is not available
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <App />
      </MemoryRouter>
    );

    // Wait for any asynchronous operations to complete
    await waitFor(() => {
      // Check if the navigation to the login page occurred
      expect(screen.getByText("Login")).toBeInTheDocument();
    });
  });

  test("if token is available component should be rendered ", async () => {
    // Mock the fetchData function
    localStorage.setItem("productly", "abcd");

    render(
      <MemoryRouter initialEntries={["/products"]}>
        <App />
      </MemoryRouter>
    );

    // Wait for the data to be loaded
    await waitFor(() => screen.getByText(/Progress Bar/i));
  });
});
