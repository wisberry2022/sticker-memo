package com.sticker.sticker.domain.common.util;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserCredentialManager {

    public String getCurrentUserName() {
        SecurityContext context = SecurityContextHolder.getContext();
        return context.getAuthentication().getName();
    }
}
