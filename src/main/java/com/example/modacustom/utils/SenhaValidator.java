package com.example.modacustom.utils;

import java.util.regex.Pattern;

public final class SenhaValidator {
    private static final Pattern SENHA_FORTE = Pattern.compile(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{8,}$"
    );
    private SenhaValidator() {}

    public static void validar(String senha) {
        if (senha == null || !SENHA_FORTE.matcher(senha).matches()) {
            throw new IllegalArgumentException(
                "A senha deve ter no mínimo 8 caracteres, letra maiúscula, " +
                "letra minúscula, número e caractere especial."
            );
        }
    }
}
