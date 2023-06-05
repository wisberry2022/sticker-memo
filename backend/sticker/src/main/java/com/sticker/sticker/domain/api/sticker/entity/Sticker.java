package com.sticker.sticker.domain.api.sticker.entity;

import com.sticker.sticker.domain.common.entity.StickerUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Sticker {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private StickerUser stickerUser;

    @Column(name="title", length=30)
    private String title;

    @OneToMany(mappedBy="sticker")
    private List<StickerMemo> stickerMemo = new ArrayList<>();

}
