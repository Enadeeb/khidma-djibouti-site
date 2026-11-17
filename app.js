const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const languageSwitch = document.querySelector('#language-switch');

const translations = {
  ar: {
    menu: 'القائمة', languageLabel: 'Français', navLabel: 'التنقل الرئيسي', navServices: 'الخدمات', navTrust: 'لماذا خِدمة', navCampaign: 'المادة الترويجية', navProcess: 'طريقة العمل', navContact: 'تواصل معي', navWhatsapp: 'راسلني على واتساب',
    heroTitle: 'تصميم، إشراف وصيانة<br /><em>للمباني في جيبوتي.</em>', contactWhatsapp: 'واتساب', footerServices: 'تصميم · إشراف · نجارة · لحام · صيانة · تشطيبات', authorName: 'أديب المفلحي', promoAlt: 'صورة ترويجية لخِدمة جيبوتي وخدمات البناء والصيانة في جيبوتي', eyebrow: 'خدمات هندسية وفنية في جيبوتي', heroLede: 'أساعد أصحاب المنازل والأعمال على تحويل احتياج المبنى إلى خطوة واضحة: من التصميم والرسومات إلى الإشراف والصيانة والتشطيبات. تواصل معي مباشرة واذكر نوع العمل وموقعه.', startChat: 'ابدأ محادثة', viewServices: 'استعرض الخدمات', visualLabel: 'مخطط بصري يرمز إلى العمارة والتنفيذ', clearIdea: 'فكرة واضحة.', calculatedWork: 'تنفيذ محسوب.', designNote: '01 / تصميم', trustNote: 'دقة · التزام · ثقة', introLabel: 'نبذة مختصرة', introKicker: '01 — نبذة', introTitle: 'أفهم المبنى من<br /><span>المخطط إلى الموقع.</span>', introText: 'خدمة مباشرة لأصحاب المنازل والأعمال في جيبوتي. لا يوجد وسيط؛ تشرح احتياجك، ونحدد الخطوة المناسبة، ثم نبدأ من أرض الواقع.', directContact: 'تواصل معي مباشرة',
    trustKicker: '02 — لماذا خِدمة', trustTitle: 'خطوة واضحة،<br /><span>وتواصل مباشر.</span>', trustDirectTitle: 'تتعامل معي مباشرة', trustDirectText: 'تشرح احتياجك لشخص واحد يفهم العمل ويتابع الخطوة التالية معك، دون وسيط أو نموذج معقد.', trustPlanTitle: 'من المخطط إلى الموقع', trustPlanText: 'تجمع خِدمة بين التصميم والرسومات والإشراف والتنفيذ والصيانة بحسب احتياج منزلك أو محلك.', trustDjiboutiTitle: 'مناسب لواقع جيبوتي', trustDjiboutiText: 'ابدأ بصورة للمكان وموقعه ووصف مختصر. نحدد معًا نوع الخدمة والخطوة العملية المناسبة.', trustPrivacyTitle: 'خصوصية واضحة', trustPrivacyText: 'تفاصيل النموذج لا تُحفظ في الموقع؛ تُجهّز لك رسالة واتساب تراجعها قبل الإرسال.',
    servicesKicker: '03 — الخدمات / 06', servicesTitle: 'احتياج المبنى،<br /><span>في مكان واحد.</span>', servicesIntro: 'تواصل معي واذكر نوع العمل وموقعه في جيبوتي، وسأرد عليك مباشرة لمناقشة التفاصيل.',
    architecturalDesignTitle: 'التصميم المعماري والرسومات', architecturalDesignText: 'تصميم معماري، رسومات فنية ورسومات حسب التنفيذ، مع تصورات ثلاثية الأبعاد للمساحات والمباني.', architecturalTag: 'تصميم معماري', technicalDrawings: 'رسومات فنية', threeD: 'تصور 3D', supervisionTitle: 'الإشراف ومتابعة المشاريع', supervisionText: 'متابعة تنفيذ الأعمال في الموقع، تنسيق الأعمال المتبقية، والإشراف على مراحل المشروع.', siteSupervision: 'إشراف موقع', executionFollowup: 'متابعة تنفيذ', quantitySurvey: 'حصر كميات', carpentryTitle: 'النجارة والأعمال الخشبية', carpentryText: 'تصنيع وتركيب وإصلاح الأبواب والنوافذ والأثاث والأعمال الخشبية للمباني والمنشآت.', doorsWindows: 'أبواب ونوافذ', furniture: 'أثاث', installationRepair: 'تركيب وإصلاح', metalworkTitle: 'اللحام والأعمال المعدنية', metalworkText: 'لحام وتصنيع وتركيب وإصلاح الأبواب والهياكل والعناصر المعدنية حسب احتياج العمل.', welding: 'لحام', metalFabrication: 'تصنيع معدني', installation: 'تركيب', maintenanceTitle: 'صيانة المباني والإصلاحات', maintenanceText: 'أعمال صيانة عامة للمباني، وإصلاحات البناء والسباكة والصيانة الكهربائية ومرافق المبنى.', generalMaintenance: 'صيانة عامة', buildingRepair: 'بناء وإصلاح', plumbingElectricity: 'سباكة وكهرباء', finishingTitle: 'الديكور والتشطيبات', finishingText: 'تنفيذ أعمال الديكور الداخلي والتشطيبات للشقق والمنشآت التجارية والمباني.', interiorDecor: 'ديكور داخلي', finishingTag: 'تشطيبات', apartmentsShops: 'شقق ومحلات', askService: 'استفسر عن هذه الخدمة',
    campaignKicker: '04 — مادة ترويجية', campaignTitle: 'صورة تختصر<br /><span>فكرة خِدمة.</span>', campaignText: 'صورة تعريفية تلخّص خدمات خِدمة جيبوتي في العمارة والتنفيذ والصيانة والتشطيبات، لتشاركها مع عملائك بسهولة.', downloadImage: 'تحميل الصورة', campaignCaption: 'خِدمة جيبوتي — مشروعك، التزامنا.',
    processKicker: '05 — كيف نبدأ', processTitle: 'بداية واضحة<br /><span>للعمل.</span>', processIntro: 'أرسل التفاصيل، ونتواصل مباشرة. كل مشروع يبدأ بفهم دقيق للاحتياج والموقع.', stepChooseTitle: 'اختر الخدمة', stepChooseText: 'حدد إن كان طلبك تصميمًا أو إشرافًا أو نجارة أو صيانة.', stepLocationTitle: 'أرسل موقع العمل', stepLocationText: 'اكتب المنطقة ووصفًا مختصرًا لما يحتاجه المبنى.', stepContactTitle: 'تواصل معي مباشرة', stepContactText: 'تُفتح رسالة واتساب جاهزة لتراجعها وترسلها بنفسك.',
    contactKicker: '06 — تواصل', contactTitle: 'عندك عمل أو مبنى؟<br /><span>خلّنا نتحدث.</span>', contactIntro: 'أرسل نوع الخدمة وموقع العمل وتفاصيله. اختر وسيلة التواصل المناسبة لك.', formNote: 'أرسل استفسارك', formHelp: 'ستنتقل التفاصيل إلى رسالة واتساب موجهة إليّ. لن تُحفظ على هذا الموقع.', nameLabel: 'اسمك', namePlaceholder: 'اكتب اسمك', phoneLabel: 'رقم التواصل', phonePlaceholder: 'رقم الهاتف أو واتساب', serviceLabel: 'الخدمة المطلوبة', chooseService: 'اختر الخدمة', locationLabel: 'موقع العمل', locationPlaceholder: 'المنطقة / المدينة', detailsLabel: 'تفاصيل الطلب', detailsPlaceholder: 'اكتب نبذة عن العمل المطلوب', prepareWhatsapp: 'جهّز رسالة واتساب', privacyKicker: 'ملاحظة الخصوصية', privacyTitle: 'تواصل مباشر، <span>بخصوصية واضحة.</span>', privacyText: 'لا يوجد دليل أشخاص أو وسيط؛ أنت تتحدث معي أنا عن طلبك. إذا كتبت استفساراً، لا تُحفظ تفاصيله على الموقع؛ تُجهّز في رسالة واتساب لتراجعها وترسلها بنفسك.', haveQuestion: 'لدي استفسار'
  },
  fr: {
    menu: 'Menu', languageLabel: 'العربية', navLabel: 'Navigation principale', navServices: 'Services', navTrust: 'Pourquoi Khidma', navCampaign: 'Support promotionnel', navProcess: 'Comment ça marche', navContact: 'Contact', navWhatsapp: 'Écrire sur WhatsApp',
    heroTitle: 'Conception, suivi et maintenance<br /><em>pour les bâtiments à Djibouti.</em>', contactWhatsapp: 'WhatsApp', footerServices: 'Conception · suivi · menuiserie · soudure · maintenance · finitions', authorName: 'Adeeb Al-Muflehi', promoAlt: 'Image promotionnelle de Khidma Djibouti pour les services de construction et de maintenance', eyebrow: 'Services techniques et d’ingénierie à Djibouti', heroLede: 'J’aide les propriétaires et les professionnels à transformer leur besoin en une étape claire : conception, plans, suivi, maintenance et finitions. Contactez-moi directement en indiquant le type de travaux et leur emplacement.', startChat: 'Démarrer une discussion', viewServices: 'Voir les services', visualLabel: 'Illustration représentant l’architecture et l’exécution', clearIdea: 'Une idée claire.', calculatedWork: 'Une exécution maîtrisée.', designNote: '01 / Conception', trustNote: 'Précision · engagement · confiance', introLabel: 'Présentation', introKicker: '01 — Présentation', introTitle: 'Je comprends le bâtiment<br /><span>du plan au chantier.</span>', introText: 'Un service direct pour les particuliers et les entreprises à Djibouti. Pas d’intermédiaire : vous expliquez votre besoin, nous définissons la prochaine étape, puis nous passons à l’action.', directContact: 'Me contacter directement',
    trustKicker: '02 — Pourquoi Khidma', trustTitle: 'Une étape claire,<br /><span>un contact direct.</span>', trustDirectTitle: 'Un contact direct', trustDirectText: 'Vous expliquez votre besoin à une seule personne qui comprend le travail et vous accompagne dans la prochaine étape, sans intermédiaire ni formulaire compliqué.', trustPlanTitle: 'Du plan au chantier', trustPlanText: 'Khidma réunit conception, plans, suivi, exécution et maintenance selon les besoins de votre maison ou de votre commerce.', trustDjiboutiTitle: 'Pensé pour Djibouti', trustDjiboutiText: 'Commencez par une photo du lieu, sa zone et une courte description. Nous définirons ensemble le service et l’étape pratique adaptés.', trustPrivacyTitle: 'Une confidentialité claire', trustPrivacyText: 'Les informations du formulaire ne sont pas enregistrées sur le site. Un message WhatsApp est préparé pour que vous le vérifiiez avant l’envoi.',
    servicesKicker: '03 — Services / 06', servicesTitle: 'Les besoins du bâtiment,<br /><span>au même endroit.</span>', servicesIntro: 'Indiquez le type de travaux et leur emplacement à Djibouti. Je vous répondrai directement pour discuter des détails.',
    architecturalDesignTitle: 'Conception architecturale et plans', architecturalDesignText: 'Conception architecturale, plans techniques et plans d’exécution, avec visualisations 3D des espaces et des bâtiments.', architecturalTag: 'Conception', technicalDrawings: 'Plans techniques', threeD: 'Visualisation 3D', supervisionTitle: 'Suivi et supervision des projets', supervisionText: 'Suivi des travaux sur site, coordination des tâches restantes et supervision des différentes étapes du projet.', siteSupervision: 'Suivi de chantier', executionFollowup: 'Suivi des travaux', quantitySurvey: 'Métré et quantités', carpentryTitle: 'Menuiserie et travaux de bois', carpentryText: 'Fabrication, installation et réparation de portes, fenêtres, meubles et éléments en bois pour bâtiments et locaux.', doorsWindows: 'Portes et fenêtres', furniture: 'Mobilier', installationRepair: 'Pose et réparation', metalworkTitle: 'Soudure et travaux métalliques', metalworkText: 'Soudure, fabrication, installation et réparation de portes, structures et éléments métalliques selon votre besoin.', welding: 'Soudure', metalFabrication: 'Fabrication métallique', installation: 'Installation', maintenanceTitle: 'Maintenance et réparations des bâtiments', maintenanceText: 'Maintenance générale, réparations de construction, plomberie, électricité et équipements du bâtiment.', generalMaintenance: 'Maintenance générale', buildingRepair: 'Construction et réparation', plumbingElectricity: 'Plomberie et électricité', finishingTitle: 'Décoration et finitions', finishingText: 'Réalisation de travaux de décoration intérieure et de finitions pour appartements, commerces et bâtiments.', interiorDecor: 'Décoration intérieure', finishingTag: 'Finitions', apartmentsShops: 'Appartements et commerces', askService: 'Demander ce service',
    campaignKicker: '04 — Support promotionnel', campaignTitle: 'Une image qui résume<br /><span>l’idée de Khidma.</span>', campaignText: 'Une image de présentation qui résume les services de Khidma Djibouti en architecture, exécution, maintenance et finitions, facile à partager avec vos clients.', downloadImage: 'Télécharger l’image', campaignCaption: 'Khidma Djibouti — votre projet, notre engagement.',
    processKicker: '05 — Comment commencer', processTitle: 'Un début clair<br /><span>pour votre projet.</span>', processIntro: 'Envoyez les détails et nous vous répondons directement. Chaque projet commence par une bonne compréhension du besoin et du site.', stepChooseTitle: 'Choisissez le service', stepChooseText: 'Indiquez s’il s’agit de conception, de supervision, de menuiserie ou de maintenance.', stepLocationTitle: 'Indiquez le lieu', stepLocationText: 'Écrivez la zone et décrivez brièvement ce dont le bâtiment a besoin.', stepContactTitle: 'Contactez-moi directement', stepContactText: 'Un message WhatsApp prêt à relire et à envoyer s’ouvrira pour vous.',
    contactKicker: '06 — Contact', contactTitle: 'Un projet ou un bâtiment ?<br /><span>Parlons-en.</span>', contactIntro: 'Indiquez le service, le lieu et les détails de votre demande. Choisissez le moyen de contact qui vous convient.', formNote: 'Envoyez votre demande', formHelp: 'Les détails seront préparés dans un message WhatsApp. Ils ne seront pas enregistrés sur ce site.', nameLabel: 'Votre nom', namePlaceholder: 'Écrivez votre nom', phoneLabel: 'Numéro de contact', phonePlaceholder: 'Téléphone ou WhatsApp', serviceLabel: 'Service demandé', chooseService: 'Choisissez un service', locationLabel: 'Lieu des travaux', locationPlaceholder: 'Zone / ville', detailsLabel: 'Détails de la demande', detailsPlaceholder: 'Décrivez brièvement les travaux souhaités', prepareWhatsapp: 'Préparer le message WhatsApp', privacyKicker: 'Note de confidentialité', privacyTitle: 'Un contact direct, <span>une confidentialité claire.</span>', privacyText: 'Il n’y a ni annuaire ni intermédiaire : vous échangez directement avec moi. Les demandes saisies ne sont pas enregistrées sur le site ; elles sont préparées dans WhatsApp pour que vous les relisiez et les envoyiez.', haveQuestion: 'J’ai une question'
  }
};

