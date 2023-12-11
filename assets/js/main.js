
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].classList.remove("active");
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active");
        }
        
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
      }

      document.getElementById("tab1").classList.add("active");
      document.getElementsByClassName("tablinks")[0].classList.add("active");
      
      