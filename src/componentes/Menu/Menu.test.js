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

test("Não deve renderizar o link para Extrato", () => {
    render(<Menu />);
    const linkExtrato = screen.queryByText("Extrato");
    expect(linkExtrato).not.toBeInTheDocument();
});