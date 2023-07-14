package com.jet.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Source {
    private String name;
    private UUID accountId;
    private String createdBy;
    private String createdByAuthId;
    private String createdOn;
    private String serviceId;
    private StorageProfile storageProfileId;
    private String type;
    private String url;
}
