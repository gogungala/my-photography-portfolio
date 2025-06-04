document.addEventListener("DOMContentLoaded", () => {
  // Existing gallery functionality
  alert("Welcome to the gallery!");
  const heading = document.querySelector("h1");
  if (heading) {
    heading.textContent = "Explore Stunning Photography!";
  }
  const galleryImages = document.querySelectorAll(".gallery-img");
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      img.style.transform = "scale(1.2)";
      img.style.transition = "transform 0.3s";
      setTimeout(() => {
        img.style.transform = "scale(1)";
      }, 1000);
    });
  });
    
  // Task 3: Working with Arrays
  let categories = JSON.parse(localStorage.getItem("categories")) || ["Landscape", "Portrait", "Street", "Macro"];
  const categoryList = document.getElementById("categoryList");
  const newCategoryInput = document.getElementById("newCategory");
  const addCategoryBtn = document.getElementById("addCategoryBtn");

  function renderCategories() {
    categoryList.innerHTML = "";
    categories.forEach((category, index) => {
      const li = document.createElement("li");
      li.className = "category-item";
      li.innerHTML = `${category} <button class="delete-btn" data-index="${index}"><i class="fas fa-trash"></i></button>`;
      categoryList.appendChild(li);
    });
    localStorage.setItem("categories", JSON.stringify(categories));
  }

  renderCategories();

  addCategoryBtn.addEventListener("click", () => {
    const newCategory = newCategoryInput.value.trim();
    if (newCategory && !categories.includes(newCategory)) {
      categories.push(newCategory);
      renderCategories();
      newCategoryInput.value = "";
    }
  });

  categoryList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn") || e.target.classList.contains("fa-trash")) {
      const index = e.target.closest("button").getAttribute("data-index");
      categories.splice(index, 1);
      renderCategories();
    }
  });

  // Task 4: Interactivity with Loops
  const photoGrid = document.getElementById("photoGrid");
  const photoNames = [
    "Sunset Hills",
    "City Lights",
    "Mountain Mist",
    "Urban Shadows",
    "Ocean Waves",
    "Forest Path",
    "Night Sky",
    "Golden Fields",
    "Street Vibes",
    "Morning Dew"
  ];
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.className = "col-12 col-sm-6 col-lg-4 photo-item";
    div.style.backgroundColor = i % 2 === 0 ? "#e6f3e6" : "#e6f0ff";
    const img = document.createElement("img");
    img.src = `images/photo${i + 1}.webp`;
    img.alt = photoNames[i];
    img.className = "img-fluid";
    const p = document.createElement("p");
    p.textContent = photoNames[i];
    div.appendChild(img);
    div.appendChild(p);
    photoGrid.appendChild(div);
  }



    const OPENWEATHER_API_KEY = '5dc95d017466d2ed8ca00b06cc7fd44a'; 
    const CITY_NAME = 'Astana'; 

    const weatherCitySpan = document.getElementById('weather-city');
    const weatherTemperature = document.getElementById('weather-temperature');
    const weatherDescription = document.getElementById('weather-description');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherHumidity = document.getElementById('weather-humidity');
    const weatherWind = document.getElementById('weather-wind');
    const weatherError = document.getElementById('weather-error');

    async function fetchWeather() {
        if (!weatherCitySpan) return; // Exit if elements are not found 

        // Show loading state and hide error
        weatherCitySpan.textContent = CITY_NAME; // Set initial city name in the display
        weatherTemperature.textContent = 'Loading...';
        weatherDescription.textContent = '';
        weatherIcon.style.display = 'none'; // Hide icon during loading
        weatherHumidity.textContent = '';
        weatherWind.textContent = '';
        weatherError.style.display = 'none'; // Hide error message initially

        try {
            // API endpoint for current weather by city name
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=en`);

            if (!response.ok) {
                // Handle API errors 
                if (response.status === 401) {
                    throw new Error('Invalid API Key. Please check your OpenWeatherMap API key.');
                }
                if (response.status === 404) {
                    throw new Error(`City '${CITY_NAME}' not found.`);
                }
                throw new Error(`OpenWeather API error! Status: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();

            // Check if essential data is present in the API response
            if (data && data.main && data.weather && data.weather.length > 0) {
                weatherCitySpan.textContent = data.name; // Update city name from API response (could be slightly different)
                weatherTemperature.textContent = `${Math.round(data.main.temp)}°C`;
                // Capitalize the first letter of the weather description
                weatherDescription.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
                weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Construct icon URL
                weatherIcon.style.display = 'inline'; // Show the icon
                weatherHumidity.textContent = `Humidity: ${data.main.humidity}%`;
                weatherWind.textContent = `Wind: ${data.wind.speed} m/s`; // Wind speed in meters/second 

            } else {
                throw new Error('Invalid or incomplete weather data received from OpenWeatherMap.');
            }

        } catch (error) {
            console.error('Error fetching weather:', error);
            weatherError.textContent = `Error: ${error.message || 'Failed to load weather.'} Please check your API key and network connection.`;
            weatherError.style.display = 'block'; // Show error message to the user
            // Clear any partial data
            weatherTemperature.textContent = '';
            weatherDescription.textContent = '';
            weatherIcon.style.display = 'none';
            weatherHumidity.textContent = '';
            weatherWind.textContent = '';
            weatherCitySpan.textContent = 'Weather'; // Reset city to generic 'Weather'
        }
    }

    // Call the function to fetch weather data when the page loads
    fetchWeather();

  
