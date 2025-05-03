# Bytebank - Alura

Bytebank é uma aplicação web desenvolvida em React.JS, criada a partir do [Create React App](https://github.com/facebook/create-react-app). Este projeto demonstra a implementação de funcionalidades bancárias essenciais, proporcionando uma prática valiosa em desenvolvimento front-end com React.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada automaticamente quando você fizer alterações no código.\
Erros de lint também serão exibidos no console.

### `npm test`

Executa os testes no modo interativo de observação (watch mode).\
Os testes são configurados para garantir a qualidade e a funcionalidade do código.

#### Estrutura dos Testes

- Os testes estão localizados na pasta `src/__tests__/` ou próximos aos componentes que testam.
- Utilizamos a biblioteca [Jest](https://jestjs.io/) para executar os testes.
- Para testes de componentes React, utilizamos [React Testing Library](https://testing-library.com/).

#### Como Executar os Testes

1. Certifique-se de que todas as dependências estão instaladas com `npm install`.
2. Execute `npm test` para iniciar o modo interativo.
3. Para rodar um teste específico, pressione a tecla `p` e digite o nome do arquivo de teste.
4. Para sair do modo interativo, pressione `q`.

#### Criando Novos Testes

1. Crie um arquivo com o sufixo `.test.js` próximo ao componente ou na pasta `__tests__`.
2. Utilize os métodos da React Testing Library para renderizar componentes e verificar comportamentos.
3. Exemplo básico de teste:

```javascript
// Exemplo de teste básico
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
```bash
npm run build
```
Cria o aplicativo para produção na pasta build.

Ele empacota corretamente o React no modo de produção e otimiza o build para o melhor desempenho.

Os arquivos são minificados e os nomes de arquivos incluem hashes.

Seu aplicativo está pronto para ser implantado!
```bash
npm run eject
```
**Nota: esta é uma operação irreversível. Uma vez que você eject, não pode voltar atrás!**

Se você não estiver satisfeito com as configurações padrão, você pode usar eject para ter controle total sobre as configurações.

## Saiba Mais

Você pode aprender mais na [documentação do Create React App](https://create-react-app.dev/docs/getting-started/).

Para aprender React, confira a [documentação do React](https://react.dev/).

## Testes e Qualidade de Código

Manter a qualidade do código é essencial para o sucesso do projeto. Certifique-se de:

- Escrever testes para novos componentes e funcionalidades.
- Executar os testes regularmente para evitar regressões.
- Utilizar ferramentas de lint para manter a consistência do código.

## Contribuições

Contribuições são bem-vindas! Certifique-se de seguir as diretrizes do projeto e incluir testes para qualquer nova funcionalidade ou correção de bug.
