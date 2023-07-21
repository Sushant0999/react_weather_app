package com.jet.api.repo;

import com.jet.api.dto.Source;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SourceRepo extends JpaRepository<Source, UUID> {
}
