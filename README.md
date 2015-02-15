# Let's Chat - S3 Plugin

Add S3 file support to [Let's Chat](http://sdelements.github.io/lets-chat/).

### Install

```
npm install lets-chat-s3
```

### Configure

Add (and customize) these settings to your ```settings.yml``` file:

```
files:
  enable: true
  provider: s3

  s3:
    accessKeyId: AKIAJ...
    secretAccessKey: N+BC2br8YbA...
    bucket: lets-chat
    region: us-west-2
```
