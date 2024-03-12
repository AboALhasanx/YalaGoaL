  
  document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var leagueDropdown = document.getElementById('leagueDropdown');
  
    // Show dropdown when the search input is clicked
    searchInput.addEventListener('click', function(event) {
      leagueDropdown.style.display = 'block';
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
