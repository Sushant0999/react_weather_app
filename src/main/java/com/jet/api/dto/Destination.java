package com.jet.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Destination {
    private String name;
    private UUID accountId;
    private String createdBy;
    private String createdByAuthId;
    private LocalDate createdOn;
    private String endpointId;
    private String lastModifiedBy;
    private String lastModifiedByAuthId;
    private String lastModifiedOn;
    private String serviceId;
    private StorageProfile storageProfileId;
    private String type;
    private String url;
}
