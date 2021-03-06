<h1 align=center>
<img src="https://user-images.githubusercontent.com/38081852/83580830-6f63e200-a513-11ea-9a27-0a109ec1e4d0.png" />
</h1>
<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
  
  <a href="https://github.com/xXHachimanXx/Ecoleta/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/vitorserrano/ecoleta?color=%237519C1">
  </a>
  <br><br>
</p>

<h3 align=center>
  
  Este é o projeto prático desenvolvido durante a **Next Level Week 1.0** da [Rocketseat][rocketseat] utilizando [TypeScript][typescript_site], [Node][node_site], [React][react_site] e [React Native][react_native_site].
  
</h3>
<br>

## **:question: O QUE É?**
O ♻️Ecoleta é uma aplicação que facilita a busca por pontos de coleta de resíduos recicláveis.

## **:computer: COMO FUNCIONA?**
Através da aplicação **web** os **ponto de coleta** poderão ser cadastrados inserindo os seguintes dados:
<ol>
  <li>Nome</li>
  <li>Email</li>
  <li>Endereço</li>
  <li>Whatsapp</li>
  <li>Imagem do ponto de coleta(opcional)</li>
  <li>Escolher os tipos de itens a serem coletados detre os seguintes:  
    <ul>
      <li>lâmpadas</li>
      <li>pilhas e baterias</li>
      <li>papéis e papelão</li>
      <li>resíduos eletrônicos</li>
      <li>resíduos orgânicos</li>
      <li>óleo de cozinha</li>
    </ul>
  </li>
</ol>

Pelo **aplicativo móvel** os **"coletadores"** podem explorar o **mapa interativo** e procurar por pontos de coleta próximos à ele.
Além disso, o Ecoleta permite que este usuário entre em contato com diretamente com as empresas por **e-mail** ou **Whatsapp**.

## **:rocket: Como utilizar?**
Há um script chamado `exec.sh` para facilitar este processo. Para executá-lo, digite os seguintes comandos:
```sh
# Dar permissão de execução do script
chmod +x exec.sh

# Executar
./exec.sh
```
Tanto a aplicação web quanto a mobile necessitam do servidor backend para funcionar devidamente. Portanto, escolha opção **"Server"** antes de rodar 
o **"Web"** e o **"Mobile"**. 

Também é possível passar a opção desejada diretamente pela linha de comando:
- Web: `$ ./exec.sh web`
- Mobile: `$ ./exec.sh mobile`
- Server: `$ ./exec.sh server`
- Atualizar: `$ ./exec.sh update`

Esta última opção tem a função de atualizar todas as dependências do projeto.

#### OBS.:
Por enquanto será necessário rodar o script novamente para cada opção escolhida pois ainda estamos em construção :construction_worker:.


<!-- links -->
[rocketseat]: https://rocketseat.com.br/
[typescript_site]: https://www.typescriptlang.org/
[node_site]: https://nodejs.org/en/
[react_site]: https://pt-br.reactjs.org/
[react_native_site]: https://reactnative.dev/
[leaflet leaflet_site]: https://leafletjs.com/
