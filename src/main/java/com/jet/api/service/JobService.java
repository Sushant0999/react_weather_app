package com.jet.api.service;

import com.fasterxml.jackson.core.JsonParser;
import com.jet.api.dto.JobType;
import com.jet.api.dto.Job;
import com.jet.api.exception.CustomException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class JobService {
    private final ArrayList<Job> jobsList = new ArrayList<>();

    public Job addJobs(Job job) {
        if (job.getJobName().isEmpty() || job.getJobName().isBlank()) {
            throw new CustomException("FIELDS ARE EMPTY");
        }
        UUID uuid = UUID.randomUUID();
        Date date = job.getCreatedOn();
        System.out.println();
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
