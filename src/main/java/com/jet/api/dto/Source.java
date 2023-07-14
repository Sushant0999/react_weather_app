package com.jet.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Locale;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Source {
    private UUID accountId;
    private String name;
    private String createdBy;
    private String createdByAuthId;
    private LocalDate createdOn;
    private String serviceId;
    private String type;
    private String url;
    private StorageProfile storageProfileId;
}
