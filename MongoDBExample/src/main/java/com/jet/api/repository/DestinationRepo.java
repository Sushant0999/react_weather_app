package com.jet.api.repository;

import com.jet.api.dto.Destination;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface DestinationRepo extends MongoRepository<Destination, UUID> {
}
