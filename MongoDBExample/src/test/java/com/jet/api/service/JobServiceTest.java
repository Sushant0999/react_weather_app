package com.jet.api.service;

import com.jet.api.dto.JobType;
import com.jet.api.dto.Job;
import org.assertj.core.api.AssertionsForClassTypes;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.UUID;

@SpringBootTest
class JobServiceTest {

    @Autowired
    private JobService jobService;

    //TESTED ADD JOBS AND GET JOBS BY ID
    @Test
    void addJobs() {
        Job jobs = new Job();
        jobs.setJobName("JOB1");
        jobs.setJobType(JobType.PUBLIC);
        Job jobs1 = jobService.addJobs(jobs);
        UUID actual = jobs1.getJobId();
        Job jobs2 = jobService.getJobById(actual).get();
        UUID expected = jobs2.getJobId();
        AssertionsForClassTypes.assertThat(actual).isEqualTo(expected);
    }

    //TESTED UPDATE JOBS METHOD
    @Test
    void updateJobs(){
        Job jobs = new Job();
        jobs.setJobName("JOB1");
        jobs.setJobType(JobType.PUBLIC);
        Job jobs1 = jobService.addJobs(jobs);
        UUID actual = jobs1.getJobId();
        jobService.updateJob(actual);
        Job jobs2 = jobService.getJobById(actual).get();
        AssertionsForClassTypes.assertThat(jobs1.getJobType()).isEqualTo(jobs2.getJobType());
    }


}