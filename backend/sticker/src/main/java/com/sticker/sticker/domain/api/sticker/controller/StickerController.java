package com.sticker.sticker.domain.api.sticker.controller;

import com.sticker.sticker.domain.api.sticker.service.StickerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/sticker")
@RequiredArgsConstructor
public class StickerController {

    private final StickerService stickerService;

    @PostMapping
    public ResponseEntity getSticker(@RequestBody Map<String, String> data) {
        SecurityContext context = SecurityContextHolder.getContext();
        String userName = context.getAuthentication().getName();

        if(stickerService.makeSticker(userName, data.get("content"))) {
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);

    }

}
