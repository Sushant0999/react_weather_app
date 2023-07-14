package com.jet.api.service;

import com.jet.api.dto.StorageProfile;
import com.jet.api.exception.CustomException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class StorageProfileService {
    public ArrayList<StorageProfile> serviceProfileList = new ArrayList<>();

    public StorageProfile createProfile(StorageProfile profileService) {
        UUID uuid = UUID.randomUUID();
        profileService.setEndpointId(uuid);
        serviceProfileList.add(profileService);
        return profileService;
    }

    public List<StorageProfile> getAll(){
        if(serviceProfileList.isEmpty()){
            throw new CustomException("NO DATA FOUND/LIST IS EMPTY");
        }
        return serviceProfileList;
    }
}
