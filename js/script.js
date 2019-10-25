var link = document.querySelector(".search_button");
        var popup = document.querySelector(".booking_form");
        var focus = popup.querySelector(".date");
        var entry = popup.querySelector("[name=entry]");
        var departure = popup.querySelector("[name=departure]");
        var grownup = popup.querySelector("[name=grownup]");
        var child = popup.querySelector("[name=children]");

        var isStorageSupport = true;
        var storage = "";

        try {
          popup.classList.toggle("close_form");
          storage = localStorage.getItem("grownup");
          storage = localStorage.getItem("child");
        } catch (err) {
          isStorageSupport = false;
        }

        link.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.add("booking_form");
          popup.classList.toggle("close_form");
          popup.classList.remove("form_error");
          focus.focus();
        });

        popup.addEventListener("submit", function (evt) {
          if (entry.value && departure.value && grownup.value) {
            localStorage.setItem("grownup", grownup.value);
            localStorage.setItem("children", child.value);

          } else {
            evt.preventDefault();
            popup.classList.remove("form_error");                       
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("form_error");
            
          }
        });

        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            if (popup.classList.contains("booking_form")) {
              evt.preventDefault();
              popup.classList.add("close_form");
              popup.classList.remove("booking_form");
            }
          }
        });