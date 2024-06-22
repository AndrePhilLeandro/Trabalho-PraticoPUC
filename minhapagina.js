// Carrega dados do usuário principal
fetch('https://api.github.com/users/AndrePhilLeandro')
.then(res => res.json())
.then(data => {
    document.getElementById('Name').innerHTML = data.name;
    document.getElementById('Biografia').innerHTML = data.bio || 'Sem biografia disponível';
    document.getElementById('Local').innerHTML = data.location || 'Localização não especificada';
    document.getElementById('Quant').innerHTML = data.public_repos;
});

// Carrega número de seguidores
fetch('https://api.github.com/users/AndrePhilLeandro/followers')
.then(res => res.json())
.then(data => {
    document.getElementById('Friend').innerHTML = data.length; // Mostra o número de seguidores
});

// Carrega lista de repositórios
fetch('https://api.github.com/users/AndrePhilLeandro/repos')
.then(res => res.json())
.then(data => {
    let str = '';
    data.forEach(repositorio => {
        str += `<div class="col">
                  <a href="${repositorio.html_url}" class="text-decoration-none" target="_blank">
                    <div class="card h-100">
                      <div class="card-body">
                        <h5 class="card-title">${repositorio.name.split('-').join('')}</h5>
                        <p class="card-text">${repositorio.description || 'Sem descrição.'}</p>
                      </div>
                      <div class="container-fluid pb-3">
                        <div class="row text-center">
                          <div class="col">
                            <i class="bi bi-eye fs-3"></i><span class="fs-4"> ${repositorio.watchers_count}</span>
                          </div>
                          <div class="col">
                            <i class="bi bi-star fs-3"></i><span class="fs-4"> ${repositorio.stargazers_count}</span>
                          </div>
                          <div class="col">
                            <i class="bi bi-copy"></i><span class="fs-4"> ${repositorio.forks_count}</span>
                          </div>
                        </div>
                      </div>
                      <div class="card-footer">
                         <small class="text-muted">Última atualização: ${new Date(repositorio.updated_at).toLocaleDateString()}</small>
                      </div>
                    </div>
                  </a>
                </div>`;
    });
    document.getElementById('repositorios').innerHTML = str;
});


// Carrega lista de colegas de trabalho (seguidores)
fetch('https://api.github.com/users/AndrePhilLeandro/followers')
.then(res => res.json())
.then(data => {
    let colegas = '';
    data.forEach(colega => {
        colegas += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${colega.avatar_url}" class="card-img-top" alt="${colega.login}">
                <div class="card-body">
                    <h5 class="card-title">${colega.login}</h5>
                    <a href="${colega.html_url}" class="btn btn-primary" target="_blank">Visitar perfil</a>
                </div>
            </div>
        </div>`;
    });
    document.getElementById('colegas').innerHTML = colegas;
});
