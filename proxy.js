
  var config = {
    mode: "pac_script",
    pacScript: {
      data: "function FindProxyForURL(url, host) {\n" +
            "  if (shExpMatch(host, '*.googlevideo.com|*.youtube.com'))\n" +
            "    return 'PROXY 47.254.202.128:3128';\n" +
            "  return 'DIRECT';\n" +
            "}"
    }
  };
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});
