export type Lang = "en" | "id";

export type Stat = { value: string; label: string };
export type StatGroup = { title: string; stats: Stat[] };
/** A privacy policy section: paragraphs, plus an optional bullet list after them. */
export type PrivacySection = { heading: string; body: string[]; items?: string[] };

export const fundIds = ["most", "translation", "community", "discipleship"] as const;
export type FundId = (typeof fundIds)[number];

const en = {
  nav: {
    about: "About",
    work: "Our work",
    progress: "Progress",
    app: "Bible app",
    contact: "Contact",
    give: "Give now",
    menu: "Open menu",
    close: "Close menu",
    language: "Language",
  },
  hero: {
    kicker: "Shalom for every tribe",
    title: "God’s Word in the language each tribe understands best.",
    body: "Bahtraku works with churches and institutions across Indonesia to translate the Bible into mother tongues, disciple believers, and serve the welfare of every tribe.",
    primary: "Support a translation",
    secondary: "See our progress",
    photo: "Mother-tongue translators at work in a village",
  },
  progress: {
    title: "What God is doing through your gifts",
    asOf: "Figures as of September 2026",
    groups: [
      {
        title: "Bible translation",
         stats: [
          { value: "33", label: "languages active translation" },
          { value: "44", label: "languages with a published trial edition" },
          {
            value: "2",
            label: "languages completed old testament translation",
          },
          {
            value: "63",
            label: "languages completed new testament translation",
          },
        ],
      },
      {
        title: "Community development",
        stats: [
          { value: "2,553", label: "people trained in digital literacy" },
          { value: "105", label: "villages connected by satellite internet" },
          { value: "997+", label: "people benefiting from satellite internet" },
          { value: "900+", label: "people benefiting from water projects" },
        ],
      },
      // {
      //   title: "Discipleship with Thirdmill",
      //   stats: [
      //     { value: "4", label: "active Bible study groups" },
      //     { value: "2", label: "Bible study partnerships" },
      //   ],
      // },
    ] as StatGroup[],
  },
  about: {
    title: "Who we are",
     body: "Bahtraku, short for Bahasa Transformasi Suku, is a ministry foundation based in Jayapura, Papua, Indonesia. BAHTRAKU was established in 2020 during the COVID-19 pandemic with a vision to see every tribe experience the transforming power of God’s Word in their own language.",
    visionLabel: "Our vision",
    vision: "To bring Shalom to every tribe.",
    missionTitle: "Our mission",
    missions: [
      "Bible for every Tribe",
      "Disciples in every Tribe",
      "Striving for the well-being of every tribe",
    ],
  },
  work: {
    title: "How we serve",
    items: [
      {
        title: "Bible translation training",
        body: "We equip local believers with the skills to translate God’s Word into their heart languages, from first drafts to printed trial editions.",
        photo: "Translation workshop",
      },
      {
        title: "Open Bible education",
        body: "With Thirdmill, we help believers not only read the Bible but understand it and live it out each day.",
      },
      {
        title: "Community development",
        body: "Digital literacy training, satellite internet for remote villages, and clean water projects that help communities thrive.",
      },
    ],
  },
  app: {
    title: "Read the Bible in your own language",
    body: "The Alkitabku app puts the Scripture translated by mother-tongue translators in your pocket, so families and churches can read God’s Word in the language they understand best.",
    features: [
      "Read trial editions in your mother tongue",
      // "[Listen to audio Scripture]",
      "Download once and read without internet",
    ],
    android: "Get it on Google Play",
    // ios: "Download on the App Store",
    // web: "Read online",
    // soon: "Coming soon",
    shareTitle: "Share the app with someone",
    shareBody: "Send it to family, friends or your church group so more people can read the Word in their own language.",
    share: "Share",
    whatsapp: "Send on WhatsApp",
    copy: "Copy link",
    copied: "Link copied",
    shareText: "Read the Bible in your own language with the Bahtraku Bible app:",
    screenLang: "Batak Mandailing",
    screenBook: "Revelation 12:7",
  },
  give: {
    title: "Bring the Word closer to another tribe",
    body: "Your gift supports translators, printing, discipleship and community projects across Indonesia.",
    online: "Give online",
    bankLabel: "Bank transfer",
    usdLine: "US dollar (USD) account",
    idrLine: "Rupiah (IDR) account",
    qr: "QR code",
  },
  registered: {
    title: "Registered and accountable",
    body: "Bahtraku is a legally registered foundation and a member of recognised Christian bodies in Indonesia and Asia.",
    items: [
      "Indonesia Ministry of Law and Human Rights, No. AHU-0034498.AH.01.12 (2022)",
      "Indonesia Ministry of Religious Affairs, Director General for Guidance of the Christian Community, Letter No. 363 (2023)",
      "Registered member of the Indonesian Christian Council for Stewardship & Accountability (ICCSA) since 2023",
      "Fellowship of Indonesian Evangelical Churches and Institutions (PGLII)",
      "Associate member of the Asia Evangelical Alliance",
      "Indonesian Alliance for World Mission (ALUSIA)",
    ],
  },
  footer: {
    tagline: "Akselerasi Transformasi. Warm regards in Christ.",
    main: "Main office",
    branch: "Branch office",
    contact: "Contact",
    rights: "© 2026 Yayasan Bahasa Transformasi Suku",
    privacy: "Privacy Policy",
  },
  donate: {
    back: "Back to home",
    title: "Give the Word in a heart language",
    body: "Every gift supports mother-tongue translators, printed trial editions, discipleship and community projects across Indonesia.",
    step1: "1. How you’d like to give",
    methods: {
      midtrans: {
        label: "Give directly",
        via: "Midtrans",
        note: "Pay now by card, bank virtual account, QRIS or e-wallet. Gifts are in rupiah.",
        best: "Best for donors in Indonesia and card payments worldwide",
      },
      trustbridge: {
        label: "Give with a tax receipt",
        via: "TrustBridge",
        note: "Give through TrustBridge Global Foundation and receive a tax-deductible receipt. Gifts are in US dollars.",
        best: "Best for donors in the US and other partner countries",
      },
    },
    step2: "2. Your gift",
    once: "One time",
    monthly: "Monthly",
    other: "Other amount",
    otherPlaceholder: "Enter an amount",
    step3: "3. Where it goes",
    funds: {
      most: { label: "Where most needed", note: "Lets us respond quickly" },
      translation: { label: "Bible translation", note: "Translators and trial editions" },
      community: { label: "Community development", note: "Internet, water and digital literacy" },
      discipleship: { label: "Discipleship", note: "Bible study groups with Thirdmill" },
    } as Record<FundId, { label: string; note: string }>,
    step4: "4. Your details",
    name: "Full name",
    email: "Email for your receipt",
    trustInfo: "You’ll finish your gift on TrustBridge’s website. They issue your tax receipt and grant the gift to Bahtraku. Mention “Bahtraku” and your chosen fund in the gift note.",
    manual: "Prefer a manual transfer?",
    accountWord: "account",
    summary: "Your gift",
    everyMonth: "Every month",
    oneTime: "One time",
    to: "to",
    impact: {
      most: "Goes where the need is greatest across translation, discipleship and community work.",
      translation: "Helps a mother-tongue translator keep drafting and checking Scripture.",
      community: "Helps connect villages, train people in digital skills and bring clean water.",
      discipleship: "Helps Bible study groups grow into communities of true disciples.",
    } as Record<FundId, string>,
    payMidtrans: "Pay with Midtrans",
    payTrust: "Continue to TrustBridge",
    paying: "Opening secure payment…",
    trustMissing: "The TrustBridge giving link hasn’t been added yet.",
    monthlyNote: "For monthly gifts, we’ll email a reminder each month with a new payment link.",
    registeredNote: "Bahtraku is registered with the Ministry of Law and Human Rights (AHU-0034498.AH.01.12) and is an ICCSA member.",
    errors: {
      amount: "Enter an amount of at least",
      name: "Enter your name so we can prepare your receipt.",
      email: "Enter a valid email address for your receipt.",
      payment: "The payment couldn’t start. Check your connection and try again.",
      failed: "The payment didn’t go through. No money was taken; you can try again.",
    },
    done: {
      successTitle: "Thank you",
      successBody: "Your gift has been received. A receipt is on its way to your email.",
      pendingTitle: "Almost there",
      pendingBody: "Your gift is waiting for payment. Follow the instructions from Midtrans to finish, for example paying your virtual account number.",
      again: "Give another gift",
    },
  },
    privacy: {
    title: "Privacy Policy",
    updated: "Last updated: September 2026",
    intro: "Yayasan Bahasa Transformasi Suku (Bahtraku) respects your privacy. This policy explains what personal data we collect when you visit this website or give, how we use it, and the choices you have.",
    sections: [
      {
        heading: "What we collect",
        body: ["When you give directly through Midtrans, we collect:"],
        items: [
          "Your name and email address",
          "The amount of your gift, the fund you chose, and whether it is one-time or monthly",
          "The payment status Midtrans sends us (for example, paid or pending)",
        ],
      },
      {
        heading: "Payment details",
        body: [
          "Card numbers, bank account details and e-wallet details are entered on Midtrans’ secure payment page. Bahtraku never sees or stores them.",
          "If you give through TrustBridge Global Foundation, you give on TrustBridge’s own website and their privacy policy applies.",
        ],
      },
      {
        heading: "How we use your data",
        body: ["We use your data only to:"],
        items: [
          "Process your gift and send your receipt",
          "Thank you and, for monthly gifts, send a reminder with a payment link",
          "Keep financial records required for a registered foundation",
          "Send ministry updates, only if you have agreed to receive them",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "We share data only with the services that help us run this website and process gifts: Midtrans (PT Midtrans) for payments.",
        ],
      },
      // {
      //   heading: "Cookies and your browser",
      //   body: [
      //     "This website stores your language choice (English or Indonesian) in your own browser so it is remembered next time. We do not use advertising or tracking cookies. [Update this section if you add analytics.]",
      //   ],
      // },
      // {
      //   heading: "How long we keep it",
      //   body: ["We keep gift records for [number] years, as required for financial reporting, and then delete them."],
      // },
      // {
      //   heading: "Your rights",
      //   body: [
      //     "Under Indonesia’s Personal Data Protection Law (UU No. 27 Tahun 2022), you can ask to see the personal data we hold about you, correct it, delete it, or withdraw your consent to receive updates. Contact us using the details below and we will respond within [number] days.",
      //   ],
      // },
      {
        heading: "Photos and stories",
        body: [
          "People shown in photos and testimonies on this website have given their permission. If you appear on this site and want something removed, please contact us.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: ["If we change this policy, we will update it on this page and change the date at the top."],
      },
    ] as PrivacySection[],
    contactHeading: "Contact us",
    contactBody: "For any questions about your data, contact:",
  },
};

export type Dict = typeof en;

const id: Dict = {
  nav: {
    about: "Tentang",
    work: "Pelayanan",
    progress: "Perkembangan",
    app: "Aplikasi Alkitab",
    contact: "Kontak",
    give: "Berdonasi",
    menu: "Buka menu",
    close: "Tutup menu",
    language: "Bahasa",
  },
  hero: {
    kicker: "Shalom bagi setiap suku",
    title: "Firman Tuhan dalam bahasa yang paling dimengerti setiap suku.",
    body: "Bahtraku bekerja sama dengan gereja lokal dan lembaga di seluruh Indonesia untuk menerjemahkan Alkitab ke dalam bahasa ibu, memuridkan orang percaya, dan memajukan kesejahteraan setiap suku.",
    primary: "Dukung penerjemahan",
    secondary: "Lihat perkembangan",
    photo: "Penerjemah bahasa ibu sedang bekerja di kampung",
  },
  progress: {
    title: "Apa yang Tuhan kerjakan melalui dukungan Anda",
    asOf: "Data per September 2026",
    groups: [
      {
        title: "Penerjemahan Alkitab",
        stats: [
          { value: "33", label: "bahasa yang sedang aktif menerjemahkan" },
          {
            value: "44",
            label: "bahasa yang sudah meluncurkan edisi percobaan",
          },
          {
            value: "2",
            label: "bahasa yang sudah menyelesaikan terjemahan perjanjian lama",
          },
          {
            value: "63",
            label: "bahasa yang sudah menyelesaikan terjemahan perjanjian baru",
          },
        ],
      },
      {
        title: "Pengembangan masyarakat",
        stats: [
          { value: "2.553", label: "orang dilatih literasi digital" },
          { value: "105", label: "desa terhubung internet satelit" },
          { value: "997+", label: "penerima manfaat internet satelit" },
          { value: "900+", label: "penerima manfaat proyek air bersih" },
        ],
      },
      // {
      //   title: "Pemuridan bersama Thirdmill",
      //   stats: [
      //     { value: "4", label: "kelompok pendalaman Alkitab aktif" },
      //     { value: "2", label: "kemitraan pendalaman Alkitab" },
      //   ],
      // },
    ],
  },
  about: {
    title: "Siapa kami",
 body: "BAHTRAKU, singkatan dari Bahasa Transformasi Suku, adalah sebuah yayasan pelayanan yang berpusat di Jayapura, Papua, Indonesia. BAHTRAKU didirikan pada tahun 2020 di tengah pandemi COVID-19, dengan visi untuk melihat setiap suku mengalami kuasa firman Tuhan yang mentransformasi kehidupan mereka dalam bahasa mereka sendiri.",
    visionLabel: "Visi kami",
    vision: "Membawa Shalom ke setiap suku",
    missionTitle: "Misi kami",
    missions: [
      "Melibatkan, memberdayakan, dan memperlengkapi setiap orang percaya agar segera ada Alkitab di setiap suku.",
      "Memperlengkapi setiap orang percaya di setiap suku untuk menjadi murid Kristus yang sejati.",
      "Memajukan kesejahteraan setiap suku.",
    ],
  },
  work: {
    title: "Pelayanan Kami",
    items: [
      {
        title: "Pelatihan penerjemahan Alkitab",
        body: "Kami memperlengkapi orang percaya setempat untuk menerjemahkan Firman Tuhan ke dalam bahasa hati mereka, dari draf pertama hingga edisi uji coba tercetak.",
        photo: "Lokakarya penerjemahan",
      },
      {
        title: "Pendidikan Alkitab terbuka",
        body: "Bersama Thirdmill, kami menolong orang percaya bukan hanya membaca Alkitab, tetapi juga memahami dan menghidupinya setiap hari.",
      },
      {
        title: "Pengembangan masyarakat",
        body: "Pelatihan literasi digital, internet satelit untuk desa terpencil, dan proyek air bersih agar masyarakat bertumbuh.",
      },
    ],
  },
  app: {
    title: "Baca Alkitab dalam bahasa Anda sendiri",
    body: "Aplikasi Alkitabku menghadirkan Firman Tuhan hasil terjemahan para penerjemah bahasa ibu di genggaman Anda, agar keluarga dan gereja dapat membaca Alkitab dalam bahasa yang paling mereka mengerti.",
    features: [
      "Baca edisi uji coba dalam bahasa ibu Anda",
      // "[Dengarkan audio Alkitab]",
      "Unduh sekali, baca tanpa internet",
    ],
    android: "Dapatkan di Google Play",
    // ios: "Unduh di App Store",
    // web: "Baca online",
    // soon: "Segera hadir",
    shareTitle: "Bagikan aplikasi ini",
    shareBody: "Kirimkan kepada keluarga, teman, atau kelompok gereja Anda agar lebih banyak orang membaca Firman dalam bahasanya sendiri.",
    share: "Bagikan",
    whatsapp: "Kirim lewat WhatsApp",
    copy: "Salin tautan",
    copied: "Tautan disalin",
    shareText: "Baca Alkitab dalam bahasa Anda sendiri dengan aplikasi Alkitab Bahtraku:",
    screenLang: "Batak Mandailing",
    screenBook: "Wahyu 12:7 ",
  },
  give: {
    title: "Dekatkan Firman kepada suku berikutnya",
    body: "Donasi Anda mendukung penerjemah, pencetakan, pemuridan, dan proyek masyarakat di seluruh Indonesia.",
    online: "Donasi online",
    bankLabel: "Transfer bank",
    usdLine: "Rekening dolar AS (USD)",
    idrLine: "Rekening rupiah (IDR)",
    qr: "Kode QR",
  },
  registered: {
    title: "Terdaftar dan akuntabel",
    body: "Bahtraku adalah yayasan berbadan hukum dan anggota lembaga Kristen yang diakui di Indonesia dan Asia.",
    items: [
      "Kementerian Hukum dan HAM RI, No. AHU-0034498.AH.01.12 (2022)",
      "Kementerian Agama RI, Direktur Jenderal Bimbingan Masyarakat Kristen, Surat No. 363 (2023)",
      "Anggota terdaftar Indonesian Christian Council for Stewardship & Accountability (ICCSA) sejak 2023",
      "Persekutuan Gereja dan Lembaga Injili Indonesia (PGLII)",
      "Anggota asosiasi Asia Evangelical Alliance",
      "Aliansi Lembaga Pengutus Indonesia (ALUSIA)",
    ],
  },
  footer: {
    tagline: "Akselerasi Transformasi. Salam hangat dalam Kristus.",
    main: "Kantor pusat",
    branch: "Kantor cabang",
    contact: "Kontak",
    rights: "© 2026 Yayasan Bahasa Transformasi Suku",
    privacy: "Kebijakan privasi",
  },
  donate: {
    back: "Kembali ke beranda",
    title: "Berikan Firman dalam bahasa hati",
    body: "Setiap donasi mendukung penerjemah bahasa ibu, edisi uji coba tercetak, pemuridan, dan proyek masyarakat di seluruh Indonesia.",
    step1: "1. Cara berdonasi",
    methods: {
      midtrans: {
        label: "Donasi langsung",
        via: "Midtrans",
        note: "Bayar sekarang dengan kartu, virtual account, QRIS, atau e-wallet. Donasi dalam rupiah.",
        best: "Cocok untuk donatur di Indonesia dan pembayaran kartu dari luar negeri",
      },
      trustbridge: {
        label: "Donasi dengan tanda terima pajak",
        via: "TrustBridge",
        note: "Berdonasi melalui TrustBridge Global Foundation dan dapatkan tanda terima yang dapat mengurangi pajak. Donasi dalam dolar AS.",
        best: "Cocok untuk donatur di Amerika Serikat dan negara mitra lainnya",
      },
    },
    step2: "2. Jumlah donasi",
    once: "Sekali",
    monthly: "Bulanan",
    other: "Jumlah lain",
    otherPlaceholder: "Masukkan jumlah",
    step3: "3. Tujuan donasi",
    funds: {
      most: { label: "Paling dibutuhkan", note: "Membantu kami merespons dengan cepat" },
      translation: { label: "Penerjemahan Alkitab", note: "Penerjemah dan edisi uji coba" },
      community: { label: "Pengembangan masyarakat", note: "Internet, air bersih, literasi digital" },
      discipleship: { label: "Pemuridan", note: "Kelompok pendalaman Alkitab bersama Thirdmill" },
    },
    step4: "4. Data Anda",
    name: "Nama lengkap",
    email: "Email untuk tanda terima",
    trustInfo: "Anda akan menyelesaikan donasi di situs TrustBridge. Mereka menerbitkan tanda terima pajak dan menyalurkan donasi ke Bahtraku. Tulis “Bahtraku” dan tujuan donasi di catatan.",
    manual: "Ingin transfer manual?",
    accountWord: "rekening",
    summary: "Donasi Anda",
    everyMonth: "Setiap bulan",
    oneTime: "Sekali",
    to: "untuk",
    impact: {
      most: "Disalurkan ke kebutuhan terbesar dalam penerjemahan, pemuridan, dan pelayanan masyarakat.",
      translation: "Menolong penerjemah bahasa ibu terus menyusun dan memeriksa terjemahan Alkitab.",
      community: "Menolong menghubungkan desa, melatih keterampilan digital, dan menyediakan air bersih.",
      discipleship: "Menolong kelompok pendalaman Alkitab bertumbuh menjadi komunitas murid sejati.",
    },
    payMidtrans: "Bayar dengan Midtrans",
    payTrust: "Lanjut ke TrustBridge",
    paying: "Membuka pembayaran aman…",
    trustMissing: "Tautan donasi TrustBridge belum ditambahkan.",
    monthlyNote: "Untuk donasi bulanan, kami akan mengirim pengingat setiap bulan dengan tautan pembayaran baru.",
    registeredNote: "Bahtraku terdaftar di Kementerian Hukum dan HAM (AHU-0034498.AH.01.12) dan merupakan anggota ICCSA.",
    errors: {
      amount: "Masukkan jumlah minimal",
      name: "Masukkan nama Anda untuk tanda terima.",
      email: "Masukkan alamat email yang valid untuk tanda terima.",
      payment: "Pembayaran tidak dapat dimulai. Periksa koneksi Anda lalu coba lagi.",
      failed: "Pembayaran tidak berhasil. Tidak ada dana yang terpotong; silakan coba lagi.",
    },
    done: {
      successTitle: "Terima kasih",
      successBody: "Donasi Anda telah diterima. Tanda terima sedang dikirim ke email Anda.",
      pendingTitle: "Sedikit lagi",
      pendingBody: "Donasi Anda menunggu pembayaran. Ikuti petunjuk dari Midtrans untuk menyelesaikannya, misalnya membayar nomor virtual account.",
      again: "Donasi lagi",
    },
  },
    privacy: {
    title: "Kebijakan privasi",
    updated: "Terakhir diperbarui: September 2026",
    intro: "Yayasan Bahasa Transformasi Suku (Bahtraku) menghormati privasi Anda. Kebijakan ini menjelaskan data pribadi apa yang kami kumpulkan saat Anda mengunjungi situs ini atau berdonasi, bagaimana kami menggunakannya, dan pilihan yang Anda miliki.",
    sections: [
      {
        heading: "Data yang kami kumpulkan",
        body: ["Saat Anda berdonasi langsung melalui Midtrans, kami mengumpulkan:"],
        items: [
          "Nama dan alamat email Anda",
          "Jumlah donasi, tujuan donasi yang Anda pilih, dan apakah donasi bersifat sekali atau bulanan",
          "Status pembayaran yang dikirim Midtrans kepada kami (misalnya lunas atau menunggu)",
        ],
      },
      {
        heading: "Data pembayaran",
        body: [
          "Nomor kartu, data rekening bank, dan data e-wallet dimasukkan di halaman pembayaran aman milik Midtrans. Bahtraku tidak pernah melihat atau menyimpannya.",
          "Jika Anda berdonasi melalui TrustBridge Global Foundation, Anda berdonasi di situs TrustBridge dan kebijakan privasi mereka yang berlaku.",
        ],
      },
      {
        heading: "Cara kami menggunakan data Anda",
        body: ["Kami hanya menggunakan data Anda untuk:"],
        items: [
          "Memproses donasi Anda dan mengirim tanda terima",
          "Berterima kasih kepada Anda dan, untuk donasi bulanan, mengirim pengingat dengan tautan pembayaran",
          "Menyimpan catatan keuangan yang diwajibkan bagi yayasan berbadan hukum",
          // "Mengirim kabar pelayanan, hanya jika Anda setuju menerimanya",
        ],
      },
      {
        heading: "Pihak yang menerima data",
        body: [
          "Kami hanya membagikan data kepada layanan yang membantu kami menjalankan situs ini dan memproses donasi: Midtrans (PT Midtrans) untuk pembayaran.",
          "Kami tidak pernah menjual atau menyewakan data pribadi Anda.",
        ],
      },
      {
        heading: "Cookie dan browser Anda",
        body: [
          "Situs ini menyimpan pilihan bahasa Anda (Inggris atau Indonesia) di browser Anda sendiri agar diingat pada kunjungan berikutnya. Kami tidak menggunakan cookie iklan atau pelacakan",
        ],
      },
      // {
      //   heading: "Lama penyimpanan data",
      //   body: ["Kami menyimpan catatan donasi selama [jumlah] tahun sesuai kewajiban pelaporan keuangan, lalu menghapusnya."],
      // },
      // {
      //   heading: "Hak Anda",
      //   body: [
      //     "Berdasarkan Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda dapat meminta untuk melihat data pribadi Anda yang kami simpan, memperbaikinya, menghapusnya, atau menarik persetujuan untuk menerima kabar. Hubungi kami melalui kontak di bawah dan kami akan menanggapi dalam [jumlah] hari.",
      //   ],
      // },
      // {
      //   heading: "Foto dan kisah",
      //   body: [
      //     "Orang yang tampil dalam foto dan kesaksian di situs ini telah memberikan izin. Jika Anda tampil di situs ini dan ingin sesuatu dihapus, silakan hubungi kami.",
      //   ],
      // },
      {
        heading: "Perubahan kebijakan",
        body: ["Jika kami mengubah kebijakan ini, kami akan memperbaruinya di halaman ini dan mengganti tanggal di bagian atas."],
      },
    ],
    contactHeading: "Hubungi kami",
    contactBody: "Untuk pertanyaan tentang data Anda, hubungi:",
  }
};

export const dictionaries: Record<Lang, Dict> = { en, id };

export const org = {
  legalName: "Yayasan Bahasa Transformasi Suku",
  email: "information@bahtraku.org",
  website: "https://www.bahtraku.org",
  mainOffice: "Jl. Yowanibi, Blok B-4, Ruko Anugerah Regency, Doyo Baru, Distrik Waibu, Kabupaten Jayapura, Papua, Indonesia, 99368",
  branchOffice: "Jl. Gn. Lolombulan No. 157, Kec. Wanea, Manado, North Sulawesi, Indonesia 95117",
  /**
   * Bank accounts for manual transfers. Edit the numbers here only;
   * the home page and the giving page both read from this.
   * Leave an account as "" to show "[IDR account number]" until it is ready.
   */
  banks: {
    USD: { name: "Bank Negara Indonesia", account: "2508202032" },
    IDR: { name: "Bank Negara Indonesia", account: "2508202043" },
  },
  /** Bible app links. Leave "" until the link is ready; the button then shows "Coming soon". */
  appLinks: {
    android: "https://play.google.com/store/apps/details?id=org.bahtraku.alkitabku&pcampaignid=web_share",
    ios: "",
    web: "",
    /** Link people receive when they share. Empty = the Google Play link, or this website's app section. */
    share: "",
  },
};
