import React from "react";
import { render } from "@testing-library/react";
import SmurfProfile from "./smurfProfile";

test("Test my smurf profile component", () => {
  const { queryByText, getByText } = render(
    <SmurfProfile smurf={{ name: "Strong", age: 30, height: "5cm", id: 5 }} />
  );

  expect(getByText(/strong/i)).toBeInTheDocument();
  expect(getByText(/30/i)).toBeInTheDocument();
  expect(getByText(/5cm/i)).toBeInTheDocument();
  expect(queryByText(/50/i)).not.toBeInTheDocument();
});
