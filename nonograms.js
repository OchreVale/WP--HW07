
    function query_byId(id) {
        return document.getElementById(id);
      }
    function query_all(classname){
      return document.querySelectorAll(classname);
    }
      function clear_() {
        if (confirm("Please confirm that you're clearing the puzzle. All progress will be lost?")) {
          let grids = query_all(".box");
          for (let i = 0; i < grids.length; i++) {
            grids[i].classList.remove("filled", "crossed-out");
          }
        }
      }
  
    let currentType = "";
    let down = false;
    window.onload = function() {
        query_byId("clear").onclick = clear_;
      addEvent(); 
    };
    window.onmouseup = function() {
      currentType = "";
      down = false;
    };
    function update_color() {
      down = true;
      if (this.classList.contains("filled")) {
        this.classList.remove("filled");
        this.classList.add("crossed-out");
        currentType = "crossed-out";
      } else if (this.classList.contains("crossed-out")) {
        this.classList.remove("crossed-out");
        currentType = "";
      } else {
        this.classList.add("filled");
        currentType = "filled";
      }
    }

  function hold_and_drag() {
      if (down) {
        if (currentType == "") {
          this.classList.remove("crossed-out");
        } else if (currentType == "filled") {
          this.classList.add("filled");
          this.classList.remove("crossed-out");
        } else {
          this.classList.add("crossed-out");
          this.classList.remove("filled");
        }
      }
    }

    function addEvent() {
      let grids = query_all(".box");
      for (let i = 0; i < grids.length; i++) {
        let square = grids[i];
        square.onmousedown = update_color;
        square.onmouseover = hold_and_drag;
        square.onclick = function() {
          down = false;
          currentType = "";
        };
      }
    }