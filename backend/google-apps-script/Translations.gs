function getTranslations() {
  return {
    en: {
      success: {
        title: "RSVP Submitted Successfully!",
        subtitle: "Thank you for your response. We're excited to celebrate with you!",
        updateTitle: "RSVP Updated Successfully!",
        updateSubtitle: "Your RSVP information has been successfully updated.",
        updateNotice: "Your previous RSVP has been updated with the new information.",
        submissionId: "Submission ID:",
        detailsHeader: "Your Details",
        guestOf: "Guest of:",
        groom: "Groom",
        bride: "Bride", 
        name: "Name:",
        furigana: "Furigana:",
        email: "Email:",
        phone: "Phone:",
        address: "Address:",
        dietary: "Dietary:",
        message: "Message:",
        closeTab: "Close Tab",
        print: "Print",
        footer: {
          changes: "If you need to make changes, please contact us directly.",
          confirmation: "We'll send a confirmation email shortly.",
          celebration: "🍁 Thank you for being part of our autumn celebration 🍂"
        }
      },

      error: {
        title: "Submission Error",
        subtitle: "We encountered an issue while processing your RSVP.",
        errorDetails: "🍂 Error Details",
        errorGeneric: "An error occurred while processing your request.",
        goBack: "Go Back & Retry",
        closeTab: "Close Tab",
        footer: {
          tryAgain: "Please try again or contact us directly if the problem persists.",
          contactHeader: "📞 Contact Information",
          email: "Email: rezi.rusnadi94@gmail.com",
          phone: "Phone: +818071811500",
          apology: "🍁 We apologize for any inconvenience 🍂"
        }
      },

      common: {
        loading: "Loading...",
        close: "Close",
        confirm: "Close this window?"
      }
    },
    
    ja: {
      success: {
        title: "送信完了！",
        subtitle: "ご出席の確認をいただき、ありがとうございます",
        updateTitle: "更新完了！",
        updateSubtitle: "情報が正常に更新されました。",
        updateNotice: "新しい情報で更新されました。",
        submissionId: "提出ID:",
        detailsHeader: "ご詳細",
        guestOf: "ゲスト:",
        groom: "新郎側",
        bride: "新婦側",
        name: "お名前:",
        furigana: "フリガナ:",
        email: "メールアドレス:",
        phone: "電話番号:",
        address: "住所:",
        dietary: "食事制限:",
        message: "メッセージ:",
        closeTab: "タブを閉じる",
        print: "印刷",
        footer: {
          changes: "変更が必要でしたら、直接ご連絡ください。",
          confirmation: "確認メールを間もなくお送りいたします。",
          celebration: "🍁 秋の祝いの席にご参加いただき、ありがとうございます 🍂"
        }
      },
      
      // Error Page  
      error: {
        title: "送信エラー",
        subtitle: "送信エラーが発生しました",
        errorDetails: "🍂 エラー詳細",
        errorGeneric: "申し訳ございませんが、エラーが発生しました",
        goBack: "戻る",
        closeTab: "閉じる",
        footer: {
          tryAgain: "問題が解決しない場合は、直接ご連絡ください。",
          contactHeader: "📞 連絡先",
          email: "メール: rezi.rusnadi94@gmail.com",
          phone: "電話: +818071811500",
          apology: "🍁 ご不便をおかけして申し訳ございません 🍂"
        }
      },
      
      // Common
      common: {
        loading: "読み込み中...",
        close: "閉じる",
        confirm: "このウィンドウを閉じますか？"
      }
    }
  };
}

// Get translation by key and language
function getTranslation(key, lang = 'en') {
  const translations = getTranslations();
  const langData = translations[lang] || translations['en'];
  
  // Support nested keys like 'success.title'
  const keys = key.split('.');
  let value = langData;
  
  for (const k of keys) {
    value = value[k];
    if (value === undefined) {
      // Fallback to English if Japanese translation is missing
      if (lang === 'ja') {
        return getTranslation(key, 'en');
      }
      return key; // Return key if no translation found
    }
  }
  
  return value;
}

// Detect language from browser or default to English
function detectLanguage(acceptLanguage = '') {
  if (acceptLanguage.includes('ja') || acceptLanguage.includes('JP')) {
    return 'ja';
  }
  return 'en';
}

// Get error message translation
function getErrorMessage(errorKey, lang = 'en') {
  const errorMessages = {
    en: {
      'firstNameFurigana is required': 'First name furigana is required',
      'lastNameFurigana is required': 'Last name furigana is required',
      'firstName is required': 'First name is required',
      'lastName is required': 'Last name is required',
      'email is required': 'Email address is required',
      'guestType is required': 'Please select guest type',
      'Invalid email format': 'Invalid email format',
      'Failed to save data': 'Failed to save data',
      'Internal server error': 'Internal server error occurred',
      'Spreadsheet access denied': 'Unable to access spreadsheet'
    },
    ja: {
      'firstNameFurigana is required': '名前のフリガナの入力が必要です',
      'lastNameFurigana is required': '姓のフリガナの入力が必要です', 
      'firstName is required': '名前の入力が必要です',
      'lastName is required': '姓の入力が必要です',
      'email is required': 'メールアドレスの入力が必要です',
      'guestType is required': 'ゲストタイプの選択が必要です',
      'Invalid email format': '無効なメール形式です',
      'Failed to save data': 'データ保存に失敗しました',
      'Internal server error': '内部サーバーエラーが発生しました',
      'Spreadsheet access denied': 'スプレッドシートアクセスが拒否されました'
    }
  };
  
  const langData = errorMessages[lang] || errorMessages['en'];
  return langData[errorKey] || errorKey;
} 