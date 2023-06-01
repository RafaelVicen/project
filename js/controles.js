let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("arealista");

function addTarefa() {
  let valorInput = input.value;
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    let novoItem = `<div class="item">
        <div class="item-icone">
          <i class="mdi mdi-circle-outline"></i>
        </div>

        <div class="item-nome">Teste de tarefa</div>

        <div class="item-botao">
          <button class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div> 
      </div>`;
    main.innerHTML += novoItem;
  }
}
