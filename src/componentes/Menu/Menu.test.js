import { render, screen } from "@testing-library/react";
import Menu from "./index";

test("Deve renderizar um link para a página inicial", () => {
    render(<Menu />);
    const linkHome = screen.getByText("Inicial");
    expect(linkHome).toBeInTheDocument();
});

test("Deve renderizar uma lista de links", () => {
    render(<Menu />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
});