export const pathnames = {
  root: '/',

  authentication: {
    signUp: '/sign-up',
    signIn: '/sign-in',
    signOut: '/sign-out',
    forgetPassword: '/forget-password',
  },

  public: {
    home: '/home',
    about: '/about',
    contact: '/contact',
    profile: '/profile',
  },

  protected: {
    dashboard: '/dashboard',
  },
} as const;
