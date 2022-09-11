const methods = [
  {
    _id: 1,
    code: 'ON',
    name: 'Numbers',
    description: 'Generate a password only with numbers, 0-9',
    mininumLength: 8,
    maximumLength: 32,
  },
  {
    _id: 2,
    code: 'LN',
    name: 'Letters and Numbers',
    description: 'Generate a password with letters numbers, A-Z, 0-9',
    mininumLength: 8,
    maximumLength: 32,
  },
  {
    _id: 3,
    code: 'ACH',
    name: 'Any Character',
    description: 'Generate a password with any character',
    mininumLength: 8,
    maximumLength: 32,
  },
  {
    _id: 4,
    code: 'ETR',
    name: 'Easy to Remember',
    description: 'Generate a password with words and random characters',
    mininumLength: 1,
    maximumLength: 3,
  },
  {
    _id: 5,
    code: 'GBT',
    name: 'Groups of Three',
    description: 'Generate a password grouping character XXX-XXX-XXX-XXX',
    mininumLength: 15,
    maximumLength: 15,
  },
  {
    _id: 6,
    code: 'GBS',
    name: 'Groups of Six',
    description: 'Generate a password grouping character XXXXXX-XXXXXX-XXXXXX',
    mininumLength: 20,
    maximumLength: 20,
  },
]

module.exports = methods
