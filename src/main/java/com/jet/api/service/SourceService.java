package com.jet.api.service;

import com.jet.api.dto.Source;
import com.jet.api.dto.StorageProfile;
import com.jet.api.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class SourceService {

    @Autowired
    private StorageProfileService profileService;
    public List<Source> sourceList = new ArrayList<>();

    public Source addSource(Source source) {
        UUID uuid = UUID.randomUUID();
        LocalDate currentDate = LocalDate.now();
        source.setAccountId(uuid);
        source.setCreatedOn(currentDate);
        StorageProfile service = profileService.serviceProfileList.get(0);
        source.setStorageProfileId(service);
        System.out.println(source);
        sourceList.add(source);
        return source;
    }

    public List<Source> getAll(){
        if(sourceList.isEmpty()){
            throw new CustomException("NO DATA FOUND/LIST IS EMPTY");
        }
        return sourceList;
    }
}
