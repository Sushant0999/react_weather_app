package com.jet.api.controller;

import com.jet.api.dto.StorageProfile;
import com.jet.api.service.StorageProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1")
public class StorageProfileController {
    @Autowired
    private StorageProfileService profile;

    @PostMapping("/addProfile")
    public StorageProfile addProfile(@RequestBody StorageProfile storageProfile) {
        System.out.println(storageProfile);
        return profile.createProfile(storageProfile);
    }

    @GetMapping("/getAllProfile")
    public List<StorageProfile> getAllData(){
        return profile.getAll();
    }
}
