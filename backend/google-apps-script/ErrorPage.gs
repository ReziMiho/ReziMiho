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
        /* Wedding Elegance Error Theme for Wedding RSVP */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Hiragino Sans', 'Yu Gothic', 'Meiryo', 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 25%, #6b7280 50%, #4b5563 75%, #2D3748 100%);
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
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff08' fill-opacity='0.08'%3E%3Cpath d='M30 30c4.5-4.5 11.5-4.5 16 0s4.5 11.5 0 16-11.5 4.5-16 0-4.5-11.5 0-16zm-15-15c4.5-4.5 11.5-4.5 16 0s4.5 11.5 0 16-11.5 4.5-16 0-4.5-11.5 0-16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }
        
        .container {
          background: rgba(209, 213, 219, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(156, 163, 175, 0.3);
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(45, 55, 72, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          text-align: center;
          max-width: 32rem;
          width: 100%;
          animation: slideUp 0.6s ease-out;
        }
        
        h1 {
          color: #2D3748;
          margin-bottom: 1rem;
          font-size: 2.25rem;
          font-weight: 700;
          font-family: 'Yu Mincho', 'Times New Roman', serif;
          line-height: 1.2;
        }
        
        .error-message {
          background: #f3f4f6;
          border: 1px solid #9ca3af;
          border-left: 4px solid #F56565;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
        }
        
        .error-title {
          color: #2D3748;
          font-weight: 700;
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }
        
        .error-text {
          color: #4A5568;
          font-weight: 500;
        }
        
        .buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(45deg, #68D391, #9AE6B4);
          border: none;
          color: #2D3748;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(104, 211, 145, 0.3);
          min-height: 44px;
          font-size: 1rem;
        }
        
        .btn-secondary {
          background: linear-gradient(45deg, #A0AEC0, #CBD5E0);
          border: none;
          color: #2D3748;
          padding: 0.875rem 2rem;
          border-radius: 9999px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(160, 174, 192, 0.3);
          min-height: 44px;
          font-size: 1rem;
        }
        
        .btn-primary:hover,
        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(104, 211, 145, 0.4);
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
          
          .error-message {
            padding: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .error-text {
            font-size: 1.125rem;
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
          
          p {
            font-size: 1.125rem;
            line-height: 1.6;
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
          
          .error-message {
            padding: 1.25rem;
          }
          
          .error-text {
            font-size: 1rem;
          }
          
          .footer {
            font-size: 0.875rem;
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
      <div class="container">
        <h1>${t('error.title')}</h1>
        
        <div class="error-message">
          <div class="error-text">${translatedError}</div>
        </div>
        
        <div class="footer">
          <p class="font-medium">${t('error.footer.tryAgain')}</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return HtmlService.createHtmlOutput(html)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('RSVP Error');
} 