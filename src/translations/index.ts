export type Language = 'en' | 'ja'

export interface Translations {
  // Language Selection
  languageSelection: string
  selectLanguage: string
  englishOption: string
  japaneseOption: string
  continueButton: string

  // Navigation
  menu: string
  countdown: string
  message: string
  profile: string
  gallery: string
  partyInfo: string
  rsvp: string

  // Hero Section
  coupleNames: string
  subtitle: string
  requestPleasure: string
  celebrationOfMarriage: string

  // Countdown Section
  countdownTitle: string
  days: string
  hours: string
  minutes: string
  seconds: string
  toOurWedding: string
  weddingDate: string

  // Message Section
  messageTitle: string
  messageParagraph1: string
  messageParagraph2: string
  messageParagraph3: string
  messageParagraph4: string

  // Profile Section
  profileTitle: string
  groom: string
  bride: string
  groomName: string
  brideName: string
  groomMessage: string
  brideMessage: string

  // Gallery Section
  galleryTitle: string
  morePhotos: string

  // Party Info Section
  partyInfoTitle: string
  partyInfoSubtitle: string
  date: string
  dateValue: string
  reception: string
  startTime: string
  receptionTime: string
  endTime: string
  venueInfo: string
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

  // RSVP Section
  rsvpTitle: string
  rsvpSubtitle: string
  respondBy: string
  receptionTitle: string
  attend: string
  decline: string
  hold: string
  attendJa: string
  declineJa: string
  holdJa: string
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
  previewNote: string
  contactDirectly: string
  submitting: string
  submitSuccess: string
  submitError: string
  submitRetry: string

  // Details Section
  dayOfWeek: string
  venue: string

  // Footer
  thankYou: string
  footerMessage: string
  withLove: string
  dateReminder: string

  // Common
  loading: string
  submit: string
  cancel: string
  close: string
  language: string
}

