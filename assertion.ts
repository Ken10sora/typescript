export const ciBuild = {
  number: 1,
  duration: 12000,
  state: 'success',
  triggerParameters: {
    is_scheduled: true,
  },
  type: 'scheduled_pipeline',
  actor: {
    login: 'Taka',
  },
}

export class User {
  name: string
  password: string
  constructor({ name, password }: { name: string, password: string}) {
    if(password.length < 6) throw new Error('The password length must be at least 6 characters.')
      this.name = name
      this.password = password
  }
}