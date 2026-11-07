package com.example.modacustom.controller;

import com.example.modacustom.entity.Pedido;
import com.example.modacustom.service.CarrinhoService;
import com.example.modacustom.utils.PersonalizacaoDTO;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carrinho")
public class CarrinhoController {

    private final CarrinhoService carrinhoService;

    public CarrinhoController(CarrinhoService carrinhoService  ) {
        this.carrinhoService = carrinhoService;
    }

    @GetMapping("/{clienteId}")
    public Pedido visualizar(@PathVariable Long clienteId) {
        return carrinhoService.visualizar(clienteId);
    }

    @PutMapping("/{clienteId}/itens/{itemId}")
    public Pedido alterarQuantidade(
            @PathVariable Long clienteId,
            @PathVariable Long itemId,
            @RequestParam Integer quantidade) {

        return carrinhoService.alterarQuantidade(
            clienteId, itemId, quantidade
        );
    }

    @DeleteMapping("/{clienteId}/itens/{itemId}")
    public Pedido removerItem(
            @PathVariable Long clienteId,
            @PathVariable Long itemId) {

        return carrinhoService.removerItem(clienteId, itemId);
    }

    @PostMapping("/{clienteId}/itens/{produtoId}/personalizado")
    public Pedido adicionarPersonalizado(
            @PathVariable Long clienteId,
            @PathVariable Long produtoId,
            @RequestParam Integer quantidade,
            @Valid @RequestBody PersonalizacaoDTO personalizacao) {

        return carrinhoService.adicionarItemPersonalizado(
            clienteId,
            produtoId,
            quantidade,
            personalizacao
        );
    }
}