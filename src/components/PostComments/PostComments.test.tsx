import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente Post', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir a inserção de dois comentários', () => {
        render(<Post />);

        // Inserindo o primeiro comentário
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Primeiro comentário' }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        // Inserindo o segundo comentário
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: { value: 'Segundo comentário' }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        // Valida: verifica se existem dois elementos com o testid "comentario-item"
        expect(screen.getAllByTestId('comentario-item')).toHaveLength(2);
    });
});