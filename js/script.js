

document.addEventListener("DOMContentLoaded", () => {
    //  Select and Style Elements
    const welcomeMessage = document.getElementById("welcomeMessage"); // getElementById
    const galleryImages = document.getElementsByClassName("gallery-img"); // getElementsByClassName
    const photoGrid = document.getElementById("photoGrid"); // Changed to target only the photo grid
  
    // Dynamically style elements
    welcomeMessage.style.backgroundColor = "#02315E"; // Change background color
    welcomeMessage.style.color = "white";
    for (let img of galleryImages) {
      img.parentElement.style.fontSize = "16px"; // Change font size of parent (caption area)
    }
    let isHidden = false;
    const togglePhotos = () => {
      photoGrid.style.display = isHidden ? "flex" : "none"; // Use "flex" to match Bootstrap row layout
      isHidden = !isHidden;
    };
  
    //  Manipulate Text Content
    const updateWelcome = () => {
      welcomeMessage.textContent = "Discover Amazing Photography!";
    };
    setTimeout(updateWelcome, 2000); // Change after 2 seconds
  
    // Modify HTML Attributes
    const socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
        link.setAttribute("href", "https://example.com"); // Update URL on hover
      });
      link.addEventListener("mouseout", () => {
        link.setAttribute("href", "#"); // Reset on mouseout
      });
    });
  
    //Add Event Listeners to Buttons
    const togglePhotosBtn = document.getElementById("togglePhotosBtn");
    const playSoundBtn = document.getElementById("playSoundBtn");
  
    togglePhotosBtn.addEventListener("dblclick", togglePhotos); // Double click to toggle
  
    playSoundBtn.addEventListener("click", () => {
      const audio = new Audio("audio/click.mp3");
      audio.play().catch(error => console.log("Audio play failed:", error));
    });
  
    //  Higher-Order Functions
    const handleInteraction = (callback) => {
      return () => callback();
    };
    const updateMessageOnClick = handleInteraction(() => {
      welcomeMessage.textContent = "Interactive Photography Experience!";
    });
    togglePhotosBtn.addEventListener("click", updateMessageOnClick);
  
    // Handled above with playSoundBtn
  
    // Use JavaScript Objects
    const photoEvent = {
      title: "Photography Exhibition",
      date: "2025-05-10",
      updateTitle: function(newTitle) {
        this.title = newTitle;
        welcomeMessage.textContent = `Welcome to My ${this.title} Website`;
      }
    };
    playSoundBtn.addEventListener("click", () => {
      photoEvent.updateTitle("Sound-Enhanced Gallery");
    });
  });