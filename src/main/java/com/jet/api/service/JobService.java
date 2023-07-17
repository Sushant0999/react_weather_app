package com.jet.api.service;


import com.jet.api.dto.*;
import com.jet.api.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class JobService {
    @Autowired
    private StorageProfileService profileService;
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
        System.out.println(job);
        job.setJobId(uuid);
        jobsList.add(job);
        return job;
    }

    public List<Job> getAll() {
        if (jobsList.isEmpty()) {
            throw new CustomException("NO DATA FOUND/LIST IS EMPTY");
        }
        return jobsList;
    }

    public Optional<Job> getJobById(String id) {
        Optional<Job> list = jobsList.stream().filter(ele -> ele.getJobId().toString().equals(id)).findFirst();
        System.out.println("FOUND : " + list);
        if (list.isEmpty()) {
            throw new CustomException("NO USER FOUND WITH THIS ID");
        }
        return Optional.of(list).get();
    }

    public String deleteJob(String id) {
        Optional<Job> list = jobsList.stream().filter(ele -> ele.getJobId().toString().equals(id)).findFirst();
        if (list.isEmpty()) {
            throw new CustomException("NO USER FOUND WITH THIS ID");
        }
        Job jobs = list.get();
        jobsList.remove(jobs);
        return id + " DELETED SUCCESSFULLY";
    }

    public Job updateJob(String id) {
        Optional<Job> list = jobsList.stream().filter(ele -> ele.getJobId().toString().equals(id)).findAny();
        if (list.isEmpty()) {
            throw new CustomException("NO " +
                    "USER FOUND WITH THIS ID");
        }
        Job jobs = list.get();
        int index = jobsList.indexOf(jobs);
        Job jobs1 = jobsList.get(index);
        jobs1.setJobType(JobType.PRIVATE);
        jobsList.set(index, jobs1);
        return jobs1;
    }

}
