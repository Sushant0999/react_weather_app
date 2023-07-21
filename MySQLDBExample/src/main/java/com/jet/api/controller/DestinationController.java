package com.jet.api.controller;

import com.jet.api.dto.Destination;
import com.jet.api.service.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1")
public class DestinationController {

    @Autowired
    private DestinationService destinationService;

    @PostMapping("/addDestination")
    public Destination addDestination(@RequestBody Destination destination) {
        return destinationService.addDestination(destination);
    }

}
