package com.sticker.sticker.domain.api.sticker.controller;

import com.sticker.sticker.domain.api.sticker.dto.StickerUpdateDto;
import com.sticker.sticker.domain.api.sticker.service.StickerService;
import com.sticker.sticker.domain.common.util.UserCredentialManager;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/sticker")
@RequiredArgsConstructor
public class StickerController {

    private final StickerService stickerService;
    private final UserCredentialManager userManager;

    @PostMapping
    public ResponseEntity getSticker(@RequestBody Map<String, String> data) {
        String userName = userManager.getCurrentUserName();

        if(stickerService.makeSticker(userName, data.get("content"))) {
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);

    }

    @PutMapping("/title")
    public ResponseEntity updateStickerTitle(@RequestBody StickerUpdateDto updateDto) {

        try {
            stickerService.updateSticker(updateDto, userManager.getCurrentUserName());
            return new ResponseEntity(HttpStatus.OK);
        }catch(Exception e) {
            e.printStackTrace();
        }

        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);

    }

    @GetMapping("/latest")
    public Map<String, Long> getLatestStickerId() {

        long latest = stickerService.getLatestId(userManager.getCurrentUserName());
        Map<String, Long> responseBody = new HashMap<>();
        responseBody.put("latest", latest);

        return responseBody;
    }



}
