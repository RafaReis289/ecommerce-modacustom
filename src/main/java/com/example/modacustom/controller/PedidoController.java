package com.example.modacustom.controller;

import com.example.modacustom.entity.Pedido;
import com.example.modacustom.service.PedidoService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

    private final PedidoService service;

    public PedidoController(PedidoService service) {
        this.service = service;
    }

    @PostMapping("/finalizar/{clienteId}")
    @ResponseStatus(HttpStatus.CREATED)
    public Pedido finalizar(@PathVariable Long clienteId) {
        return service.finalizar(clienteId);
    }

    @GetMapping("/cliente/{clienteId}")
    public List<Pedido> listarPorCliente(@PathVariable Long clienteId) {
        return service.listarPorCliente(clienteId);
    }

    @GetMapping("/{pedidoId}")
    public Pedido buscar(@PathVariable Long pedidoId) {
        return service.buscar(pedidoId);
    }
}