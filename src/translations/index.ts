export type Language = 'en' | 'ja'
export type Role = 'family' | 'friends'

export interface Translations {
  // Role Selection
  familyOption: string
  friendsOption: string
  familyDescription: string
  friendsDescription: string

  // Navigation
  menu: string
  countdown: string
  message: string
  partyInfo: string
  rsvp: string

  // Hero Section
  coupleNames: string

  // Countdown Section
  countdownTitle: string
  days: string
  toOurWedding: string
  weddingDate: string

  // Message Section
  messageTitle: string
  messageParagraph1: string
  messageParagraph2: string
  messageParagraph3: string
  messageParagraph4: string
  messageParagraph5: string

  // Party Info Section
  partyInfoTitle: string
  date: string
  venueName: string
  venueAddress: string
  tel: string
  familySection: string
  friendsSection: string
  commonSection: string
  gatheringTime: string
  gatheringPlace: string
  familyGatheringPlace: string
  friendsGatheringPlace: string
  receptionStartTime: string
  venueLocation: string
  venueDetail: string

  // Venue Access Information
  venueAccessHelp: string
  venueAccessHelpDetail: string
  newOtaniAccessSite: string

  // RSVP Section
  rsvpTitle: string
  respondBy: string
  guestOf: string
  required: string
  groomGuest: string
  brideGuest: string
  name: string
  furigana: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  dietaryRequirements: string
  dietaryPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  sendRsvp: string
  submitting: string
  submitSuccess: string
  submitError: string
  submitRetry: string

  // Footer
  thankYou: string

  // Common
  language: string
}

