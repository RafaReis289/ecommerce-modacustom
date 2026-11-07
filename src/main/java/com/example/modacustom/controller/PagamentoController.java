package com.example.modacustom.controller;

import com.example.modacustom.entity.Pagamento;
import com.example.modacustom.service.PagamentoService;
import com.example.modacustom.utils.PagamentoRequestDTO;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pagamentos")
public class PagamentoController {

    private final PagamentoService pagamentoService;

    public PagamentoController(PagamentoService pagamentoService) {
        this.pagamentoService = pagamentoService;
    }

    @PostMapping
    public Pagamento pagar(@Valid @RequestBody PagamentoRequestDTO dto) {
        return pagamentoService.pagar(dto.getPedidoId(),dto.getFormaPagamento());
    }

}