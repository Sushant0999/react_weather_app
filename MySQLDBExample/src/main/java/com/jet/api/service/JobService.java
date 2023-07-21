package com.jet.api.service;


import com.jet.api.dto.*;
import com.jet.api.exception.CustomException;
import com.jet.api.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class JobService {
    @Autowired
    private StorageProfileService profileService;

    @Autowired
    private JobRepo jobRepo;
    private final ArrayList<Job> jobsList = new ArrayList<>();

    public Job addJobs(Job job) {
        if (job.getJobName().isEmpty() || job.getJobName().isBlank()) {
            throw new CustomException("FIELDS ARE EMPTY");
        }
        UUID uuid = UUID.randomUUID();
        LocalDate currentDate = LocalDate.now();
        //creating custom date
//        String randomDate = "2021-01-22";
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//        LocalDate customDate = LocalDate.parse(randomDate, formatter);
        //setting uuid
        job.setJobId(uuid);
        //setting date
//        job.setCreatedOn(LocalDate.parse(randomDate));
        job.setCreatedOn(currentDate);
        int size = profileService.serviceProfileList.size();
        if(size == 0){
            throw new CustomException("CREATE A PROFILE FIRST");
        }
        StorageProfile storageProfile = profileService.serviceProfileList.get(size - 1);
        job.setDestinationStorageProfile(storageProfile);
        job.setSourceStorageProfile(storageProfile);
        jobsList.add(job);
        jobRepo.save(job);
        return job;
    }

    public List<Job> getAll() {
        List<Job> list = jobRepo.findAll();
        if (list.isEmpty()) {
            throw new CustomException("NO DATA FOUND/LIST IS EMPTY");
        }
        return list;
    }

    public Optional<Job> getJobById(UUID id) {
        Optional<Job> job = jobRepo.findById(id);
        if (job.isEmpty()) {
            throw new CustomException("NO USER FOUND WITH THIS ID");
        }
        return Optional.of(job).get();
    }

    public String deleteJob(UUID id) {
        Optional<Job> job = jobRepo.findById(id);
        if (job.isEmpty()) {
            throw new CustomException("NO USER FOUND WITH THIS ID");
        }
        jobRepo.deleteById(id);
        return id + " DELETED SUCCESSFULLY";
    }

    public Job updateJob(UUID id) {
        Optional<Job> job = jobRepo.findById(id);
        if (job.isEmpty()) {
            throw new CustomException("NO " +
                    "USER FOUND WITH THIS ID");
        }
        Job jobs = job.get();
        int index = jobsList.indexOf(jobs);
        Job jobs1 = jobsList.get(index);
        jobs1.setJobType(JobType.PRIVATE);
        jobsList.set(index, jobs1);
        jobRepo.save(jobs1);
        return jobs1;
    }

}
