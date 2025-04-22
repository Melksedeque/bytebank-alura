import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('O componente <Formulario /> deve renderizar um campo de input:', () => {
  test('No documento', () => {
    render(<Formulario />);

    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  test('Com o type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('Que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});
