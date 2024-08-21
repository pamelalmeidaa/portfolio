const sobre = document.querySelector("#about");

const formulario = document.querySelector('#formulario');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
  try {
    const dadosPerfil = await fetch(`https://api.github.com/users/pamelalmeidaa`);
    const perfil = await dadosPerfil.json();

    let conteudo = `
          <img src="${perfil.avatar_url}"
          alt="Foto do Perfil do Github - ${perfil.name}">
  
          <article id="sobre-texto"> <!-- Adicione aqui as CLASSES -->
          <h1>Quem sou eu?</h1>
          <p>
              Sou Pamela, uma desenvolvedora Full-Stack apaixonada por transformar ideias em realidade através do código. Com uma formação sólida em Gestão de Tecnologia da Informação e especialização em desenvolvimento web, tenho experiência em diversas tecnologias como JavaScript, React, Node.js e muito mais. Além disso, sou também uma criativa de coração, com habilidades em modelagem e costura, onde trago à vida sonhos costurados à mão. Busco sempre me aperfeiçoar, aplicando as melhores práticas ágeis em meus projetos e colaborando de forma eficaz com equipes multidisciplinares.
          </p>
  
          <div id="sobre_github" class="sobre_github flex"> <!-- Adicione aqui as CLASSES -->
              <a class="botao" target="_blank" href="${perfil.html_url}">Github</a>
              <!-- Adicione aqui as CLASSES -->
              <p>${perfil.followers} Seguidores</p>
              <p>${perfil.public_repos} Repositórios</p>
          </div>
  
          </article>
      `;

    sobre.innerHTML += conteudo;
  } catch (error) {
    console.log(error);
  }
}

formulario.addEventListener('submit', function (event) {

  event.preventDefault();

  const campoNome = document.querySelector('#name');
  const txtNome = document.querySelector('#txtNome');

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = '';
  }

  const campoEmail = document.querySelector('#email');
  const txtEmail = document.querySelector('#txtEmail');

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = 'Digite um E-mail válido.';
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = '';
  }

  const campoSubject = document.querySelector('#subject');
  const txtSubject = document.querySelector('#txtSubject');

  if (campoSubject.value.length < 5) {
    txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
    campoSubject.focus();
    return;
  } else {
    txtSubject.innerHTML = '';
  }

  formulario.submit();

});

getApiGithub();