package com.jet.api.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job {
    private UUID jobId;
    private String jobName;
    private JobType jobType;
    private Boolean active;
    private Date createdOn;
    private StorageProfile sourceStorageProfile;
    private StorageProfile destinationStorageProfile;
}
