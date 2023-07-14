package com.jet.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Destination {
    private UUID accountId;
    private String createdBy;
    private String createdByAuthId;
    private String createdOn;
    private String endpointId;
    private String lastModifiedBy;
    private String lastModifiedByAuthId;
    private String lastModifiedOn;
    private String name;
    private String serviceId;
    private String storageProfileId;
    private String type;
    private String url;
}
