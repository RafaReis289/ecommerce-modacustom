package com.example.modacustom.repository;

import com.example.modacustom.entity.Vendedor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendedorRepository
        extends JpaRepository<Vendedor, Long> {

    boolean existsByEmail(String email);

    java.util.Optional<Vendedor> findByEmail(String email);
}