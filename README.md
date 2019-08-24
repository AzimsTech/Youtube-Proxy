# Youtube-Proxy <img style="float: right; height: 16px;" src="https://raw.githubusercontent.com/AzimsTech/Youtube-Proxy/master/icon16.png" />
 
This chrome extension uses a proxy auto-config script to manage Chrome's proxy settings. 

**References:** [chrome.proxy API](https://developer.chrome.com/extensions/proxy)

![Screenshot](https://i.imgur.com/wgaRnUZ.png)

```
  var config = {
    mode: "pac_script",
    pacScript: {
      // use proxy for specific domains
      data: "function FindProxyForURL(url, host) {\n" +
            "  if (shExpMatch(host, '*.googlevideo.com|*.youtube.com'))\n" +
            "    return 'PROXY 47.254.202.128:3128';\n" +

            
            // by default use no proxy
            "  return 'DIRECT';\n" +
            "}"
    }
  };
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});


```

**Proxy list I use:** https://github.com/a2u/free-proxy-list
