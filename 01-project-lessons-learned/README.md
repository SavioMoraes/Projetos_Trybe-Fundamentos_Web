# Project Lessons Learned

## PROJETO DESENVOLVIDO DURANTE O CURSO DA TRYBE!!

## Habilidades

Neste projeto, você será capaz de:

* Utiizar _HTML_ para construir páginas WEB.
* Utilizar _HTML_ semântico para tornar sua página mais acessível e melhor ranqueada.
* Utilizar _CSS_ para adicionar estilo e posicionar elementos.

## Proposta: 

Desenvolver um site com elementos posicionados e estilizados, com semântica apropriada para que seja acessível e melhor rankeado!

# Requisitos:

1. Adicione uma cor de fundo específica para a página
Possuir cor de fundo: rgb(253, 251, 251)
O que será verificado:  Possuir cor de fundo: rgb(253, 251, 251);

R: Resolvido adicionando o background-color: rgb(253, 251, 251) no body do arquivo style.css

------------------------------------------------------------------------

2. Adicione uma barra superior com um título
A barra deve possuir o ID "cabecalho" e deve ser fixa no topo da página com a propriedade top tendo 0. O título deve estar dentro da barra e ser um elemento h1 com ID "titulo".
O que será verificado:
A barra possui o ID "cabecalho"
A barra superior deve ser fixa no topo da página, com a propriedade top tendo 0px
O título deve estar dentro da barra e possuir o ID "titulo", além de ser uma tag "h1"

