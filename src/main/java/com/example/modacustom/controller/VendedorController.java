package com.example.modacustom.controller;

import com.example.modacustom.entity.Vendedor;
import com.example.modacustom.service.VendedorService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vendedores")
public class VendedorController {

    private final VendedorService vendedorService;

    public VendedorController(VendedorService vendedorService) {
        this.vendedorService = vendedorService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Vendedor cadastrar(@RequestBody Vendedor vendedor) {
        return vendedorService.cadastrar(vendedor);
    }

    @PostMapping("/login")
    public Vendedor login(@RequestBody com.example.modacustom.utils.LoginRequestDTO dados) {
        return vendedorService.login(dados.getEmail(), dados.getSenha());
    }

    @GetMapping
    public List<Vendedor> listar() {
        return vendedorService.listar();
    }

    @GetMapping("/{id}")
    public Vendedor buscar(@PathVariable Long id) {
        return vendedorService.buscar(id);
    }

    @PutMapping("/{id}")
    public Vendedor atualizar(@PathVariable Long id, @RequestBody Vendedor vendedor) {
        return vendedorService.atualizar(id, vendedor);
    }
}