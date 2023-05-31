package com.sticker.sticker.domain.login.controller;

import com.sticker.sticker.domain.login.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
public class LoginController {

    private final UserService userService;

    @GetMapping("/login")
    public String login() {
        return "login/login";
    }

    @PostMapping("/authenticate")
    public void authenticate(@RequestParam("id") String id, @RequestParam("pwd") String pwd) {
        userService.loadUserByUsername(id);
    }
}
