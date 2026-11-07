
package com.example.modacustom.service;

import com.example.modacustom.entity.Pedido;
import com.example.modacustom.entity.ItemPedido;
import com.example.modacustom.entity.Produto;
import com.example.modacustom.entity.StatusPedido;
import com.example.modacustom.repository.PedidoRepository;
import com.example.modacustom.repository.ClienteRepository;
import com.example.modacustom.repository.ProdutoRepository;
import com.example.modacustom.utils.PersonalizacaoDTO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class CarrinhoService {

    private final PedidoRepository pedidoRepository;
    private final ClienteRepository clienteRepository;
    private final ProdutoRepository produtoRepository;
    private Pedido pedido;

    public CarrinhoService(PedidoRepository pedidoRepository, ClienteRepository clienteRepository,ProdutoRepository produtoRepository) {
        this.pedidoRepository = pedidoRepository;
        this.clienteRepository = clienteRepository;
        this.produtoRepository = produtoRepository;
    }

    private Pedido obterCarrinho(Long clienteId) {
        if (!clienteRepository.existsById(clienteId)) {
            throw new IllegalArgumentException("Cliente não encontrado");
        }

        Optional<Pedido> resultado = pedidoRepository.findFirstByClienteIdAndStatusOrderByIdDesc(clienteId, StatusPedido.CARRINHO);
        if (resultado.isEmpty()) {
            throw new IllegalArgumentException("Carrinho vazio");
        }return resultado.get();
    }

    @Transactional
    public Pedido alterarQuantidade(Long clienteId, Long itemId, Integer quantidade) {
        if (quantidade == null || quantidade < 1) {
            throw new IllegalArgumentException("Quantidade deve ser maior que zero");
        }

        Pedido pedido = obterCarrinho(clienteId);
        ItemPedido itemEncontrado = null;

        for (ItemPedido item : pedido.getItens()) {
            if (item.getId() != null && item.getId().equals(itemId)) {
                itemEncontrado = item;
                break;
            }
        }

        if (itemEncontrado == null) {
            throw new IllegalArgumentException("Item não encontrado");
        }

        Produto produto = itemEncontrado.getProduto();

        if (produto.getEstoque() == null || quantidade > produto.getEstoque()) {
            throw new IllegalArgumentException("Estoque insuficiente");
        }

        itemEncontrado.setQuantidade(quantidade);
        recalcularTotal(pedido);
        return pedidoRepository.save(pedido);
    }

    @Transactional
    public Pedido removerItem(Long clienteId, Long itemId) {
        Pedido pedido = obterCarrinho(clienteId);
        ItemPedido itemEncontrado = null;
        for (ItemPedido item : pedido.getItens()) {
            if (item.getId() != null && item.getId().equals(itemId)) {
                itemEncontrado = item;
                break;
            }
        }if (itemEncontrado == null) {
            throw new IllegalArgumentException("Item não encontrado");
        }
        pedido.getItens().remove(itemEncontrado);
        recalcularTotal(pedido);
        return pedidoRepository.save(pedido);
    }
    @Transactional
    public Pedido adicionarItem(Long clienteId,Long produtoId,Integer quantidade,PersonalizacaoDTO personalizacao) {

        if (quantidade == null || quantidade < 1) {
            throw new IllegalArgumentException("Quantidade inválida");
        }if (!clienteRepository.existsById(clienteId)) {
            throw new IllegalArgumentException("Cliente não encontrado");
        } 
        Optional<Produto> resultadoProduto =
                produtoRepository.findById(produtoId);

        if (resultadoProduto.isEmpty()) {
            throw new IllegalArgumentException("Produto não encontrado");
        }

        Produto produto = resultadoProduto.get();

    
        if (produto.isPermitePersonalizacao() && personalizacao == null) {
            throw new IllegalArgumentException("Informe a personalização");
        }

        if (!produto.isPermitePersonalizacao() && personalizacao != null) {
            throw new IllegalArgumentException("Produto não permite personalização");
        }

        Optional<Pedido> resultadoPedido = pedidoRepository.findFirstByClienteIdAndStatusOrderByIdDesc(clienteId, StatusPedido.CARRINHO);

       

        if (resultadoPedido.isPresent()) {
            pedido = resultadoPedido.get();
        } else {
            pedido = new Pedido();

            pedido.setCliente(
                    clienteRepository.findById(clienteId).get());

            pedido.setStatus(StatusPedido.CARRINHO);
            pedido.setValorTotal(BigDecimal.ZERO);

            pedido = pedidoRepository.save(pedido);
        }

        ItemPedido item = new ItemPedido();

        item.setPedido(pedido);
        item.setProduto(produto);
        item.setQuantidade(quantidade);
        item.setPrecoUnitario(produto.getPreco());

        if (personalizacao != null) {
            item.setTamanhoEscolhido(personalizacao.getTamanho());
            item.setCorEscolhida(personalizacao.getCor());
            item.setPersonalizacao(personalizacao.getDescricaoEstampa());
            item.setPosicaoEstampa(personalizacao.getPosicaoEstampa());
            item.setImagemEstampaUrl(personalizacao.getImagemEstampaUrl());
        }

        pedido.getItens().add(item);
        recalcularTotal(pedido);
        return pedidoRepository.save(pedido);
    }

    public Pedido visualizar(Long clienteId) {
        return obterCarrinho(clienteId);
    }

    private void recalcularTotal(Pedido pedido) {
        BigDecimal total = BigDecimal.ZERO;

        for (ItemPedido item : pedido.getItens()) {
            BigDecimal subtotal = item.getPrecoUnitario().multiply(BigDecimal.valueOf(item.getQuantidade()));
            total = total.add(subtotal);
        } pedido.setValorTotal(total);
    }
    @Transactional
    public Pedido adicionarItemPersonalizado(
            Long clienteId,
            Long produtoId,
            Integer quantidade,
            PersonalizacaoDTO personalizacao) {

        if (quantidade == null || quantidade <= 0) {
            throw new IllegalArgumentException(
                    "A quantidade deve ser maior que zero.");
        }

        return adicionarItem(
                clienteId,
                produtoId,
                quantidade,
                personalizacao);
    }
}
