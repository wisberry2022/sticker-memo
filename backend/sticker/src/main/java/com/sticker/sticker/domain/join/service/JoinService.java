package com.sticker.sticker.domain.join.service;

import com.sticker.sticker.domain.common.repository.UserRepository;
import com.sticker.sticker.domain.join.vo.UserVo;
import com.sticker.sticker.global.util.auth.PasswordEncrypter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JoinService {

    private final UserRepository userRepo;
    private final PasswordEncrypter passwordEncoder;

    public void doJoin(UserVo user) {
        user.setPwd(passwordEncoder.toEncrypt(user.getPwd()));
        userRepo.save(user.toEntity());
    }
}