let currentLanguage = localStorage.getItem('khidma-language') || 'ar';

function applyLanguage(language) {
  currentLanguage = language;
  const t = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = language === 'ar' ? 'خِدمة جيبوتي — عمارة وتنفيذ وصيانة' : 'Khidma Djibouti — Conception, suivi et maintenance';
  document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'ar' ? 'تصميم معماري، إشراف، صيانة وتشطيبات للمنازل والمحلات في جيبوتي مع أديب المفلحي. أرسل نوع العمل وموقعه عبر واتساب.' : 'Conception architecturale, suivi, maintenance et finitions pour maisons et commerces à Djibouti avec Adeeb Al-Muflehi. Contactez-nous sur WhatsApp.');
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'ar' ? 'ar_DJ' : 'fr_DJ');
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = t[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = t[element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = t[element.dataset.i18nAlt];
    if (value !== undefined) element.setAttribute('alt', value);
  });
  document.querySelectorAll('[data-i18n-attr-aria-label]').forEach((element) => {
    const value = t[element.dataset.i18nAttrAriaLabel];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });
  languageSwitch?.setAttribute('aria-label', language === 'ar' ? 'التبديل إلى الفرنسية' : 'Passer à l’arabe');
  localStorage.setItem('khidma-language', language);
}

menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const select = document.querySelector('select[name="service"]');
    if (select) select.value = link.dataset.service;
  });
});

