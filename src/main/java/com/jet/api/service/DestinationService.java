package com.jet.api.service;

import com.jet.api.dto.Destination;
import com.jet.api.dto.StorageProfile;
import com.jet.api.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class DestinationService {
    @Autowired
    private StorageProfileService profileService;

    public ArrayList<Destination> destinationList = new ArrayList<>();

    public Destination addDestination(Destination destination) {
        UUID uuid = UUID.randomUUID();
        LocalDate currentDate = LocalDate.now();
        destination.setAccountId(uuid);
        destination.setCreatedOn(currentDate);
        int size = profileService.serviceProfileList.size();
        if(size == 0){
            throw new CustomException("CREATE A PROFILE FIRST");
        }
        StorageProfile service = profileService.serviceProfileList.get(size - 1);
        destination.setStorageProfileId(service);
        System.out.println(destination);
        destinationList.add(destination);
        return destination;
    }

}