export const translations: Record<Language, Translations> = {
  en: {
    // Language Selection
    languageSelection: 'Welcome',
    selectLanguage: 'Please select your preferred language',
    englishOption: 'English',
    japaneseOption: '日本語',
    continueButton: 'Continue',

    // Navigation
    menu: 'Menu',
    countdown: 'Countdown',
    message: 'Message',
    profile: 'Profile',
    gallery: 'Gallery',
    partyInfo: 'Party Info',
    rsvp: 'RSVP',

    // Hero Section
    coupleNames: 'Rezi & Miho',
    subtitle: 'Together with their families',
    requestPleasure: 'request the pleasure of your company',
    celebrationOfMarriage: 'at the celebration of their marriage',

    // Countdown Section
    countdownTitle: 'Count Down',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    toOurWedding: 'to our Wedding',
    weddingDate: '2025.10.12',

    // Message Section
    messageTitle: 'Message',
    messageParagraph1: 'Dear friends and family,',
    messageParagraph2: 'We are delighted to invite you to celebrate our wedding day with us. Your presence would make our special day even more meaningful and joyful.',
    messageParagraph3: 'We look forward to sharing this wonderful moment with the people we love most, creating memories that will last a lifetime.',
    messageParagraph4: 'Thank you for being such an important part of our journey together.',

    // Profile Section
    profileTitle: 'Profile',
    groom: 'Groom',
    bride: 'Bride',
    groomName: 'Rezi',
    brideName: 'Miho',
    groomMessage: 'Thank you all for being such wonderful friends and family. I\'m excited to share this special day with everyone! Looking forward to celebrating with delicious food and great company.',
    brideMessage: 'Thank you for always supporting us and being there for us! We\'re so grateful to have you in our lives. We look forward to continuing this journey together as a married couple.',

    // Gallery Section
    galleryTitle: 'Album',
    morePhotos: 'More photos will be shared after our special day! 📸',

    // Party Info Section
    partyInfoTitle: 'Party Information',
    partyInfoSubtitle: 'パーティーのご案内',
    date: 'Date',
    dateValue: 'October 12th, 2025 Sunday',
    reception: 'Reception',
    startTime: 'Start Time',
    receptionTime: 'Reception',
    endTime: 'End',
    venueInfo: 'Venue Information',
    venueName: 'Hotel New Otani Tokyo',
    venueAddress: '4-1 Kioicho, Chiyoda City, Tokyo 102-8578',
    tel: '+813-3265-1111',
    familySection: 'For Family Members',
    friendsSection: 'For Friends',
    commonSection: 'Common Information',
    gatheringTime: 'Gathering Time',
    gatheringPlace: 'Gathering Place',
    familyGatheringPlace: 'The Main Arcade Floor (B1) Family Waiting Room',
    friendsGatheringPlace: 'Phoenix Hall Reception',
    receptionStartTime: 'Reception Start Time',
    venueLocation: 'Venue',
    venueDetail: 'Phoenix Hall (East) Garden Tower Banquet Hall Floor (5th Floor)',

    // RSVP Section
    rsvpTitle: 'R S V P',
    rsvpSubtitle: '御出欠について',
    respondBy: 'Please respond by September 15th, 2025',
    receptionTitle: 'Reception',
    attend: 'Attend',
    decline: 'Decline',
    hold: 'Hold',
    attendJa: 'ご出席',
    declineJa: 'ご欠席',
    holdJa: '保留',
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
    previewNote: '※This is a preview - responses are not actually sent',
    contactDirectly: 'If plans change, please contact us directly:',
    submitting: 'Submitting...',
    submitSuccess: 'Redirecting to confirmation page...',
    submitError: 'Sorry, there was an error submitting your RSVP. Please try again.',
    submitRetry: 'Retry Submission',

    // Details Section
    dayOfWeek: 'Sunday',
    venue: 'Venue',


    // Footer
    thankYou: 'Thank You',
    footerMessage: 'Your presence is the greatest gift we could ask for. We look forward to celebrating love, laughter, and happily ever after with you.',
    withLove: 'With love,',
    dateReminder: 'October 12th, 2025 • Garden Grove Estate',

    // Common
    loading: 'Loading...',
    submit: 'Submit',
    cancel: 'Cancel',
    close: 'Close',
    language: 'Language',
  },

  ja: {
    // Language Selection
    languageSelection: 'ようこそ',
    selectLanguage: 'ご希望の言語をお選びください',
    englishOption: 'English',
    japaneseOption: '日本語',
    continueButton: '続行',

    // Navigation
    menu: 'メニュー',
    countdown: 'カウントダウン',
    message: 'ご挨拶',
    profile: '新郎新婦',
    gallery: 'アルバム',
    partyInfo: 'パーティーのご案内',
    rsvp: '御出欠について',

    // Hero Section
    coupleNames: 'Rezi & Miho',
    subtitle: 'ご家族とともに',
    requestPleasure: 'ご招待申し上げます',
    celebrationOfMarriage: '結婚式のお祝いに',

    // Countdown Section
    countdownTitle: 'カウントダウン',
    days: '日',
    hours: '時間',
    minutes: '分',
    seconds: '秒',
    toOurWedding: '結婚式まで',
    weddingDate: '2025年10月12日',

    // Message Section
    messageTitle: 'ご挨拶',
    messageParagraph1: '親愛なる友人・ご家族の皆様へ',
    messageParagraph2: '私たちの結婚式にご参加いただき、この特別な日を一緒にお祝いしていただけることを心より嬉しく思います。皆様のご参加により、この日がより意味深く、喜びに満ちたものになります。',
    messageParagraph3: '最も大切な人たちとこの素晴らしい瞬間を共有し、一生の思い出を作ることを楽しみにしています。',
    messageParagraph4: '私たちの人生の旅路において、このように大切な存在でいてくださり、ありがとうございます。',

    // Profile Section
    profileTitle: '新郎新婦',
    groom: '新郎',
    bride: '新婦',
    groomName: 'レジ',
    brideName: 'ミホ',
    groomMessage: 'いつも素晴らしい友人・家族でいてくださり、ありがとうございます。皆様とこの特別な日を共有できることを楽しみにしています！美味しい料理と素晴らしい仲間とのお祝いを心待ちにしています。',
    brideMessage: 'いつも私たちを支えてくださり、そばにいてくださって本当にありがとうございます！皆様が私たちの人生にいてくださることに心から感謝しています。夫婦として共にこの旅路を続けていくことを楽しみにしています。',

    // Gallery Section
    galleryTitle: 'アルバム',
    morePhotos: '特別な日の後に、より多くの写真を共有させていただきます！📸',

    // Party Info Section
    partyInfoTitle: 'パーティーのご案内',
    partyInfoSubtitle: 'Party Information',
    date: '開催日',
    dateValue: '2025年10月12日 日曜日',
    reception: '披露宴',
    startTime: '集合時間',
    receptionTime: '受付',
    endTime: '終了予定',
    venueInfo: '会場情報',
    venueName: 'ホテル ニューオタニ 東京',
    venueAddress: '〒102-8578 東京都千代田区紀尾井町4-1',
    tel: '03-3265-1111',
    familySection: '＜ご親族様用＞',
    friendsSection: '＜ご友人様用＞',
    commonSection: '＜共通ご案内事項＞',
    gatheringTime: '集合時間',
    gatheringPlace: '集合場所',
    familyGatheringPlace: 'ザ・メインアーケード階(地下1階)親族控室',
    friendsGatheringPlace: '鳳凰の間受付',
    receptionStartTime: '披露宴開宴時間',
    venueLocation: '会　　　場',
    venueDetail: '鳳凰の間(東)　ガーデンタワー宴会場階(5階)',

    // RSVP Section
    rsvpTitle: 'R S V P',
    rsvpSubtitle: '御出欠について',
    respondBy: '2025年9月15日までにご返答をお願いいたします',
    receptionTitle: '披露宴',
    attend: 'ご出席',
    decline: 'ご欠席',
    hold: '保留',
    attendJa: 'Attend',
    declineJa: 'Decline',
    holdJa: 'Hold',
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
    dietaryPlaceholder: 'アレルギーや食事制限がございましたらお知らせください...',
    messageLabel: 'メッセージ',
    messagePlaceholder: 'お祝いのメッセージやご感想をお聞かせください...',
    sendRsvp: '確認画面へ',
    previewNote: '※プレビューのため入力内容の送信はできません',
    contactDirectly: 'ご都合が変わりましたら直接ご連絡ください：',
    submitting: '送信中...',
    submitSuccess: '確認ページに移動中...',
    submitError: '申し訳ございません。送信中にエラーが発生しました。もう一度お試しください。',
    submitRetry: '再送信',

    // Details Section
    dayOfWeek: '日曜日',
    venue: '会場',

    // Footer
    thankYou: 'ありがとうございます',
    footerMessage: '皆様のご参加が私たちにとって最高の贈り物です。愛と笑い、そして永遠の幸せを皆様と分かち合えることを楽しみにしています。',
    withLove: '愛を込めて',
    dateReminder: '2025年10月12日 • ガーデン グローブ エステート',

    // Common
    loading: '読み込み中...',
    submit: '送信',
    cancel: 'キャンセル',
    close: '閉じる',
    language: '言語',
  },
} 