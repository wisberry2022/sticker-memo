package com.sticker.sticker.domain.login.user;

import com.sticker.sticker.domain.common.repository.UserRepository;
import com.sticker.sticker.domain.login.entity.projection.LoginProjection;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {

        Optional<LoginProjection> result = userRepo.findStickerUserByUserId(id);
        if(result.isPresent()) {
            LoginProjection user = result.get();

            UserDetails userDetail = new UserDetail(user);
            return userDetail;
        }
        return null;
    }
}
