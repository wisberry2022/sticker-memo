package com.sticker.sticker.domain.api.sticker.repository;

import com.sticker.sticker.domain.api.sticker.entity.Sticker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StickerRepository extends JpaRepository<Sticker, Long> {
}
