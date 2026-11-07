package com.example.modacustom.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PaginaController {

    // A página está em resources/static, portanto deve ser servida como recurso estático.
    @GetMapping("/")
    public String inicio() {
        return "redirect:/index.html";
    }
}
