/*document.querySelector = seleciona e retorna no documento a classe CSS especificada
  document.querySelectorAll = seleciona e retorna no documento TODAS os elementos que contenham as classes especificadas

  const =  const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída. */

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {

    /* beleza, o que vai acontecer aqui é o seguinte
estou adicionando a classe "about" um evento que
ao click do mouse nos botões irá ativar a função
que coloca um alvo no id. dataset.id significa data-id
ou seja, ele estará procurando os id's q preciso
que estão localizados nos botões do about us */

  const id = e.target.dataset.id;
  if (id) { //se o id existe, ele vai fazer isso ai 
   
    // remove o "selecionado" dos outros botões
    btns.forEach(function (btn) {
      btn.classList.remove("active");
       //adiciona o active no botão que eu cliquei
    e.target.classList.add("active");
    });
  
    // esconde os outros articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
    //ativa os paragrafos inseridos nos outros botões
  }
});