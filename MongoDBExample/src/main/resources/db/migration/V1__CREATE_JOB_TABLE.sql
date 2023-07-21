CREATE TABLE jobs (
  jobId UUID,
  jobName VARCHAR(255),
  jobType VARCHAR(255),
  active BOOLEAN,
  createdOn DATE,
  sourceStorageProfile VARCHAR(255),
  destinationStorageProfile VARCHAR(255)
);