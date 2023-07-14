package com.jet.api.controller;

import com.jet.api.dto.Source;
import com.jet.api.service.SourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1")
public class SourceController {

    @Autowired
    private SourceService service;

    @PostMapping("/addSource")
    public Source addSource(@RequestBody Source source) {
        return service.addSource(source);
    }

    @GetMapping("/getAllSource")
    public List<Source> getAll() {
        return service.getAll();
    }
}
