package com.jet.api.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Locale;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "source")
public class Source {
    @Id
    private UUID accountId;
    private String name;
    private String createdBy;
    private String createdByAuthId;
    private LocalDate createdOn;
    private String serviceId;
    private String type;
    private String url;
    @ManyToOne
    private StorageProfile storageProfileId;
}
