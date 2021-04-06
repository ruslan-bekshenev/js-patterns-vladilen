class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `http//${this.ip}:8080`
  }
}

const aws = new Server('AWS German', '81.21.21.32')
console.log(aws.getUrl())

