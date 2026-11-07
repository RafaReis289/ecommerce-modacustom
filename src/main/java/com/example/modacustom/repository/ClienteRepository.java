package com.example.modacustom.repository;

import com.example.modacustom.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository
        extends JpaRepository<Cliente, Long> {

    boolean existsByEmail(String email);

    java.util.Optional<Cliente> findByEmail(String email);
}