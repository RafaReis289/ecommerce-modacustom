
package com.example.modacustom.service;

import com.example.modacustom.entity.Produto;
import com.example.modacustom.entity.Vendedor;

import com.example.modacustom.repository.ProdutoRepository;
import com.example.modacustom.repository.VendedorRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    private final ProdutoRepository produtoRepository;
    private final VendedorRepository vendedorRepository;

    public ProdutoService(ProdutoRepository produtoRepository,VendedorRepository vendedorRepository) {
        this.produtoRepository = produtoRepository;
        this.vendedorRepository = vendedorRepository;
    }

    public Produto cadastrar(Produto produto, Long vendedorId) {

        Optional<Vendedor> resultado = vendedorRepository.findById(vendedorId);

        if (resultado.isEmpty()) {
            throw new IllegalArgumentException( "Vendedor não encontrado.");
        }

        Vendedor vendedor = resultado.get();

        if (produto.getPreco() == null || produto.getPreco().signum() <= 0) {
            throw new IllegalArgumentException("O preço deve ser maior que zero.");
        }

        if (produto.getEstoque() == null || produto.getEstoque() < 0) {
            throw new IllegalArgumentException("Estoque inválido.");
        }

        produto.setVendedor(vendedor);
        return produtoRepository.save(produto);
    }

    public List<Produto> listar() {
        return produtoRepository.findAll();
    }


    public Produto buscar(Long id) {

        Optional<Produto> resultado = produtoRepository.findById(id);

        if (resultado.isEmpty()) {
            throw new IllegalArgumentException( "Produto não encontrado.");
        } return resultado.get();
    }

     public List<Produto> pesquisar(String nome) {
        return produtoRepository.findByNomeContainingIgnoreCase(nome);
    }

    public List<Produto> listarPorVendedor(Long vendedorId) {
        return produtoRepository.findByVendedorId(vendedorId);
    }

    public void excluir(Long id) {
        Produto produto = buscar(id);
        produtoRepository.delete(produto);
    }
}
