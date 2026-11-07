package com.example.modacustom.service;

import com.example.modacustom.entity.Cliente;
import com.example.modacustom.repository.ClienteRepository;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.modacustom.repository.VendedorRepository;
import com.example.modacustom.utils.SenhaValidator;
import com.example.modacustom.utils.ClienteResponseDTO;
import java.util.List;

@Service
public class ClienteService {

    private final ClienteRepository repository;
    private final VendedorRepository vendedorRepository;
    private final PasswordEncoder passwordEncoder;

    public ClienteService(ClienteRepository repository, VendedorRepository vendedorRepository,
                          PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.vendedorRepository = vendedorRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Cliente cadastrar(Cliente cliente) {
        cliente.setEmail(cliente.getEmail().trim().toLowerCase());
        if (repository.existsByEmail(cliente.getEmail()) || vendedorRepository.existsByEmail(cliente.getEmail())) {
            throw new IllegalArgumentException(
                "Este e-mail já está cadastrado."
            );
        }
        SenhaValidator.validar(cliente.getSenha());
        cliente.setSenha(passwordEncoder.encode(cliente.getSenha()));
        return repository.save(cliente);
    }

    public ClienteResponseDTO login(String email, String senha) {
        if (email == null || senha == null || email.isBlank() || senha.isBlank()) {
            throw new IllegalArgumentException("Informe e-mail e senha.");
        }
        String emailNormalizado = email.trim().toLowerCase();
        Cliente cliente = repository.findByEmail(emailNormalizado)
                .orElseThrow(() -> new IllegalArgumentException("E-mail ou senha incorretos."));
        if (!passwordEncoder.matches(senha, cliente.getSenha())) {
            throw new IllegalArgumentException("E-mail ou senha incorretos.");
        }
        return new ClienteResponseDTO(cliente.getId(), cliente.getNome(), cliente.getEmail(),
                cliente.getTelefone(), cliente.getEndereco());
    }

    public List<Cliente> listar() {
        return repository.findAll();
    }

    public Cliente buscar(Long id) {
        return repository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Cliente não encontrado."));
    }

    public Cliente atualizar(Long id, Cliente dados) {
        Cliente cliente = buscar(id);

        cliente.setNome(dados.getNome());
        cliente.setTelefone(dados.getTelefone());
        cliente.setEndereco(dados.getEndereco());

        if (!cliente.getEmail().equals(dados.getEmail())) {
            if (repository.existsByEmail(dados.getEmail())) {
                throw new IllegalArgumentException(
                    "E-mail já cadastrado."
                );
            }
            cliente.setEmail(dados.getEmail());
        }

        return repository.save(cliente);
    }

    public void excluir(Long id) {
        repository.delete(buscar(id));
    }
}