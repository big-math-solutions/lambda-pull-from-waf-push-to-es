ES snapshot creating


# Config

All config is done by enviroment vars:


| Var | Mean | Default|
|---|---|---|
| HOST | url of ES host | ''|
| REGION | region of ES host | 'us-east-1'|
| MAX_ITEMS | max item to pull from waf | 100|
| RULE_ID | rule id to pull data | ''|
| TIME_WINDOW_TO_PULL_SAMPLE | time to generate window of time to pull data from waf | ''|
| WEB_ACL_ID | Web acl id to use in pull data from waf | ''|

