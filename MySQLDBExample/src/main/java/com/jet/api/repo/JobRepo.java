package com.jet.api.repo;

import com.jet.api.dto.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface JobRepo extends JpaRepository<Job, UUID> {
}
