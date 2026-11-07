package com.example.modacustom.controller;

import com.example.modacustom.entity.Favorito;
import com.example.modacustom.service.FavoritoService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favoritos")
public class FavoritoController {

    private final FavoritoService favoritoService;

    public FavoritoController(FavoritoService favoritoService) {
        this.favoritoService= favoritoService;
    }

    @PostMapping("/{clienteId}/{produtoId}")
    @ResponseStatus(HttpStatus.CREATED)
    public Favorito adicionar(
            @PathVariable Long clienteId,
            @PathVariable Long produtoId) {
        return favoritoService.adicionar(clienteId, produtoId);
    }

    @GetMapping("/{clienteId}")
    public List<Favorito> listar(@PathVariable Long clienteId) {
        return favoritoService.listar(clienteId);
    }

    @DeleteMapping("/{clienteId}/{produtoId}")
    public void remover(
            @PathVariable Long clienteId,
            @PathVariable Long produtoId) {
        favoritoService.remover(clienteId, produtoId);
    }
}