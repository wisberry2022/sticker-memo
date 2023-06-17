package com.sticker.sticker.domain.api.sticker.service;

import com.sticker.sticker.domain.api.sticker.dto.StickerUpdateDto;
import com.sticker.sticker.domain.api.sticker.entity.Sticker;
import com.sticker.sticker.domain.api.sticker.entity.StickerMemo;
import com.sticker.sticker.domain.api.sticker.repository.StickerMemoRepository;
import com.sticker.sticker.domain.api.sticker.repository.StickerRepository;
import com.sticker.sticker.domain.common.entity.StickerUser;
import com.sticker.sticker.domain.common.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StickerService {

    private final StickerRepository stickerRepo;
    private final StickerMemoRepository stickerMemoRepo;
    private final UserRepository userRepo;

    @Transactional
    public void updateTitle(List<Sticker> stickers, StickerUpdateDto updateData) {
        stickers.stream().forEach(sticker -> {
            if(sticker.getId() == updateData.getId()) {
                sticker.changeTitle(updateData);
                stickerRepo.save(sticker);
            }
        });
    }


    public void updateSticker(StickerUpdateDto updateData, String userName) {

        StickerUser user = userRepo.findUserByUserId(userName).get();
        List<Sticker> stickers = user.getStickers();

        if(updateData.getUpdateFlag().equals("title")) {
            updateTitle(stickers, updateData);
        }else if(updateData.equals("memos")) {
        }

    }

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

    @Transactional
    public long getLatestId(String userName) {
        Optional<StickerUser> user = userRepo.findUserByUserId(userName);
        if(user.isPresent()) {

            List<Sticker> stickers = user.get().getStickers();

            if(stickers.isEmpty()) {
                return 1L;
            }
            Sticker sticker = stickers
                    .stream()
                    .max(Comparator.comparing(Sticker::getId))
                    .get();
            return sticker.getId()+1L;
        }
        return 0L;

    }

}
