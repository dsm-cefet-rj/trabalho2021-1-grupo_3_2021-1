# language: pt
Funcionalidade: Listagem de Produtos

    Apresenta uma lista de produtos juntamente com seu andamento 
    na unidade selecionada, indice de desempenho de custo (IDC) e prazo (IDP)
    (conforme protótipo lista de produtos). Possibilita o acesso as ações
    de inclusão e alteração de produtos e permite a exclusão de produtos.
    

    Contexto: 
        Dado que temos produtos cadastrados
            | Produto     |  Unidade  |  UnAtual | UnTotal | IDC | IDP |
            | Produto X   |  Semana   |  2       |  4      | 0.8 | 0.9 |
            | Produto Y   |  Mês      |  4       |  6      | 1.3 | 1.0 |
            | Produto Z   |  Semana   |  3       |  10     | 1.0 | 1.0 |

    Cenário: Exibir Listagem de Produtos
        Quando a tela de listagem de produtos é acessada
        Então os produtos são exibidos

    Cenário: Novo produto
        Dado que é exibida a tela de listagem de produtos
        Quando clico no botão novo produto
        Então a tela de cadastramento de novo produto é exibida

    Cenário: Acessar produto
        Dado que é exibida a tela de listagem de produtos
        Quando clico em um produto
        Então a tela do produto é exibida

    Cenário: Excluir produto
        Dado que é exibida a tela de listagem de produtos
        Quando clico no ícone de excluir um produto
           E confirmo a exclusão
        Então que é exibida a tela de listagem de produtos
           E o produto excluído não está nela




