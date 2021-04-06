function SimpleMembership(name) {
  this.name = name
  this.cost = 50
}

function StandardMembership(name) {
  this.name = name
  this.cost = 150
}

function PremiumMembership(name) {
  this.name = name
  this.cost = 500
}

function MemberFactory() {
  const list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }
  this.create = function(name, type = 'simple') {
    const Membership = list[type] || list.simple
    const member = new Membership(name)
    member.type = type
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Vladilen', 'simple'),
  factory.create('Elena', 'standard'),
  factory.create('Vladilen', 'premium')
]

members.forEach(m => {
  m.define()
})