languageSwitch?.addEventListener('click', () => applyLanguage(currentLanguage === 'ar' ? 'fr' : 'ar'));
document.querySelector('#year').textContent = new Date().getFullYear();

 document.querySelector('#inquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const isFrench = currentLanguage === 'fr';
  const message = [
    isFrench ? 'Bonjour M. Adeeb, je souhaite demander des informations sur vos services.' : 'مرحباً أستاذ أديب، أرغب بالاستفسار عن خدماتك. أرسل تفاصيل الطلب التالية:',
    '',
    `${isFrench ? 'Nom' : 'الاسم'}: ${form.get('name')}`,
    `${isFrench ? 'Contact' : 'رقم التواصل'}: ${form.get('phone')}`,
    `${isFrench ? 'Service demandé' : 'الخدمة المطلوبة'}: ${form.get('service')}`,
    `${isFrench ? 'Lieu des travaux' : 'موقع العمل'}: ${form.get('location')}`,
    `${isFrench ? 'Détails de la demande' : 'تفاصيل الطلب'}: ${form.get('details')}`
  ].join('\n');
  const status = document.querySelector('#form-status');
  status.textContent = isFrench ? 'Le message est prêt. Vérifiez les informations puis envoyez-le sur WhatsApp.' : 'تم تجهيز الرسالة. راجع البيانات ثم أرسلها في واتساب.';
  window.open(`https://wa.me/25377534826?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

applyLanguage(currentLanguage);
