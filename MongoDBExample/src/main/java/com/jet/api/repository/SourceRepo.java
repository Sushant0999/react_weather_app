package com.jet.api.repository;

import com.jet.api.dto.Source;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface SourceRepo extends MongoRepository<Source, UUID> {
}
