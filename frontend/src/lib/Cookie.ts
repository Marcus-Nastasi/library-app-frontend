export default class Cookie {
   
   public static getCookie(name: string): string | null {
      var nameEQ: string = name + "=";
      var ca: Array<string> = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
         var c: string = ca[i].trimStart();
         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
   }

   private static getCookieExpirationString(days: number): string {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "expires=" + date.toUTCString();
      return expires;
   }

   public static create(key: string, value: string, expiration: number): void {
      document.cookie = `${key}=${value}; ${this.getCookieExpirationString(expiration)}; path=/`;
   }
}


