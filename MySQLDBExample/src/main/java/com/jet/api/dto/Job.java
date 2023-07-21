package com.jet.api.dto;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "job")
public class Job {
    @Id
    private UUID jobId;
    private String jobName;
    private JobType jobType;
    private Boolean active;
    private LocalDate createdOn;
    @ManyToOne
    private StorageProfile sourceStorageProfile;

    @ManyToOne
    private StorageProfile destinationStorageProfile;
}