export const translations: Record<Language, Translations> = {
  en: {
    familyOption: 'Family',
    friendsOption: 'Friends',
    familyDescription: 'For family members',
    friendsDescription: 'For friends and acquaintances',

    // Navigation
    menu: 'Menu',
    countdown: 'Countdown',
    message: 'Message',
    partyInfo: 'Party Info',
    rsvp: 'RSVP',

    // Hero Section
    coupleNames: 'Rezi & Miho',

    // Countdown Section
    countdownTitle: 'Countdown',
    days: 'days',
    toOurWedding: 'to our Wedding',
    weddingDate: '2025.10.12 (Sun)',

    // Message Section
    messageTitle: 'Message',
    messageParagraph1: 'We are pleased to announce that',
    messageParagraph2: 'in celebration of our marriage we will be holding a wedding reception to express our heartfelt gratitude',
    messageParagraph3: '',
    messageParagraph4: '',
    messageParagraph5: 'we understand that everyone is very busy, but it would mean a lot to us if you could attend',

    // Party Info Section
    partyInfoTitle: 'Party Information',
    date: 'Date',
    venueName: 'Hotel New Otani Tokyo',
    venueAddress: '4-1 Kioicho, Chiyoda City, Tokyo 102-8578',
    tel: '+813-3265-1111',
    familySection: 'For Family Members',
    friendsSection: 'For Friends',
    commonSection: 'Common Information',
    gatheringTime: 'Gathering Time',
    gatheringPlace: 'Gathering Place',
    familyGatheringPlace: 'The Main Arcade Floor (B1) Family Waiting Room',
    friendsGatheringPlace: 'Hō Hall Reception',
    receptionStartTime: 'Reception Start Time',
    venueLocation: 'Venue',
    venueDetail: 'Hō (East) Garden Tower Banquet Hall Floor (5th Floor)',
    venueAccessHelp: 'Hotel Floor Map',
    venueAccessHelpDetail: 'Please use the following link for the hotel floor map.',
    newOtaniAccessSite: 'New Otani Digital Map',

    // RSVP Section
    rsvpTitle: 'JOIN US',
    respondBy: 'Please respond by September 15th, 2025',
    guestOf: 'Guest of',
    required: '*',
    groomGuest: 'Groom Guest',
    brideGuest: 'Bride Guest',
    name: 'Name',
    furigana: 'Furigana',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phoneNumber: 'Phone Number',
    dietaryRequirements: 'Dietary Requirements',
    dietaryPlaceholder: 'Please let us know about any allergies or dietary restrictions...',
    messageLabel: 'Message',
    messagePlaceholder: 'Share your excitement or any special message...',
    sendRsvp: 'Send RSVP',
    submitting: 'Submitting...',
    submitSuccess: 'Redirecting to confirmation page...',
    submitError: 'Sorry, there was an error submitting your RSVP. Please check the required fields and try again.',
    submitRetry: 'Retry Submission',

    // Footer
    thankYou: 'Thank You',

    // Common
    language: 'Language',
  },

  ja: {
    familyOption: '家族',
    friendsOption: '友人',
    familyDescription: 'ご親族の皆様へ',
    friendsDescription: 'ご友人と知り合いの皆様へ',

    // Navigation
    menu: 'メニュー',
    countdown: 'Countdown',
    message: 'ご挨拶',
    partyInfo: 'パーティーのご案内',
    rsvp: '御出欠について',

    // Hero Section
    coupleNames: 'Rezi & Miho',

    // Countdown Section
    countdownTitle: 'Countdown',
    days: '日',
    toOurWedding: '結婚披露宴まで',
    weddingDate: '2025年10月12日（日）',

    // Message Section
    messageTitle: 'ご挨拶',
    messageParagraph1: '皆さまいかがお過ごしでしょうか',
    messageParagraph2: 'このたび私たちは結婚に際し　感謝の気持ちを込めて披露宴を開催することとなりました',
    messageParagraph3: '',
    messageParagraph4: '',
    messageParagraph5: 'ご多用中誠に恐縮ではございますが　ご出席を賜れましたら幸いです',

    // Party Info Section
    partyInfoTitle: '披露宴のご案内',
    date: '開催日',
    venueName: 'ホテル ニューオータニ （東京）',
    venueAddress: '〒102-8578 東京都千代田区紀尾井町4-1',
    tel: '03-3265-1111',
    familySection: 'ご親族様用',
    friendsSection: 'ご友人様用',
    commonSection: '共通ご案内事項',
    gatheringTime: '集合時間',
    gatheringPlace: '集合場所',
    familyGatheringPlace: 'ザ・メインアーケード階(地下1階)親族控室',
    friendsGatheringPlace: '鳳凰の間受付',
    receptionStartTime: '披露宴開宴時間',
    venueLocation: '会場',
    venueDetail: '鳳凰の間(東)ガーデンタワー宴会場階(5階)',

    venueAccessHelp: '会場案内',
    venueAccessHelpDetail: 'ホテル館内図として以下リンクをご活用くださいませ',
    newOtaniAccessSite: 'ニューオータニ 館内案内デジタルマップ',

    // RSVP Section
    rsvpTitle: 'JOIN US',
    respondBy: '9月15日迄にご返答をお願いいたします。',
    guestOf: 'いずれかをお選びください',
    required: '*は必須項目です',
    groomGuest: '新郎ゲスト',
    brideGuest: '新婦ゲスト',
    name: 'お名前',
    furigana: 'フリガナ',
    firstName: '姓',
    lastName: '名',
    email: 'メールアドレス',
    phoneNumber: '電話番号',
    dietaryRequirements: 'アレルギーについて',
    dietaryPlaceholder: 'アレルギーなど食べられないものがございましたら、専用フォームでご回答ください。',
    messageLabel: 'メッセージ',
    messagePlaceholder: 'ご自由にお書きください',
    sendRsvp: '送信',
    submitting: '送信中...',
    submitSuccess: '確認ページに移動中...',
    submitError: '申し訳ございません。送信中にエラーが発生しました。必須項目をご確認の上、もう一度お試しください。',
    submitRetry: '再送信',

    // Footer
    thankYou: 'ありがとうございます',

    // Common
    language: '言語',
  },
} 