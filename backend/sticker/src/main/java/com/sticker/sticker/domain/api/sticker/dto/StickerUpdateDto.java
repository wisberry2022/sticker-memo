package com.sticker.sticker.domain.api.sticker.dto;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class StickerUpdateDto {

    private Long id;
    private String updateFlag;
    private String toBeUpdate;

}
