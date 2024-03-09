document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class "live"
    var liveMatches = document.querySelectorAll('.live');
  
    // Iterate over each live match
    liveMatches.forEach(function(match) {
      // Generate random match time between 00:00 and 90:00
      var randomMinutes = Math.floor(Math.random() * 91);
      var randomSeconds = Math.floor(Math.random() * 60);
      var matchTime = (randomMinutes * 60) + randomSeconds; // Convert to seconds
  
      // Update the match time in the DOM
      var timeElement = match.querySelector('.time');
      timeElement.textContent = formatTime(matchTime);
  
      // Generate random home and away goals (0 to 5)
      var homeGoals = Math.floor(Math.random() * 6);
      var awayGoals = Math.floor(Math.random() * 6);
  
      // Update the home and away goals in the DOM
      var homeRsltElement = match.querySelector('.homeRslt');
      var awayRsltElement = match.querySelector('.awayRslt');
      homeRsltElement.textContent = homeGoals;
      awayRsltElement.textContent = awayGoals;
  
      // Increment time every second
      setInterval(function() {
        matchTime++;
        timeElement.textContent = formatTime(matchTime);
      }, 1000);
    });
  
    // Function to format time in MM:SS
    function formatTime(totalSeconds) {
      var minutes = Math.floor(totalSeconds / 60);
      var seconds = totalSeconds % 60;
      return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var leagueDropdown = document.getElementById('leagueDropdown');
  
    // Show dropdown when the search input is clicked
    searchInput.addEventListener('click', function(event) {
      leagueDropdown.style.display = 'block';
      event.stopPropagation(); // Prevent the click event from propagating to document
    });
  
    // Hide dropdown when user clicks outside the search input
    document.addEventListener('click', function(event) {
      if (!event.target.matches('#searchInput')) {
        leagueDropdown.style.display = 'none';
      }
    });
  
    // Handle clicking on league options
    leagueDropdown.addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
        var leagueId = event.target.getAttribute('href').substr(1); // Get the league ID
        var leagueSection = document.getElementById(leagueId);
        if (leagueSection) {
          leagueSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
