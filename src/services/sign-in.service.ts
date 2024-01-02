export function signInService(email: string) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      email === 'test@email.io' ? resolve(true) : reject(false);
    }, 2000);
  });
}
