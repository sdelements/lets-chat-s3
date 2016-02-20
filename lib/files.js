var knox = require('knox');

function S3(options) {
    this.options = options;

    this.getUrl = this.getUrl.bind(this);
    this.save = this.save.bind(this);
}

S3.defaults = {
    accessKeyId: '',
    secretAccessKey: '',
    region: '',
    bucket: '',
    endpoint: '',
    style: ''
};

S3.prototype.getUrl = function(file) {
    var filePath = file._id + '/' + encodeURIComponent(file.name);
    var endpoint = this.options.endpoint;
    if (endpoint == '') {
      endpoint = 's3-' + this.options.region + '.amazonaws.com';
    }
    if (this.options.style == "path") {
      return 'https://' + endpoint + '/' + this.options.bucket + '/' +
        filePath;
    }
    else {
      return 'https://' + this.options.bucket + '.' + endpoint + '/' +
        filePath;
    }
};

S3.prototype.save = function(options, callback) {
    var file = options.file,
        doc = options.doc,
        fileFolder = doc._id,
        filePath = fileFolder + '/' + encodeURIComponent(doc.name);

    var client = knox.createClient({
        key: this.options.accessKeyId,
        secret: this.options.secretAccessKey,
        region: this.options.region,
        bucket: this.options.bucket,
        endpoint: this.options.endpoint,
        style: this.options.style
    });

    client.putFile(file.path, '/' + decodeURIComponent(filePath), {
        'Content-Type': file.mimetype,
        'Content-Length': file.size
    }, function (err, response) {
        if (err) {
            return callback(err);
        }
        if (response.statusCode !== 200) {
            return callback(
                'S3: There was a problem uploading or authenticating. ' + response.statusCode
            );
        }
        var url = 'https://' + client.urlBase + '/' + filePath;
        callback(null, url, doc);
    });
};

module.exports = S3;
