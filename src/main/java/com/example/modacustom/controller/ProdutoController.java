package com.example.modacustom.controller;

import com.example.modacustom.entity.Produto;
import com.example.modacustom.service.ProdutoService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @PostMapping("/vendedor/{vendedorId}")
    @ResponseStatus(HttpStatus.CREATED)
    public Produto cadastrar(@PathVariable Long vendedorId, @RequestBody Produto produto) {
        return produtoService.cadastrar(produto, vendedorId);
    }

    @GetMapping
    public List<Produto> listar() {
        return produtoService.listar();
    }

    @GetMapping("/{id}")
    public Produto buscar(@PathVariable Long id) {
        return produtoService.buscar(id);
    }

    @GetMapping("/pesquisar")
    public List<Produto> pesquisar(@RequestParam String nome) {
        return produtoService.pesquisar(nome);
    }

    @GetMapping("/vendedor/{vendedorId}")
    public List<Produto> listarPorVendedor(@PathVariable Long vendedorId) {
        return produtoService.listarPorVendedor(vendedorId);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        produtoService.excluir(id);
    }
}