// Refazendo os códigos para fixação
console.log('** DINDIN ACADEMY **');

let cursos = [{
    id: 1,
    titulo: 'Investimentos para Iniciantes',
    descricao: 'Curso para quem não entende de finanças.',
    professor: 'João',
    listaAulas: []
}, {
    id: 2,
    titulo: 'Investimento para Hackers',
    descricao: 'Curso para quem é mais avançado.',
    professor: 'Jane',
    listaAulas: []
}];

// console.log(cursos[0])
function listaCursos(){

    let htmlCursos = "";

    for (let index = 0; index < cursos.length; index++) {
        
        htmlCursos += `
            <article class = "card">
                <h2>${cursos[index].titulo}</h2>
                <p>${cursos[index].descricao}</p>
                <p>Professor: ${cursos[index].descricao}</p>
            </article>
        `;
    }
    let painelCursos = document.querySelector('.painel-cursos');
    painelCursos.innerHTML = htmlCursos;
}

listaCursos();

// function adicionarAula(idCurso, linkAula) {
//     let cursoEncontrado = cursos.findIndex((curso) => {
//         return curso.id == idCurso
//     })
//     console.log(cursos[cursoEncontrado])
// }
// adicionarAula(2,"http://google.com")

function adicionarAula(idCurso, linkAula) {
    let indexCurso = null; 
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == idCurso) {
            indexCurso = i;
        }
    }
    if (indexCurso != null) {
        cursos[indexCurso].listaAulas.push(linkAula);
        console.log(`Aula adicionada ao curso ${cursos[indexCurso].titulo}!`)
    } else {
        console.log(`Curso não encontrado.`)
    }
        
    
}

// Cadastro de curso
let btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.onclick = function (evento) {
    evento.preventDefault();

    let titulo_input = document.querySelector('#titulo');
    let descricao_input = document.querySelector('#descricao');
    let professor_input = document.querySelector('#professor');

    let novoCurso = {
        id: cursos.length,
        titulo: titulo_input.value,
        descricao: descricao_input.value,
        professor: professor_input.value,
        listaAulas: []
    }
    cursos.push(novoCurso)
    listaCursos();
}

adicionarAula(1,"http://youtube.com")





// Desenvolvido durante a aula Síncrona

// let cursos = [{
//     id: 1,
//     titulo: 'Investimentos para Iniciantes',
//     descricao: 'Esse curso é para quem não tem muitos conhecimentos sobre investimentos',
//     professor: 'Jane Doe',
//     listaAulas: []
// }, {
//     id: 2,
//     titulo: 'Investimentos para Hackers',
//     descricao: 'Esse curso é para quem conhece bastante sobre investimentos',
//     professor: 'Joãozin',
//     listaAulas: []
// }
// ];

// listarCursos();
/*function listarCursos() {
    for (let index = 0; index < cursos.length; index++) {
        console.log(`
        Título: ${cursos[index].titulo}
        Descrição: ${cursos[index].descricao}
        Professor: ${cursos[index].professor}
        Número de aulas: ${cursos[index].listaAulas.length}
        `);
    }
}

// idCurso = número, linkAula = string

// adicionarAula (idCurso, linkAula) {
//    //Find Index retorna posição do array do curso encontrado
//    let cursoEncontrado = cursos.findIndex((curso) => {
//        return curso.id == idCurso
//    })
//    console.log(cursoEncontrado)//////
//}

// adicionarAula(1, "http://google.com");

function adicionarAula(idCurso, linkAula) {
    //Encontrando a posição do curso
    let indexCurso = null;
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == idCurso) {
            indexCurso = i;
        }
    }
    // Adicionando nova aula ao curso selecionado
    cursos[indexCurso].listaAulas.push(linkAula);

    console.log(`Aula adicionada ao curso ${cursos[indexCurso].titulo}`);
}*/

// Desenvolvido durante a aula Síncrona

// function listarCursos() {
//     let htmlCursos = "";
//     //criando lista de cursos em HTML
//     for (let index = 0; index < cursos.length; index++) {
//         // = atribuir novo valor 
//         // += acrescentar novo valor
//         htmlCursos += `
//             <article class="card">
//                 <h2>${cursos[index].titulo}</h2>
//                 <p>${cursos[index].descricao}</p>
//                 <p>Professor: ${cursos[index].professor}</p>
//                 <small>ID do curso: ${cursos[index].id}</small>
//             </article>
//         `;
//     }

//     // selecionando elemento que vai englobar a lista
//     let painelCursos = document.querySelector(".painel-cursos");
//     // inserindo lista de cursos no html
//     painelCursos.innerHTML = htmlCursos;
// }

// function adicionarAula(idCurso, linkAula) {
//     // encontrando posição do curso
//     let indexCurso = null;
//     for (let i = 0; i < cursos.length; i++) {
//         if (cursos[i].id == idCurso) {
//             indexCurso = i;
//         }
//     }
//     // adicionando nova aula ao curso selecionado
//     if (indexCurso != null) {
//         cursos[indexCurso].listaAulas.push(linkAula);
//         console.log(`Aula adicionada ao curso ${cursos[indexCurso].titulo}!`)

//     } else {
//         console.log('Curso não encontrado.')
//     }
// }

// // Cadastro de Curso
// let btnEnviar = document.querySelector('#btnEnviar');

// btnEnviar.onclick = function (evento) {
//     evento.preventDefault();
    
//     // prevenindo comportamento padrão
//     evento.preventDefault();

//     // capturar campos do formulário
//     let titulo_input = document.querySelector('#titulo');
//     let descricao_input = document.querySelector('#descricao');
//     let professor_input = document.querySelector('#professor');

//     //criando o novo curso a partir dos dados do form
//     let novoCurso = {
//         id: cursos.length,
//         titulo: titulo_input.value,
//         descricao: descricao_input.value,
//         professor: professor_input.value,
//         listaAulas: []
//     };

//     // adicionando novo curso na lista
//     cursos.push(novoCurso);
//     // atualizar lista de cursos no HTML
//     listarCursos();
// }

// listarCursos();
