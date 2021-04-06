// ES 5
function Server (name, ip) {
  this.name = name
  this.ip = ip
}

Server.prototype.getUrl = function() {
  return `https://${this.ip}:80`
}

const aws = new Server('AWS German', '81.21.21.32')
console.log(aws.getUrl())
