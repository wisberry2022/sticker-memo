package com.sticker.sticker.domain.api.sticker.repository;

import com.sticker.sticker.domain.api.sticker.entity.StickerMemo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StickerMemoRepository extends JpaRepository<StickerMemo, Long> {
}
