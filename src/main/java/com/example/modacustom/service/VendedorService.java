
package com.example.modacustom.service;

import com.example.modacustom.entity.Vendedor;
import com.example.modacustom.repository.VendedorRepository;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.modacustom.repository.ClienteRepository;
import com.example.modacustom.utils.SenhaValidator;

import java.util.List;
import java.util.Optional;

@Service
public class VendedorService {

    private final VendedorRepository vendedorRepository;
    private final ClienteRepository clienteRepository;
    private final PasswordEncoder passwordEncoder;

    public VendedorService(VendedorRepository vendedorRepository, ClienteRepository clienteRepository,
                           PasswordEncoder passwordEncoder) {
        this.vendedorRepository = vendedorRepository;
        this.clienteRepository = clienteRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Vendedor cadastrar(Vendedor vendedor) {

        vendedor.setEmail(vendedor.getEmail().trim().toLowerCase());
        if (vendedorRepository.existsByEmail(vendedor.getEmail()) || clienteRepository.existsByEmail(vendedor.getEmail())) {
            throw new IllegalArgumentException("E-mail já cadastrado.");
        }
        if (vendedor.getCnpj() == null || !vendedor.getCnpj().matches("\\d{14}")) {
            throw new IllegalArgumentException("O CNPJ deve conter 14 números.");
        }
        SenhaValidator.validar(vendedor.getSenha());
        vendedor.setSenha(passwordEncoder.encode(vendedor.getSenha()));
        return vendedorRepository.save(vendedor);
    }


    public Vendedor login(String email, String senha) {
        String emailNormalizado = email == null ? "" : email.trim().toLowerCase();
        Vendedor vendedor = vendedorRepository.findByEmail(emailNormalizado)
            .orElseThrow(() -> new IllegalArgumentException("E-mail ou senha incorretos."));
        if (senha == null || !passwordEncoder.matches(senha, vendedor.getSenha())) {
            throw new IllegalArgumentException("E-mail ou senha incorretos.");
        }
        return vendedor;
    }

    public List<Vendedor> listar() {
        return vendedorRepository.findAll();
    }

    public Vendedor atualizar(Long id, Vendedor dados) {
        Vendedor atual = buscar(id);
        atual.setNome(dados.getNome());
        atual.setNomeLoja(dados.getNomeLoja());
        atual.setCategoriaLoja(dados.getCategoriaLoja());
        atual.setDescricao(dados.getDescricao());
        atual.setCnpj(dados.getCnpj());
        return vendedorRepository.save(atual);
    }

    public Vendedor buscar(Long id) {

        Optional<Vendedor> resultado = vendedorRepository.findById(id);

        if (resultado.isEmpty()) {
            throw new IllegalArgumentException( "Vendedor não encontrado.");
        } return resultado.get();
    }
}
