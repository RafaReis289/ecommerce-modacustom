package com.example.modacustom.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(
    name = "favoritos",
    uniqueConstraints = @UniqueConstraint(
        columnNames = {"cliente_id", "produto_id"}
    )
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Favorito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_id", nullable = false)
    private Cliente cliente;

    @ManyToOne(optional = false)
    @JoinColumn(name = "produto_id", nullable = false)
    private Produto produto;
}