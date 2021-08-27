import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renderiza a app', () => {
  const { getByText } = render(<App />);
  const labelElement = getByText(/Listagem de Produtos/i);
  expect(labelElement).toBeInTheDocument();
});
