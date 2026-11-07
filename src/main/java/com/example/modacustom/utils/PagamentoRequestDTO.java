package com.example.modacustom.utils;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PagamentoRequestDTO {

    @NotNull(message = "O pedido é obrigatório")
    private Long pedidoId;

    @NotBlank(message = "Informe a forma de pagamento")
    private String formaPagamento;
}