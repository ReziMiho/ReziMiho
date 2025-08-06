// Create a beautiful success page with language support
function createSuccessPage(submissionId, data, acceptLanguage = '', updated = false) {
    const lang = detectLanguage(acceptLanguage);
    const t = (key) => getTranslation(key, lang);
    
    // Choose appropriate titles and messages based on whether this was an update or new submission
    const pageTitle = updated ? t('success.updateTitle') || 'RSVP Updated Successfully' : t('success.title');
    const pageSubtitle = updated ? t('success.updateSubtitle') || 'Your RSVP information has been successfully updated.' : t('success.subtitle');
    const successIcon = '🎉';
    
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${updated ? 'RSVP Updated Successfully' : 'RSVP Submitted Successfully'}</title>
        <style>
          /* Wedding Elegance Theme for Wedding RSVP Success Page */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Hiragino Sans', 'Yu Gothic', 'Meiryo', 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #FFFAF0 0%, #F7FAFC 25%, #E2E8F0 50%, #A0AEC0 75%, #2D3748 100%);
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
          
          .floating-heart {
            position: absolute;
            color: rgba(251, 187, 206, 0.3);
            font-size: 2rem;
            animation: float 6s ease-in-out infinite;
          }
          
          .floating-heart:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
          .floating-heart:nth-child(2) { top: 20%; right: 15%; animation-delay: 2s; }
          .floating-heart:nth-child(3) { bottom: 20%; left: 20%; animation-delay: 4s; }
          .floating-heart:nth-child(4) { bottom: 10%; right: 10%; animation-delay: 1s; }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          .container {
            background: rgba(255, 250, 240, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(251, 187, 206, 0.3);
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(45, 55, 72, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2);
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
          
          .success-icon {
            font-size: 4rem;
            background: linear-gradient(45deg, #68D391, #9AE6B4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
            animation: pulse 1.5s infinite;
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          h1 {
            color: #2D3748;
            margin-bottom: 1rem;
            font-size: 2.25rem;
            font-weight: 700;
            font-family: 'Yu Mincho', 'Times New Roman', serif;
            line-height: 1.2;
          }
          
          h2 {
            color: #4A5568;
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
            font-weight: 500;
          }
          
          .submission-id {
            background: #F7FAFC;
            border: 1px solid #9AE6B4;
            border-left: 4px solid #68D391;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1.5rem;
          }
          
          .submission-id-title {
            color: #2D3748;
            font-weight: 700;
            font-size: 1.125rem;
          }
          
          .submission-id-japanese {
            color: #4A5568;
            font-size: 0.875rem;
            margin-top: 0.25rem;
          }
          
          .details {
            background: #FFFAF0;
            border: 1px solid #FAF089;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin-bottom: 2rem;
            text-align: left;
          }
          
          .details h3 {
            color: #2D3748;
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            text-align: center;
            font-family: 'Yu Mincho', 'Times New Roman', serif;
          }
          
          .detail-item {
            margin: 0.75rem 0;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #FAF089;
          }
          
          .detail-label {
            font-weight: 700;
            color: #4A5568;
            display: inline-block;
            min-width: 8rem;
          }
          
          .detail-value {
            color: #2D3748;
          }
          
          .buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }
          
          .btn {
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
          
          .btn:hover {
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
          
          .footer .text-xs {
            font-size: 0.75rem;
          }
          
          .footer .text-champagne {
            color: #B7791F;
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
            
            .success-icon {
              font-size: 5rem;
              margin-bottom: 1.5rem;
            }
            
            .details {
              padding: 1.5rem;
              margin-bottom: 2rem;
            }
            
            .details h3 {
              font-size: 1.5rem;
              margin-bottom: 1rem;
            }
            
            .detail-item {
              margin: 0.75rem 0;
              padding-bottom: 0.75rem;
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }
            
            .detail-label {
              min-width: auto;
              font-size: 1.125rem;
              font-weight: 700;
            }
            
            .detail-value {
              font-size: 1.125rem;
              word-break: break-word;
            }
            
            .buttons {
              flex-direction: column;
              gap: 1rem;
              margin-bottom: 2rem;
            }
            
            .btn {
              width: 100%;
              padding: 1.25rem 2rem;
              font-size: 1.25rem;
            }
            
            .submission-id {
              padding: 1.25rem;
              margin-bottom: 1.5rem;
            }
            
            .submission-id-title {
              font-size: 1.25rem;
            }
            
            .submission-id-japanese {
              font-size: 1rem;
            }
            
            p {
              font-size: 1.125rem;
              line-height: 1.6;
            }
            
            /* Reduce floating elements on mobile for better performance */
            .floating-heart {
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
            
            .success-icon {
              font-size: 4rem;
            }
            
            .details {
              padding: 1.25rem;
            }
            
            .details h3 {
              font-size: 1.25rem;
            }
            
            .detail-item {
              margin: 0.625rem 0;
              padding-bottom: 0.625rem;
            }
            
            .detail-label,
            .detail-value {
              font-size: 1rem;
            }
            
            .btn {
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
        <!-- Floating Hearts -->
        <div class="floating-heart">💖</div>
        <div class="floating-heart">💕</div>
        <div class="floating-heart">💖</div>
        <div class="floating-heart">💕</div>
  
        <div class="container">
          <div class="success-icon">${successIcon}</div>
          <h1>${pageTitle}</h1>
          <p style="color: #4A5568; margin-bottom: 2rem;">${pageSubtitle}</p>
          
          ${updated ? `
          <div style="background: #FEF5E7; border: 1px solid #F6AD55; border-left: 4px solid #ED8936; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
            <p style="color: #C05621; font-weight: 600; margin: 0;">${t('success.updateNotice') || 'Your previous RSVP has been updated with the new information.'}</p>
          </div>
          ` : ''}
          
          <div class="details">
            <h3>${t('success.detailsHeader')}</h3>
            <div class="detail-item">
              <span class="detail-label">${t('success.guestOf')}</span>
              <span class="detail-value">${data.guestType === 'groom' ? t('success.groom') : t('success.bride')}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">${t('success.name')}</span>
              <span class="detail-value">${data.firstName} ${data.lastName}</span>
            </div>
            ${data.firstNameFurigana ? `
            <div class="detail-item">
              <span class="detail-label">${t('success.furigana')}</span>
              <span class="detail-value">${data.firstNameFurigana} ${data.lastNameFurigana ? data.lastNameFurigana : ''}</span>
            </div>
            ` : ''}
            ${data.email ? `
            <div class="detail-item">
              <span class="detail-label">${t('success.email')}</span>
              <span class="detail-value">${data.email}</span>
            </div>
            ` : ''}
            ${data.phone ? `
            <div class="detail-item">
              <span class="detail-label">${t('success.phone')}</span>
              <span class="detail-value">${data.phone}</span>
            </div>
            ` : ''}
            ${data.address ? `
            <div class="detail-item">
              <span class="detail-label">${t('success.address')}</span>
              <span class="detail-value">${data.address}</span>
            </div>
            ` : ''}
            ${data.dietary ? `
            <div class="detail-item">
              <span class="detail-label">${t('success.dietary')}</span>
              <span class="detail-value">${data.dietary}</span>
            </div>
            ` : ''}
            ${data.message ? `
            <div class="detail-item">
              <span class="detail-label">${t('success.message')}</span>
              <span class="detail-value">${data.message}</span>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
      </html>
    `;
  
  return HtmlService.createHtmlOutput(html)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('RSVP Success');
}
