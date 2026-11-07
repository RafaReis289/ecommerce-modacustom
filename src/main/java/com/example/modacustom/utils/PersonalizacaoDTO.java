package com.example.modacustom.utils;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class PersonalizacaoDTO {

    @NotBlank(message = "Informe o tamanho")
    private String tamanho;

    @NotBlank(message = "Informe a cor")
    private String cor;

    @Size(max = 1000, message = "Descrição muito longa")
    private String descricaoEstampa;

    private String posicaoEstampa;

    private String imagemEstampaUrl;
}