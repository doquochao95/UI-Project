export enum MessageConstants {
  LOGGED_IN = 'Welcome to the system',
  LOGIN_FAILED = 'Your username and/or password do not match',
  LOGGED_OUT = 'You have been logged out',
  TOKEN_EMPTY = 'Can not find the local saved token'
}

export enum CaptionConstants {
  LOGIN_FAILED = 'Login Failed!',
  LOGIN_SUCCESS = 'Login Success!',

  LOGOUT_FAILED = 'Logout Failed!',
  LOGOUT_SUCCESS = 'Logout Success!',

  ERROR = 'Error!',
  WARNING = 'Warning!',
  UNAUTHORIZED = 'Unauthorized!',
  INVALID = 'Invalid!'
}

export enum ActionConstants {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  VIEW = 'VIEW'
}
