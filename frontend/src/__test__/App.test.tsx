import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Home from "../pages/Home";
import Details from "../pages/Details";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useLocation: () => ({
    state: {
      data: {
        title: "user post",
        body: "content",
      },
    },
  }),
}));

//should render app without fail
test("should render app", () => {
  render(<App />);
});

//unit test for Home page
test("should render Home page", () => {
  render(<Home />);
  const sendBtn = screen.getByText("Send");
  screen.getByLabelText("User ID");
  fireEvent.click(sendBtn);
  screen.getByText("invalid ID!");
  const icon = document.querySelector("svg");
  expect(icon).not.toBeNull();
});

//unit test for Details page
test("should render Details page components", () => {
  render(<Details />);
  const titleCom = screen.getByText("user post");
  expect(titleCom).not.toBeNull();
  expect(screen.getByText("Back to Home"));
  const inputElem = screen.getByText("content");
  expect(inputElem);
});
