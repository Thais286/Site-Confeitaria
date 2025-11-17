let carrinho = [];
let total = 0;

function addCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalEl = document.getElementById("total");

    lista.innerHTML = "";
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });

    totalEl.textContent = total.toFixed(2);
}

function finalizarPedido() {
    const entrega = document.getElementById("tipoEntrega").value;
    const pagamento = document.getElementById("pagamento").value;

    let mensagem = `🧁 *Pedido Glacê Confeitaria* \n\n`;

    carrinho.forEach(item => {
        mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });

    mensagem += `\n*Total:* R$ ${total.toFixed(2)}\n`;
    mensagem += `*Entrega:* ${entrega}\n`;
    mensagem += `*Pagamento:* ${pagamento}\n`;

    const url = `https://wa.me/553187880429?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}