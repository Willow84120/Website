
const darkModeStyles = `
  body {
    background-color: #121212;
    color: #ffffff;
  }
`;

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

function disableDarkMode() {
  const styleSheet = document.getElementById('dark-mode-styles');
  if (styleSheet) {
    styleSheet.remove();
  }
}

function setupDarkModeToggle() {
  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Activer le mode sombre';
  darkModeButton.style.position = 'fixed';
  darkModeButton.style.bottom = '10px';
  darkModeButton.style.right = '10px';
  darkModeButton.style.padding = '10px';
  darkModeButton.style.zIndex = '1000';

  let darkMode = false;

  darkModeButton.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
      enableDarkMode();
      darkModeButton.textContent = 'Désactiver le mode sombre';
    } else {
      disableDarkMode();
      darkModeButton.textContent = 'Activer le mode sombre';
    }
  });

  document.body.appendChild(darkModeButton);
}

window.addEventListener('DOMContentLoaded', setupDarkModeToggle);