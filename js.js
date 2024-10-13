document.getElementById('adicionar_cabeçalho').addEventListener('click', function() {
    const cliente = document.getElementById('cliente').value;
    const validade = document.getElementById('validade_orçamento').value;
    const data = document.getElementById('data').value;
    const vendedor = document.getElementById('vendedor').value;
    const div = document.createElement('div');
    div.classList.add('historico-item');
    div.innerHTML = `
        <p>Cliente: ${cliente}</p>
        <p>Validade: ${validade}</p>
        <p>Data: ${data}</p>
        <p>Vendedor: ${vendedor}</p>
        <button class="excluir">Excluir</button>
    `;
    document.getElementById('historico').appendChild(div);
    document.getElementById('cliente').value = '';
    document.getElementById('validade_orçamento').value = '';
    document.getElementById('data').value = '';
    document.getElementById('vendedor').value = '';
    div.querySelector('.excluir').addEventListener('click', function() {
        div.remove();
    });
});

let valorTotal = 0;
let valorDevedor = 0;

document.getElementById('adicionar').addEventListener('click', function() {
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const material = document.getElementById('material').value;
    const precoUnitario = parseFloat(document.getElementById('preço_unitario').value);
    const valorPago = parseFloat(document.getElementById('valor_pago').value);
    const valorItem = quantidade * precoUnitario;
    valorTotal += valorItem;
    valorDevedor += valorItem - valorPago;
    const div = document.createElement('div');
    div.classList.add('historico-item');
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.marginBottom = '10px';
    div.innerHTML = `
        <div>
            <p>Quantidade: ${quantidade}</p>
            <p>Material: ${material}</p>
        </div>
        <div style="margin-left: 100px;">
            <p>Preço Unitário: ${precoUnitario}</p>
            <p>Valor Pago: ${valorPago}</p>
        </div>
        <button class="excluir">Excluir</button>
    `;
    document.getElementById('historico').appendChild(div);
    document.getElementById('valor_total').innerText = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
    document.getElementById('valor_devedor').innerText = `Valor pendente : R$ ${valorDevedor.toFixed(2)}`;
    document.getElementById('quantidade').value = '';
    document.getElementById('material').value = '';
    document.getElementById('preço_unitario').value = '';
    document.getElementById('valor_pago').value = '';
    div.querySelector('.excluir').addEventListener('click', function() {
        
        valorDevedor -= valorPago - alorTotal ;
        document.getElementById('valor_total').innerText = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
        document.getElementById('valor_devedor').innerText = `Valor pendente : R$ ${valorDevedor.toFixed(2)}`;
        div.remove();
    });
});

// Adicionar função de imprimir
document.getElementById('imprimir').addEventListener('click', function() {
    window.print();
});
