ES snapshot creating


# Config

All config is done by enviroment vars:


| Var | Mean | Default|
|---|---|---|
| TIME_TO_MOVE_LOG | time to move logs from ES to S3 in days | 90 days|
| REPO | repo name where put the snapshot | s3_repository|
| HOST | host of ES node |[node] |
| ACCESS_KEY | access key to ES | ''|
| SECRET_KEY | secret key to ES | ''|
| REGION | region to do request | us-east-1|
|ROLE| role to ES get loggued to create snapshot in S3  | ''|


[node]:https://search-abg-security-logging-yvvi4tionuxufxblbavxom7pam.us-east-1.es.amazonaws.com