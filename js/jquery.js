$(document).ready(function () {
  // Update the text and style of the h2 element
    $("h2").text("Featured Works (Updated by jQuery)").css("color", "#cc5500");
  // Create a toggle button with custom CSS and a click event handler
    const toggleBtn = $("<button>Toggle Gallery</button>")
      .css({
        margin: "20px 0",
        padding: "10px 15px",
        backgroundColor: "#555",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
      })
      .click(() => {
        $(".gallery-img").fadeToggle();
      });
      // Add the toggle button to the beginning of the .welcome-content element
    $(".welcome-content").prepend(toggleBtn);
  });
  