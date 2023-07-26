package com.jet.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDate;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "source")
public class Source {
    @MongoId
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
