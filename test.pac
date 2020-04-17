function FindProxyForURL(url, host) {
 // Block *.facebook.com
 if (dnsDomainIs(host, ".facebook.com")) {
               return "PROXY http://165.22.203.84:3128";
 }
 return "DIRECT";
 } // End of function
