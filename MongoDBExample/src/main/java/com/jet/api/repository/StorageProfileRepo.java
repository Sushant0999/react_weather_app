package com.jet.api.repository;

import com.jet.api.dto.StorageProfile;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface StorageProfileRepo extends MongoRepository<StorageProfile, UUID> {
}
