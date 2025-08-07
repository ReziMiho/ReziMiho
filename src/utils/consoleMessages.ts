export const displayWelcomeMessage = () => {
  console.log('%c' + 
    '╔══════════════════════════════════════════════════════════════╗\n' +
    '║                      REZI & MIHO WEDDING                     ║\n' +
    '║                                                              ║\n' +
    '║                Stop!, what are you doing here???             ║\n' +
    '║                                                              ║\n' +
    '╚══════════════════════════════════════════════════════════════╝', 
    'color: #ff6b9d; font-family: monospace; font-size: 12px; line-height: 1.2;'
  );
};

export const initializeConsoleMessages = () => {  
  displayWelcomeMessage();
}; 