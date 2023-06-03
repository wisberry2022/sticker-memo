package com.sticker.sticker.domain.login.controller;

import com.sticker.sticker.domain.login.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class LoginController {

    @GetMapping("/login")
    public String login() {
        SecurityContext context = SecurityContextHolder.getContext();
        String userName = context.getAuthentication().getName();

        if(userName.equals("anonymousUser")) {
            return "login/login";
        }else {
            return "redirect:/";
        }

    }

}
