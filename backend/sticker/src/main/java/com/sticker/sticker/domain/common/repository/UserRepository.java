package com.sticker.sticker.domain.common.repository;

import com.sticker.sticker.domain.common.entity.StickerUser;
import com.sticker.sticker.domain.login.entity.projection.LoginProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<StickerUser, Long> {

//    @Query("SELECT su.userId, su.pwd FROM StickerUser su")
    Optional<LoginProjection> findStickerUserByUserId(String userId);

}
