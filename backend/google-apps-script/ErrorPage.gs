// Create a beautiful error page with language support
function createErrorPage(errorMessage, acceptLanguage = '') {
  const lang = detectLanguage(acceptLanguage);
  const t = (key) => getTranslation(key, lang);
  const translatedError = getErrorMessage(errorMessage, lang);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>RSVP Submission Error</title>
      <style>
        /* 紅葉 Autumn Error Theme for Wedding RSVP */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Hiragino Sans', 'Yu Gothic', 'Meiryo', 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #991b1b 0%, #dc2626 25%, #ea580c 50%, #d97706 75%, #92400e 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          position: relative;
          font-size: 16px;
        }
        
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff10' fill-opacity='0.1'%3E%3Cpath d='M30 30c4.5-4.5 11.5-4.5 16 0s4.5 11.5 0 16-11.5 4.5-16 0-4.5-11.5 0-16zm-15-15c4.5-4.5 11.5-4.5 16 0s4.5 11.5 0 16-11.5 4.5-16 0-4.5-11.5 0-16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }
        
        .maple-leaf {
          position: absolute;
          color: rgba(255, 255, 255, 0.1);
          font-size: 2rem;
          animation: float 6s ease-in-out infinite;
        }
        
        .maple-leaf:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .maple-leaf:nth-child(2) { top: 20%; right: 15%; animation-delay: 2s; }
        .maple-leaf:nth-child(3) { bottom: 20%; left: 20%; animation-delay: 4s; }
        .maple-leaf:nth-child(4) { bottom: 10%; right: 10%; animation-delay: 1s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .container {
          background: rgba(255, 237, 213, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 191, 36, 0.3);
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          text-align: center;
          max-width: 32rem;
          width: 100%;
          animation: slideUp 0.6s ease-out;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .error-icon {
          font-size: 4rem;
          background: linear-gradient(45deg, #991b1b, #dc2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
        }
        
        h1 {
          color: #991b1b;
          margin-bottom: 1rem;
          font-size: 2.25rem;
          font-weight: 700;
          font-family: 'Yu Mincho', 'Times New Roman', serif;
          line-height: 1.2;
        }
        
        h2 {
          color: #9a3412;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          font-weight: 500;
        }
        
        .error-message {
          background: #fef2f2;
          border: 1px solid #f87171;
          border-left: 4px solid #f87171;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
        }
        
        .error-title {
          color: #7f1d1d;
          font-weight: 700;
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }
        
        .error-text {
          color: #991b1b;
          font-weight: 500;
        }
        
        .error-japanese {
          color: #b91c1c;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
        
        .buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(45deg, #dc2626, #ea580c);
          border: none;
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
          min-height: 44px;
          font-size: 1rem;
        }
        
        .btn-secondary {
          background: linear-gradient(45deg, #92400e, #a16207);
          border: none;
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(146, 64, 14, 0.3);
          min-height: 44px;
          font-size: 1rem;
        }
        
        .btn-primary:hover,
        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
        }
        
        .footer {
          color: #64748b;
          font-size: 0.875rem;
        }
        
        .footer p {
          margin: 0.5rem 0;
        }
        
        .footer .font-medium {
          font-weight: 500;
        }
        
        .footer .text-xs {
          font-size: 0.75rem;
        }
        
        .footer .contact-info {
          background: #fff7ed;
          border: 1px solid #fdba74;
          padding: 1rem;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
        
        .footer .contact-title {
          color: #9a3412;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        
        .footer .text-orange-800 {
          color: #9a3412;
        }

                 /* Mobile Optimizations */
         @media (max-width: 768px) {
           body {
             padding: 1rem;
             font-size: 18px;
           }
           
           .container {
             padding: 2rem;
             border-radius: 1rem;
             margin: 0;
             max-width: 90vw;
           }
           
           h1 {
             font-size: 2.5rem;
             margin-bottom: 1rem;
           }
           
           h2 {
             font-size: 1.25rem;
             margin-bottom: 1.5rem;
           }
           
           .error-icon {
             font-size: 5rem;
             margin-bottom: 1.5rem;
           }
           
           .error-message {
             padding: 1.5rem;
             margin-bottom: 2rem;
           }
           
           .error-title {
             font-size: 1.25rem;
             margin-bottom: 0.75rem;
           }
           
           .error-text {
             font-size: 1.125rem;
           }
           
           .error-japanese {
             font-size: 1rem;
           }
           
           .buttons {
             flex-direction: column;
             gap: 1rem;
             margin-bottom: 2rem;
           }
           
           .btn-primary,
           .btn-secondary {
             width: 100%;
             padding: 1.25rem 2rem;
             font-size: 1.25rem;
           }
           
           .footer {
             font-size: 1rem;
           }
           
           .footer .contact-info {
             padding: 1.25rem;
             margin: 1rem 0;
           }
           
           .footer .contact-title {
             font-size: 1.125rem;
             margin-bottom: 0.5rem;
           }
           
           p {
             font-size: 1.125rem;
             line-height: 1.6;
           }
          
          /* Reduce maple leaf animations on mobile for better performance */
          .maple-leaf {
            display: none;
          }
        }

                 @media (max-width: 480px) {
           body {
             padding: 0.75rem;
             font-size: 16px;
           }
           
           .container {
             padding: 1.5rem;
             border-radius: 0.75rem;
             max-width: 95vw;
           }
           
           h1 {
             font-size: 2rem;
           }
           
           .error-icon {
             font-size: 4rem;
           }
           
           .error-message {
             padding: 1.25rem;
           }
           
           .error-title {
             font-size: 1.125rem;
           }
           
           .error-text {
             font-size: 1rem;
           }
           
           .error-japanese {
             font-size: 0.9375rem;
           }
           
           .footer {
             font-size: 0.875rem;
           }
           
           .footer .contact-info {
             padding: 1rem;
           }
           
           .footer .contact-title {
             font-size: 1rem;
           }
           
           .btn-primary,
           .btn-secondary {
             padding: 1rem 1.5rem;
             font-size: 1.125rem;
           }
           
           p {
             font-size: 1rem;
           }
         }
      </style>
    </head>
    <body>
      <!-- Floating Maple Leaves -->
      <div class="maple-leaf">🍁</div>
      <div class="maple-leaf">🍂</div>
      <div class="maple-leaf">🍁</div>
      <div class="maple-leaf">🍂</div>

      <div class="container">
        <div class="error-icon">❌</div>
        <h1>${t('error.title')}</h1>
        ${lang === 'ja' ? `<h2>${t('error.subtitle')}</h2>` : ''}
        <p style="color: #475569; margin-bottom: 2rem;">${t('error.subtitle')}</p>
        
        <div class="error-message">
          <div class="error-title">${t('error.errorDetails')}</div>
          <div class="error-text">${translatedError}</div>
          ${lang === 'en' ? `<div class="error-japanese">${t('error.errorGeneric')}</div>` : ''}
        </div>
        
        <div class="footer">
          <p class="font-medium">${t('error.footer.tryAgain')}</p>
          <div class="contact-info">
            <p class="contact-title">${t('error.footer.contactHeader')}</p>
            <p style="color: #475569;">${t('error.footer.email')}</p>
            <p style="color: #475569;">${t('error.footer.phone')}</p>
          </div>
          <p class="text-orange-800">${t('error.footer.apology')}</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return HtmlService.createHtmlOutput(html)
    .setTitle('RSVP Error');
} 