R: Resolvido adicionando no index.html, no body, a tag header com o id cabecalho e como filha a tag h1 com id titulo e com o texto (innerText/innerHTML - JS): Lições aprendidas - Trybe! e no arquivo style.css inserindo o id (#) cabecalho com position fixed e top 0;

-------------------------------------------------------------------------

3. Adicione uma foto sua à página
A foto deve ser inserida utilizando uma tag img com o ID "minha_foto".
O que será verificado:
A foto deve ser inserida utilizando uma tag img com o ID "minha_foto"

R: Resolvido adicionando uma imagem na pagina, no arquivo index.html na tag img, filha de main, com src setando a pasta/nome-do-arquivo.jpg e setando em alt a descrição da imagem e com id minha_foto;

-------------------------------------------------------------------------

4. Adicione uma lista de lições aprendidas à página
A lista deve possuir 10 itens, ser numerada e possuir o ID "licoes_aprendidas".
O que será verificado:
A lista deve ser numerada e possuir o ID "licoes_aprendidas"
A lista deve possuir 10 itens

R: Resolvido adicionando no index.html uma lista não ordenada (ul) de id licoes_a_aprender como filha de uma section, tendo como filhas 10 li's com as lições a aprender na Trybe.

-------------------------------------------------------------------------

5. Crie uma lista de lições que ainda deseja aprender para a página
A lista deve possuir 10 itens, não ser numerada e possuir o ID "licoes_a_aprender".
O que será verificado:
A lista não deve ser numerada e deve possuir o ID "licoes_a_aprender"
A lista deve possuir 10 itens

R: Resolvido adicionando no index.html uma lista ordenada (ol) de id licoes_aprendidas como filha de uma section, tendo como filhas 10 li's com as lições já aprendidas na Trybe.

-------------------------------------------------------------------------

6. Adicione um rodapé para a página
O rodapé deve utilizar a tag footer e possuir o ID "rodape".
O que será verificado:
O rodapé deve possuir o ID "rodape"

R: resolvido colocando no final do arquivo index.html a tag footer com o id rodape.

-------------------------------------------------------------------------

7. Insira pelo menos um link externo na página
A configuração desse link deve ser feita para abrir em uma nova aba do navegador
O que será verificado:
A configuração desse link deve ser feita para abrir em uma nova aba do navegador

R: Resolvi este requisito criando uma section que tem como filha uma tag a com href setando para o link da página a w3schools.
--> Também comecei o desenvolvimento do requisito 8, criando uma section que tem uma article como fiha e uma tag h2 e três tags p como netas criando o artigo pedido do requisito 8.

-------------------------------------------------------------------------

8. Crie um artigo sobre seu aprendizado
O artigo deverá possuir mais de 300 caracteres e menos de 600, além disto deve possuir a tag article.
O que será verificado:
A tag article devem ser utilizadas
O artigo deve ter mais de 300 letras e menos de 600

R : Para resolver esse requisito já iniciado na resolução do requisito 7, tive que diminuir e adaptar a quantidade de caracteres de acordo com o pedido no requisito e com o clinter...;

-------------------------------------------------------------------------

9. Crie uma seção que conta uma passagem sobre seu aprendizado
A seção deverá possuir mais de 100 caracteres e menos de 300, além disto deve possuir a tag aside.
O que será verificado: 
A tag aside deve ser utilizada
A seção deve ter mais que 100 letras e menos que 300

R: Resolvido, criando no index.html uma section com uma filha aside e com um h4 e um p como netos.

-------------------------------------------------------------------------

10. Aplique elementos HTML de acordo com o sentido e propósito de cada um deles
Para tornar o seu site mais acessível e melhorar seu ranqueamento em mecanismos de busca na Web, sua página deve conter os seguintes elementos: article, header, nav, section, aside e footer.
O que será verificado:
Validar se a página possui um elemento "article"
Validar se a página possui um elemento "header"
Validar se a página possui um elemento "nav"
Validar se a página possui um elemento "section"
Validar se a página possui um elemento "aside"
Validar se a página possui um elemento "footer"

R:  Resolvido criando as tags mencionadas nos requisitos anteriores e depois acrecentando a tag nav;

---------------------------------------------------------------------

-------------------------------------------------------------------------

--> BÔNUS <--

-------------------------------------------------------------------------

11.  Adicione uma tabela à página
O que será verificado:
A página deve possuir uma tabela

R: Resolvido adicionando uma tabala no index.html dentro de uma section, com título (tag caption) e tr's para indicar os blocos e td's para indicar se concluídos ou não;

-------------------------------------------------------------------------

12. Utilize o Box model
Altere margin, padding e border dos elementos para ver, na prática, como esses atributos influenciam e melhoram a visualização dos componentes.
O que será verificado:
Altere margin, padding e border dos elementos para ver, na prática, como esses atributos influenciam e melhoram a visualização dos componentes

R: Resolvido alterando e adicionando estilização em margin, padding, border etc em style.css;

-------------------------------------------------------------------------

13. Altere atributos relacionados as fontes
Modifique o estilo da sua tipografia alterando o tamanho de letra, a cor, o espaçamento entre as linhas e a font-family.
O que será verificado:
Altere o tamanho da letra
Altere a cor da letra
Altere o espaçamento entre as linhas
Altere o font-family

R: Este requisito foi resolvido junto com o anterior na estilização feita em style.css, com alterações na color da letra, em font-size para alterar o tamanho, letter-sppacing para aumentar o espaçamento entre as linhas e alterando a font-family;

-------------------------------------------------------------------------

14. Posicione o seu artigo e a seção sobre aprendizados um ao lado do outro
Adicione ao elemento posicionado no lado esquerdo a classe "lado-esquerdo" e ao elemento posicionado no lado direito a classe "lado-direito"
O que será verificado:
Utilizar a classe "lado-esquerdo"
Utilizar a classe "lado-direito"
Verificar se os elementos com as classes lado-direito e lado-esquerdo estão posicionados corretamente

R: Este requisito começou a ser resolucionado juntocom o 12 e o 13 setando as classes lists, lado-direito e lado esquerdo onde os dois últimos foram posicionados no lado esquerdo e direito com float: left e right. Depois foi testado com display: inline-block. Foram setadas outras alterações como passar o display como inline, e enfim foi corrigido, substituindo o # pelo . , pois era uma classe e não um id. (Isso emstyle.css);

-------------------------------------------------------------------------

OBS: Foram feitas algumas adaptações e estilização para tornar o design mais agradável. Não responsivo e utilizando o tamanho de tela (resolução)recomendado de 1366 X 768.
