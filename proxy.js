
  var config = {
    mode: "pac_script",
    pacScript: {
      // use proxy for specific domains
      data: "function FindProxyForURL(url, host) {\n" +
            "  if (shExpMatch(host, '*.googlevideo.com|*.youtube.com'))\n" +
            "    return 'PROXY 47.254.214.50:3128';\n" +

            
            // by default use no proxy
            "  return 'DIRECT';\n" +
            "}"
    }
  };
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});
