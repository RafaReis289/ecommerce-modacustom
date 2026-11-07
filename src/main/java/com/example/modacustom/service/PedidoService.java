
package com.example.modacustom.service;

import com.example.modacustom.entity.Pedido;
import com.example.modacustom.entity.StatusPedido;
import com.example.modacustom.repository.PedidoRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;

    public PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

     public List<Pedido> listarPorCliente(Long clienteId) {
        List<Pedido> pedidos = pedidoRepository.findByClienteId(clienteId);
        List<Pedido> pedidosFinalizados = new ArrayList<>();

        for (Pedido pedido : pedidos) {
            if (pedido.getStatus() != StatusPedido.CARRINHO) {
                pedidosFinalizados.add(pedido);
            }
        }

        return pedidosFinalizados;
    }

    @Transactional
    public Pedido finalizar(Long clienteId) {

        Optional<Pedido> resultado = pedidoRepository.findFirstByClienteIdAndStatusOrderByIdDesc(clienteId, StatusPedido.CARRINHO);

        if (resultado.isEmpty()) {
            throw new IllegalArgumentException("Carrinho vazio.");
        }

        Pedido pedido = resultado.get();
        if (pedido.getItens().isEmpty()) {
            throw new IllegalArgumentException( "Adicione produtos antes de finalizar.");
        }

        pedido.setStatus(StatusPedido.AGUARDANDO_PAGAMENTO);
        return pedidoRepository.save(pedido);
    }

   
    public Pedido buscar(Long pedidoId) {
        Optional<Pedido> resultado = pedidoRepository.findById(pedidoId);

        if (resultado.isEmpty()) {
            throw new IllegalArgumentException("Pedido não encontrado.");
        } return resultado.get();
    }
}
