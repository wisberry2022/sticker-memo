package com.sticker.sticker.domain.api.sticker.service;

import com.sticker.sticker.domain.api.sticker.entity.Sticker;
import com.sticker.sticker.domain.api.sticker.entity.StickerMemo;
import com.sticker.sticker.domain.api.sticker.repository.StickerMemoRepository;
import com.sticker.sticker.domain.api.sticker.repository.StickerRepository;
import com.sticker.sticker.domain.common.entity.StickerUser;
import com.sticker.sticker.domain.common.repository.UserRepository;
import com.sticker.sticker.domain.login.entity.projection.LoginProjection;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StickerService {

    private final StickerRepository stickerRepo;
    private final StickerMemoRepository stickerMemoRepo;
    private final UserRepository userRepo;

    public boolean makeSticker(String userName, String title) {
        Optional<StickerUser> result =  userRepo.findUserByUserId(userName);

        if(result.isPresent()) {

            StickerUser user = result.get();
            Sticker sticker = Sticker.builder()
                    .stickerUser(user)
                    .title(title)
                    .build();

            stickerRepo.save(sticker);

            StickerMemo list = StickerMemo.builder()
                    .content("메모가 없습니다. 클릭해서 메모를 등록해보세요")
                    .sticker(sticker)
                    .build();

            stickerMemoRepo.save(list);

            return true;
        }
        return false;
    }

}
