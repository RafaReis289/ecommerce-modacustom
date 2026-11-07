package com.example.modacustom.repository;

import com.example.modacustom.entity.Pedido;
import com.example.modacustom.entity.StatusPedido;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface PedidoRepository
        extends JpaRepository<Pedido, Long> {

    List<Pedido> findByClienteId(Long clienteId);

    Optional<Pedido> findFirstByClienteIdAndStatusOrderByIdDesc(
        Long clienteId, StatusPedido status
    );
}
