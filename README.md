# Let's Chat - S3 Plugin

Add S3 file support to [Let's Chat](http://sdelements.github.io/lets-chat/).

### Install

```
npm install lets-chat-s3
```

### Configure

##### YAML

Add (and customize) these settings to your ```settings.yml``` file:

```yml
files:
  enable: true
  provider: s3

  s3:
    accessKeyId: AKIAJ...
    secretAccessKey: N+BC2br8YbA...
    bucket: lets-chat
    region: us-west-2
    endpoint:
    style:
```

##### Environment Variables

Alternatively, configure using environment variables:

| YAML Path | Env Variable |
|-----------|--------------|
| files.enable | LCB_FILES_ENABLE |
| files.provider | LCB_FILES_PROVIDER |
| files.s3.accessKeyId | LCB_FILES_S3_ACCESS_KEY_ID |
| files.s3.secretAccessKey | LCB_FILES_S3_SECRET_ACCESS_KEY |
| files.s3.bucket | LCB_FILES_S3_BUCKET |
| files.s3.region | LCB_FILES_S3_REGION |
| files.s3.endpoint | LCB_FILES_S3_ENDPOINT |
| files.s3.style | LCB_FILES_S3_STYLE |
