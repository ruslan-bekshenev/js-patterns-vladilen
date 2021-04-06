function Server (name, ip) {
  this.name = name
  this.ip = ip
}

Server.prototype.getUrl = function() {
  return `https://${this.ip}:80`
}


class Server2 {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `http//${this.ip}:8080`
  }
}

const aws = new Server('AWS German', '81.21.21.32')
const aws2 = new Server2('AWS German', '81.21.21.32')
console.log(aws.getUrl())
console.log(aws2.getUrl())
