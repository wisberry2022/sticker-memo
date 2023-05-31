package com.sticker.sticker.domain.join.controller;

import com.sticker.sticker.domain.join.service.JoinService;
import com.sticker.sticker.domain.join.vo.UserVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class JoinController {

    private final JoinService joinService;

    @GetMapping("/join")
    public String join() {
        return "/join/join";
    }

    @PostMapping("/doJoin")
    public String doJoin(@ModelAttribute UserVo user) {
        joinService.doJoin(user);
        return "redirect:/";

    }
}
