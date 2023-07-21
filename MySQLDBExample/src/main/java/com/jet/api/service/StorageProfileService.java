package com.jet.api.service;

import com.jet.api.dto.StorageProfile;
import com.jet.api.exception.CustomException;
import com.jet.api.repo.StorageProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class StorageProfileService {
    public ArrayList<StorageProfile> serviceProfileList = new ArrayList<>();

    @Autowired
    private StorageProfileRepo storageProfileRepo;

    public StorageProfile createProfile(StorageProfile profileService) {
        UUID uuid = UUID.randomUUID();
        profileService.setEndpointId(uuid);
        serviceProfileList.add(profileService);
        storageProfileRepo.save(profileService);
        return profileService;
    }

    public List<StorageProfile> getAll(){
        List<StorageProfile> list = storageProfileRepo.findAll();
        if(list.isEmpty()){
            throw new CustomException("NO DATA FOUND/LIST IS EMPTY");
        }
        return list;
    }
}
