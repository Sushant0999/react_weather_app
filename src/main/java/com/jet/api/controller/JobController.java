package com.jet.api.controller;

import com.jet.api.dto.Job;
import com.jet.api.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1")
public class JobController {

    @Autowired
    private JobService jobService;

    @PostMapping("/addJob")
    public Job insertJob(@RequestBody Job job) {
        return jobService.addJobs(job);
    }

    @GetMapping("/getAllJob")
    public List<Job> getAllJob() {
        return jobService.getAll();
    }

    @GetMapping("/get/{id}")
    public Optional<Job> getById(@PathVariable String id) {
        return jobService.getJobById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable String id) {
        return jobService.deleteJob(id);
    }

    @PutMapping("/update/{id}")
    public Job updateJobById(@PathVariable String id) {
        return jobService.updateJob(id);
    }


}
