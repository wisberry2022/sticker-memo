package com.sticker.sticker.domain.join.vo;

import com.sticker.sticker.domain.common.entity.StickerUser;
import com.sticker.sticker.domain.login.entity.projection.LoginProjection;
import lombok.*;

@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserVo {

    private String id;
    private String pwd;
    private String email;
    private String name;
    private String tel;

    public StickerUser toEntity() {
        return StickerUser.builder()
                .userId(id)
                .pwd(pwd)
                .email(email)
                .name(name)
                .tel(tel)
                .build();
    }

}
