fetch("../header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage || currentPage === "#") {
      currentPage = "index.html";
    }

    // Get all anchor tags inside menu
    let links = document.querySelectorAll(".menu .menubar ul li a");

    links.forEach(link => {
      let linkPage = link.getAttribute("href");
      if (!linkPage) return;

      // Highlight current page link
      if (linkPage === currentPage) {
        link.closest("li").classList.add("underline_current");
      }

      // Mobile menu setup
      if (window.innerWidth <= 576) {
        const menu = document.querySelector(".menu");
        const menuBar = document.querySelector(".menu .menubar ul");
        const mobileBar = document.querySelector(".menu .mobilebar");

        // Add hamburger if not already present
        if (mobileBar && !mobileBar.querySelector(".hamburger")) {
          const dv = document.createElement("div");
          dv.className = "hamburger";
          dv.setAttribute("aria-label", "Toggle menu");
          dv.setAttribute("tabindex", "0");
          dv.innerHTML = "<span></span>";
          mobileBar.appendChild(dv);

          dv.addEventListener("click", function (e) {
            e.stopPropagation();
            menu.classList.toggle("mobile-open");
          });
        }

        // Handle submenu items
        const menuList = document.querySelectorAll(".menu .menubar ul li");

        menuList.forEach(li => {
          const submenu = li.querySelector(".submenu");
          if (submenu) {
            li.classList.add("has-submenu");

            if (!li.querySelector(".submenu-toggle")) {
              const toggle = document.createElement("button");
              toggle.className = "submenu-toggle";
              toggle.setAttribute("aria-expanded", "false");
              toggle.innerHTML =
                '<span style="display:inline-block; transform:rotate(90deg);">&#9656;</span>';

              const firstLink = li.querySelector("a");
              firstLink.after(toggle);

              toggle.addEventListener("click", function (ev) {
                ev.stopPropagation();
                const isOpen = li.classList.toggle("open-submenu");
                toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
              });
            }
          }
        });
      }
    });
  })
  .catch(err => {
    console.error("Header load failed:", err);
  });
