export const signUpConfig = {
  header: 'Create a new account',
  hideAllDefaults: true,
  defaultCountryCode: '84',
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password'
    },
    {
      label: 'Display Name',
      key: 'display_name',
      required: true,
      displayOrder: 4,
      type: 'string',
      custom: true
    },
    {
      label: 'Phone Number',
      key: 'phone_number',
      required: true,
      displayOrder: 5,
      type: 'string'
    }
  ]
};
