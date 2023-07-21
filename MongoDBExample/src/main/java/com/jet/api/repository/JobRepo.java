package com.jet.api.repository;

import com.jet.api.dto.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface JobRepo extends MongoRepository<Job, UUID> {
}
