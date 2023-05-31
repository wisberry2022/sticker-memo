package com.sticker.sticker.global.util.auth;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordEncrypter {

    public String toEncrypt(String password) {
        return new BCryptPasswordEncoder().encode(password);
    }

}
