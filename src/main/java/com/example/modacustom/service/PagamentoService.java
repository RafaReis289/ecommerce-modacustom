
package com.example.modacustom.service;

import com.example.modacustom.entity.Pagamento;
import com.example.modacustom.entity.Pedido;
import com.example.modacustom.entity.StatusPagamento;

import com.example.modacustom.repository.PagamentoRepository;
import com.example.modacustom.repository.PedidoRepository;

import com.example.modacustom.utils.PagamentoRequestDTO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PagamentoService {

    private final PagamentoRepository pagamentoRepository;
    private final PedidoRepository pedidoRepository;

    public PagamentoService(PagamentoRepository pagamentoRepository, PedidoRepository pedidoRepository) {
        this.pagamentoRepository = pagamentoRepository;
        this.pedidoRepository = pedidoRepository;
    }

    @Transactional
    public Pagamento pagar(PagamentoRequestDTO dto) {

        Optional<Pedido> resultado = pedidoRepository.findById(dto.getPedidoId());

        if (resultado.isEmpty()) {
            throw new RuntimeException("Pedido não encontrado.");
        }

        Pedido pedido = resultado.get();
        Pagamento pagamento = new Pagamento();
        pagamento.setPedido(pedido);
        pagamento.setStatus(StatusPagamento.PENDENTE);
        pagamento.setFormaPagamento(dto.getFormaPagamento());
        return pagamentoRepository.save(pagamento);
    }
    public List<Pagamento> listarTodos() {
        return pagamentoRepository.findAll();
    }
    @Transactional
    public Pagamento pagar(Long pedidoId, String formaPagamento) {
        Optional<Pedido> resultado = pedidoRepository.findById(pedidoId);
        if (resultado.isEmpty()) { 
            throw new RuntimeException("Pedido não encontrado.");
        }

        Pedido pedido = resultado.get();
        Pagamento pagamento = new Pagamento();
        pagamento.setPedido(pedido);
        pagamento.setFormaPagamento(formaPagamento);
        pagamento.setStatus(StatusPagamento.PENDENTE);
        return pagamentoRepository.save(pagamento);
    }
}
