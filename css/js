fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("header").innerHTML = data;

       let currentPage = window.location.pathname.split("/").pop();
            if ( !currentPage || currentPage == "#"){
                currentPage = "index.html";
            }
       let links = document.querySelectorAll(".menu .menubar ul li a");
      
       links.forEach(link => {
           console.log("current page:", currentPage);
           let linkPage = link.getAttribute("href");
           console.log("Attribute Value:", linkPage);
           if(!linkPage) return;
           if(linkPage == currentPage){
               link.closest("li").classList.add("underline_current");
           }
           if (window.innerWidth <= 576) {
               const menu = document.querySelector(".menu");
               const menuBar = document.querySelector(".menu .menubar");
               const mobileBar = document.querySelector(".menu .mobilebar");

                if (mobileBar && !mobileBar.querySelector(".hamburger")){
                   const dv = document.createElement("div")
                   dv.className = "hamburger";
                   dv.setAttribute("aria-label", "Toggle menu");
                   dv.setAttribute("tabindex", "0");
                   dv.innerHTML = '<span></span>';
                   mobileBar.appendChild(dv)


                   dv.addEventListener("click", function(e){
                      e.stopPropagation();
                      menu.classList.toggle("mobile-open");
                   });
                }
                // sabse pehle --> menu items nikalne padenge
			const menuList = document.querySelectorAll(".menu .menubar ul li");
			
			menuList.forEach(li => {
				// second step --> voh menu items filter karna jisme submenu ho
				const submenuExists = li.querySelectorAll(".submenu");
				if (submenuExists) {
					// third step --> identify karna jis menu item pr click hua ho
					const toggle = document.createElement("button");
					toggle.className = "submenu-toggle";
					toggle.setAttribute("aria-expanded", "false");
					toggle.innerHTML = '<span style="display:inline-block; transform:rotate(90deeg);">&#9656;</span>';

					// dummy li add in the end of the list
					const firstLink = li.querySelector("a");
					firstLink.after(toggle);

					// fifth step --> submenu display karna jo menu item click hua ho
					toggle.addEventListener("click", function (ev) {
						ev.stopPropagation();
						const isOpen = li.classList.toggle("open-submenu");
						toggle.setAttribute("aria-expanded", isOpen? "true" : "false");
					});
					// fouth step --> close already open / close all submenu
					
				}
			});
           }
       });
    });
