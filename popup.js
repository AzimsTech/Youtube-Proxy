// Youtube-Proxy v2
// Source Code: https://github.com/AzimsTech/Youtube-Proxy

function click(e) {
  document.getElementById("header").innerHTML = "SAVED!";
  window.close();
  
// The following code sets a custom PAC script.
  var config = {
    mode: "pac_script",
    pacScript: {
      // use proxy for specific domains
      data: "function FindProxyForURL(url, host) {\n" +
            "  if (shExpMatch(host, '*.googlevideo.com|*.youtube.com'))\n" +
            "    return 'PROXY "+e.target.id+"';\n" +

            
            // by default use no proxy
            "  return 'DIRECT';\n" +
            "}"
    }
  };
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});
}

// Wire up event event handlers.
document.addEventListener('DOMContentLoaded', function () {

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadProxy(this);
    }
  };
  xmlhttp.open("GET", "https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt", true);
  xmlhttp.send();

  // -------------------

  function loadProxy(xml) {
    var xmlDoc;
    xmlDoc = xml.responseText.split("\n");
  
    for (var i = 0; i < (xmlDoc.length-1); i++) {
      var btn = document.createElement("div");
      btn.innerHTML = xmlDoc[i];
      btn.setAttribute("id",xmlDoc[i]);
      btn.setAttribute("class","yellow");
      document.body.appendChild(btn);
  
    }
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', click);
  
    }

    //Get currently effective proxy settings.
    chrome.proxy.settings.get(
      {'incognito': false},
      function(config) {
          
          var stringifiedJson = JSON.stringify(config);
          console.log(stringifiedJson);
          
          // RegEx for matching Proxy patterns.
          var patt = /(\d{1,3}\.){3}\d{1,3}:(\d+)/g;
          var result = stringifiedJson.match(patt);
          console.log(result[0]);
          //document.getElementById("header").innerHTML ="YT-PROXY \n" + result[0] + "";
          document.getElementById("header").innerHTML ="YouTube-Proxy";

          var el = document.getElementById(result[0]);
          //el.setAttribute("class","blue");
          el.innerHTML = '<i class="material-icons md-18">build</i> ' + result[0] + '';
          
      });

  }
  



  
});


// ------------END--------------


