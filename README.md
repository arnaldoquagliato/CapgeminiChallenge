# CapgeminiChallenge



## Introdução ##
Com a intenção de não so trazer o script e tornar essa seleção mais divertida tambem para as pessoas que estão selecionando eu criei um app baseado no 
que foi requerido a qual eu estarei gerando o APK para android (A qual eu espero que meu corretor tenha android, acabei não gerando para IOS por nao ter 
como testar no mesmo). 

1. Para executar deverá baixar o apk e instalar no celular, com a intenção de facilitar devo enviar o apk por email.

Para a parte 1.
1. Bastar digitar o valor que ele vai investir e ele renderizar na lista a solução requerida.

Para a parte 2. 
2. No Cabeçalho tem um "Adicionar +" ao clicar ele vai mostrar um cadastro com as informações requeridas e semelhante ao passado vai mostrar as informações do
anúncio e ao clicar nele vai mostrar as informações geradas.


## Documentação Arquitetura ##
### 1. Assests: ###
Local onde fica salvo as fontes utilizadas mas poderia ter as imagens e paleta de cores utilizadas no projeto.

### 2. Componenetes: ###
2.1 ListaParteDois, onde ficaria a logica para renderizar a lista
2.2 ModalForm, Formulario para cadastro de anúncio

### 3. Hooks: ###
Com o objetivo de separa a lógica para manutenção de estados nesta pasta ficam os hooks customizados a qual irao tratar as informações que irão renderizar 
em "pages".

### 4. Pages: ###
Nessa pasta ficam as telas que irão aparecer.

#### 4.1 Welcome: ####
Tela inicial, dando acesso ao primeiro e segundo desafio. Ao chegar nessa tela voce pode ir para Calculadora ou Cadastrar Anúncio.
Calculadora corresponde a Parte 1.
Cadastrar Anúncio corresponde a Parte 2.

#### 4.2 ParteUm: ####
A baixo da mensagem "Quanto vamos investir hoje?" deverá ser digitado um valor ao clicar no botão de ckeck ira retornar uma lista 

#### 4.3 ParteDois: ####
Ao clicar no botão do cabeçalho "Adicionar +" iria mostrar um formulario ao qual ao ser preenchido iria mostrar os dados requeridos pela parte dois.
Porém não foi possivel concluir essa parte da atividade.


### 5 Utils: ###
Onde fica a lógica de fato, onde é feito os tratamentos.