//random image
    const PIXABAY_API_KEY = '50658818-b556d86018958e95b99306de3'; 
    // We'll search for a broad term and pick a random image from the results
    const PIXABAY_QUERY = 'photography'; // Can be 'landscape', 'portrait', 'nature', etc.
    const PIXABAY_PER_PAGE = 200; // Max results per page for better randomness

    const pixabayImage = document.getElementById('pixabay-image');
    const pixabayTags = document.getElementById('pixabay-tags');
    const pixabayPhotographer = document.getElementById('pixabay-photographer');
    const loadNewPixabayPhotoBtn = document.getElementById('load-new-pixabay-photo-btn');
    const pixabayError = document.getElementById('pixabay-error');

    async function fetchRandomPixabayPhoto() {
        if (!pixabayImage) return; // Exit if elements are not found

        // Show loading state and hide error
        pixabayImage.src = 'https://via.placeholder.com/600x400?text=Loading+Pixabay+Image...';
        pixabayTags.textContent = 'Loading...';
        pixabayPhotographer.textContent = '';
        pixabayError.style.display = 'none';

        try {
            // Fetch images from Pixabay based on query
            const response = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${PIXABAY_QUERY}&image_type=photo&orientation=horizontal&per_page=${PIXABAY_PER_PAGE}`);

            if (!response.ok) {
                if (response.status === 400) { // Bad request, often due to invalid key or parameters
                    throw new Error('Invalid Pixabay API Key or parameters. Please check your key and query.');
                }
                throw new Error(`Pixabay API error! Status: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();

            if (data.hits && data.hits.length > 0) {
                // Pick a random image from the results
                const randomIndex = Math.floor(Math.random() * data.hits.length);
                const photo = data.hits[randomIndex];

                // Update HTML elements with photo data
                pixabayImage.src = photo.webformatURL; 
                pixabayImage.alt = photo.tags || 'Pixabay Photo';
                pixabayTags.textContent = `Tags: ${photo.tags}`;
                
                // Attribution
                const photographerLink = document.createElement('a');
                photographerLink.href = photo.pageURL; // Link to the image's page on Pixabay
                photographerLink.target = '_blank';
                photographerLink.textContent = photo.user;
                
                pixabayPhotographer.innerHTML = ''; // Clear previous content
                pixabayPhotographer.appendChild(photographerLink);

            } else {
                throw new Error(`No images found for query: '${PIXABAY_QUERY}'. Try a different query.`);
            }

        } catch (error) {
            console.error('Error fetching Pixabay photo:', error);
            pixabayError.textContent = `Error: ${error.message || 'Failed to load photo.'} Please check your API key and network.`;
            pixabayError.style.display = 'block';
            // Reset image and text on error
            pixabayImage.src = 'https://via.placeholder.com/600x400?text=Error+Loading+Image';
            pixabayTags.textContent = 'Error loading photo.';
            pixabayPhotographer.textContent = '';
        }
    }

    // Load a photo immediately when the page loads
    fetchRandomPixabayPhoto();

    // Attach event listener to the button for loading new photos
    if (loadNewPixabayPhotoBtn) {
        loadNewPixabayPhotoBtn.addEventListener('click', fetchRandomPixabayPhoto);
    }

});
