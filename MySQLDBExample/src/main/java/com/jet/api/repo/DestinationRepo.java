package com.jet.api.repo;

import com.jet.api.dto.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface DestinationRepo extends JpaRepository<Destination, UUID> {
}
