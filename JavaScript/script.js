
function enableDarkMode() {
  let styleSheet = document.getElementById('dark-mode-styles');
  if (!styleSheet) {
    styleSheet = document.createElement('style');
    styleSheet.id = 'dark-mode-styles';
    styleSheet.type = 'text/css';
    styleSheet.innerText = darkModeStyles;
    document.head.appendChild(styleSheet);
  }
}


window.addEventListener('DOMContentLoaded', setupDarkModeToggle);