
package com.example.modacustom.service;

import com.example.modacustom.entity.Favorito;
import com.example.modacustom.entity.Cliente;
import com.example.modacustom.entity.Produto;

import com.example.modacustom.repository.FavoritoRepository;
import com.example.modacustom.repository.ClienteRepository;
import com.example.modacustom.repository.ProdutoRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavoritoService {

    private final FavoritoRepository favoritoRepository;
    private final ClienteRepository clienteRepository;
    private final ProdutoRepository produtoRepository;

    public FavoritoService(
            FavoritoRepository favoritoRepository,
            ClienteRepository clienteRepository,
            ProdutoRepository produtoRepository) {

        this.favoritoRepository = favoritoRepository;
        this.clienteRepository = clienteRepository;
        this.produtoRepository = produtoRepository;
    }

    public Favorito adicionar(Long clienteId, Long produtoId) {

        Optional<Favorito> favoritoExistente = favoritoRepository.findByClienteIdAndProdutoId( clienteId, produtoId);

        if (favoritoExistente.isPresent()) {
            throw new IllegalArgumentException(
                    "Produto já está nos favoritos.");
        }

        Optional<Cliente> resultadoCliente =
                clienteRepository.findById(clienteId);

        if (resultadoCliente.isEmpty()) {
            throw new IllegalArgumentException("Cliente não encontrado.");
        }

        Cliente cliente = resultadoCliente.get();

        Optional<Produto> resultadoProduto = produtoRepository.findById(produtoId);

        if (resultadoProduto.isEmpty()) {
            throw new IllegalArgumentException("Produto não encontrado.");
        }

        Produto produto = resultadoProduto.get();
        Favorito favorito = new Favorito();
        favorito.setCliente(cliente);
        favorito.setProduto(produto);
        return favoritoRepository.save(favorito);
    }

    public List<Favorito> listar(Long clienteId) {
        return favoritoRepository.findByClienteId(clienteId);
    }

    public void remover(Long clienteId, Long produtoId) {

        Optional<Favorito> resultado =favoritoRepository.findByClienteIdAndProdutoId(clienteId, produtoId);

        if (resultado.isEmpty()) {
            throw new IllegalArgumentException("Favorito não encontrado.");
        }

        Favorito favorito = resultado.get();
        favoritoRepository.delete(favorito);
    }
}
