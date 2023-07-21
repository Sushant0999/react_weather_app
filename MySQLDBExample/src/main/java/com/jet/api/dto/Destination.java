package com.jet.api.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "destination")
public class Destination {
    @Id
    private UUID accountId;
    private String name;
    private String createdBy;
    private String createdByAuthId;
    private LocalDate createdOn;
    private String endpointId;
    private String lastModifiedBy;
    private String lastModifiedByAuthId;
    private String lastModifiedOn;
    private String serviceId;
    @ManyToOne
    private StorageProfile storageProfileId;
    private String type;
    private String url;
}
