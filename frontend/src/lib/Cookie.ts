export default class Cookie {
   
   public static getCookie(name: string): string | null {
      const nameEQ: string = `${name}=`;
      const ca: Array<string> = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
         const c: string = ca[i].trimStart();
         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
   }

   private static getCookieExpirationString(days: number): string {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      return "expires=" + date.toUTCString();
   }

   public static create(key: string, value: string, expiration: number): void {
      document.cookie = `${key}=${value}; ${this.getCookieExpirationString(expiration)}; path=/`;
   }
}


