package com.jet.api.repo;

import com.jet.api.dto.StorageProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StorageProfileRepo extends JpaRepository<StorageProfile, UUID> {
}
