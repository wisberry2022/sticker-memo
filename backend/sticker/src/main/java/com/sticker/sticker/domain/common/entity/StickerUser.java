package com.sticker.sticker.domain.common.entity;

import com.sticker.sticker.domain.api.sticker.entity.Sticker;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class StickerUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length=35, unique = true)
    private String userId;

    @Column(nullable = false)
    private String pwd;

    @Column(length=65, unique = true, nullable = false)
    private String email;

    @Column(length=25, nullable = false)
    private String name;

    @Column(length=30, nullable = false)
    private String tel;

    @OneToMany(mappedBy = "stickerUser")
    private List<Sticker> stickers = new ArrayList<>();
}
