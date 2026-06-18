import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// Bilingual translations dictionary
const TRANSLATIONS = {
  en: {
    about: "About",
    operations: "Operations",
    services: "Services",
    fleet: "Fleet Specs",
    industries: "Industries",
    brochure: "Brochure",
    getQuote: "Get Quote",
    brandTitle: "DRILLTECH <span class='highlight'>GEO</span>",
    brandSubtitle: "Saudi Arabia",
    trustedPartners: "TRUSTED INDUSTRIAL PARTNERS",
    heroTag: "NATIONWIDE OPERATION • SAUDI ARABIA",
    heroTitleLine1: "PRECISION",
    heroTitleLine2: "SUBSURFACE <span class='highlight'>EXPLORATION</span>",
    heroDesc: "Headquartered in Jeddah, DrillTech Geo is Saudi Arabia's premier geotechnical drilling operator. From sand dunes to offshore waves, we dig deep to secure structural integrity.",
    exploreBtn: "Explore Operations",
    viewFleetBtn: "View Rig Fleet",
    aboutHeading: "SUBSURFACE POWER",
    aboutDesc: "DrillTech Geo is a specialist geotechnical drilling company headquartered in Jeddah, delivering subsurface exploration and soil analysis services for a wide range of industries across Saudi Arabia. With an experienced team and cutting-edge equipment, we offer clients the reliability, accuracy, and safety essential for major construction, infrastructure, and mining projects. We work in both desert terrains and complex industrial zones including offshore sites, with proven capability.",
    statManaged: "Saudi Managed",
    statDepth: "Max Depth (m)",
    statTorque: "Max Torque (Nm)",
    capHeading: "CORE CAPABILITY ARCS",
    cap1Title: "Extreme Desert Terrains",
    cap1Desc: "High-torque traction systems designed to navigate shifting desert sands and remote sites.",
    cap2Title: "Complex Industrial Zones",
    cap2Desc: "Compact setups (CME 45B) operating with strict emissions compliance in active refineries.",
    cap3Title: "Offshore & Coastal Sites",
    cap3Desc: "Specialized marine platforms engineered for tidal stability and offshore rock coring.",
    opsHeading: "FIELD OPERATIONS",
    opsSubheading: "Visual showcase of DrillTech Geo geotechnical assets operating nationwide under extreme desert, coastal, and urban settings.",
    op1Title: "01 / Desert Mobilization",
    op1Desc: "Operating custom crawler-mounted rigs (Mobile Drill B57) deep within the golden deserts of Saudi Arabia, surveying structural feasibility for industrial corridors and mining claims.",
    op2Title: "02 / Offshore & Coastal Exploration",
    op2Desc: "Mobilizing coastal marine drilling platforms in Saudi harbor zones. Our specialized equipment performs subsea core extraction and standard penetration testing for major ports, docks, and bridges.",
    op3Title: "03 / Core Classification Lab",
    op3Desc: "Pristine rock core samples and soil specimens are logged by geological technicians in our Jeddah labs. We deliver accurate geological classification logs under strict ASTM D-1586 standards.",
    servicesHeading: "EXPLORATION SERVICES",
    s1Title: "Borehole Drilling",
    s1Desc: "Creating precise boreholes for geotechnical investigations, mineral exploration, and deep foundation engineering.",
    s2Title: "Rock Coring",
    s2Desc: "Extracting pristine rock core samples using advanced wireline core barrels for structural mapping.",
    s3Title: "Soil Analysis",
    s3Desc: "Subsurface soil classification and testing to measure bearing capacity and compaction density.",
    s4Title: "Geophysical Survey",
    s4Desc: "Advanced subsurface scanning using electrical resistivity and seismic refraction methods.",
    s5Title: "Offshore Drilling",
    s5Desc: "Marine drilling operations in coastal zones and deepwater berths across Saudi harbors.",
    s6Title: "SPT & Sampling",
    s6Desc: "Standard Penetration Tests using automatic hammers to verify geotechnical strength profiles.",
    fleetHeading: "MACHINERY COMPARATOR",
    fleetSubheading: "Compare hydraulic outputs, engine ratings, and capacities across our drilling fleet.",
    specHeader: "HYDRAULIC & OPERATING TELEMETRY",
    specPulldown: "Pulldown Force",
    specRetract: "Retract Force",
    specTorque: "Max Spindle Torque",
    specDepth: "Max Drilling Depth",
    specEngine: "Engine Model",
    specAuger: "Auger Capacity",
    specType: "Rig Type",
    indHeading: "INDUSTRIES WE SERVE",
    ind1Title: "Construction Companies",
    ind1Desc: "Soil bearing calculations and deep foundation drill logs for commercial and residential construction projects.",
    ind2Title: "Infrastructure Projects",
    ind2Desc: "Bridges, rail lines, highway flyovers, and public utility corridor profiling.",
    ind3Title: "Government Projects",
    ind3Desc: "Strategic geotechnical surveys for municipal and national agency developments.",
    ind4Title: "Gold, Steel & Cement Mines",
    ind4Desc: "Core drilling and subsurface investigation for Gold, Steel, and Cement mines across Saudi Arabia.",
    ind5Title: "Offshore & Coastal Projects",
    ind5Desc: "Marine boring and subsea soil profiling for offshore platforms, ports, docks, and coastal infrastructure.",
    whyHeading: "WHY <span class='why-brand-highlight'>DRILLTECH GEO</span>",
    w1Title: "Expert Field Team",
    w1Desc: "Expert field team with years of local experience navigating diverse terrains across Saudi Arabia.",
    w2Title: "Harsh Terrain Capability",
    w2Desc: "Capability to operate in harsh, remote, and offshore conditions with proven track record.",
    w3Title: "Accurate Testing & Reporting",
    w3Desc: "Accurate testing and reporting using modern tools and lab-verified samples under strict ASTM standards.",
    w4Title: "Safety Compliant Operations",
    w4Desc: "Operations meet local safety regulations and international best practices at every site.",
    w5Title: "Custom Drilling Plans",
    w5Desc: "Custom drilling plans for construction sites, mines, and offshore locations tailored to each project.",
    w6Title: "Quick Mobilization",
    w6Desc: "Quick mobilization, clean project handling, and on-time delivery from our Jeddah base.",
    contactHeading: "MOBILIZE TODAY",
    contactDesc: "Initiate your geotechnical project. Get in touch with our Jeddah engineering desk.",
    cPhone: "PHONE",
    cEmail: "EMAIL",
    cHq: "HEADQUARTERS",
    cHqVal: "Jeddah, Saudi Arabia",
    formName: "Your Name",
    formCompany: "Company Name",
    formEmail: "Email Address",
    formEnv: "Project Environment",
    formSelectEnv: "Select terrain...",
    formDesert: "Desert Terrain",
    formInd: "Complex Industrial Zone",
    formOff: "Offshore / Coastal",
    formInfra: "Infrastructure Route",
    formDetails: "Project Requirements",
    formSubmit: "SUBMIT MOBILIZATION REQUEST",
    formSuccessTitle: "REQUEST SUBMITTED SUCCESSFULLY"
  },
  ar: {
    about: "من نحن",
    operations: "العمليات",
    services: "خدماتنا",
    fleet: "مواصفات الأسطول",
    industries: "القطاعات",
    brochure: "الكتيب",
    getQuote: "طلب تسعيرة",
    brandTitle: "دريل تك <span class='highlight'>جيـو</span>",
    brandSubtitle: "المملكة العربية السعودية",
    trustedPartners: "شركاء الصناعة الموثوقون",
    heroTag: "عمليات تغطي كافة أنحاء المملكة",
    heroTitleLine1: "استكشاف دقيق",
    heroTitleLine2: "لطبقات الأرض <span class='highlight'>السطحية</span>",
    heroDesc: "يقع مقرها الرئيسي في جدة، وتعد شركة دريل تك جيو المشغل الرائد للحفر الجيوتقني في المملكة العربية السعودية. من الكثبان الرملية إلى أمواج البحر، نحفر بعمق لضمان سلامة الإنشاءات.",
    exploreBtn: "استكشاف العمليات",
    viewFleetBtn: "عرض أسطول الحفارات",
    aboutHeading: "قوة الاستكشاف",
    aboutDesc: "تقوم شركة دريل تك جيو بتنفيذ أعمال الاستكشاف الجيوتقني المعقدة في الظروف القاسية. يقدم فريقنا ذو الخبرة، بالتعاون مع الآلات المتطورة، دقة متناهية للبيانات الجيولوجية.",
    statManaged: "إدارة سعودية 100%",
    statDepth: "أقصى عمق (قدم)",
    statTorque: "أقصى عزم (نيوتن متر)",
    capHeading: "محاور قدراتنا الرئيسية",
    cap1Title: "التضاريس الصحراوية القاسية",
    cap1Desc: "أنظمة جر ذات عزم دوران عالٍ مصممة للعمل في الرمال الصحراوية المتحركة والمواقع النائية.",
    cap2Title: "المناطق الصناعية المعقدة",
    cap2Desc: "معدات مدمجة (CME 45B) تعمل مع الالتزام التام بمعايير الانبعاثات في المصافي النفطية.",
    cap3Title: "المواقع البحرية والساحلية",
    cap3Desc: "منصات بحرية متخصصة مصممة لثبات المد والجزر والحفر في الصخور البحرية.",
    opsHeading: "العمليات الميدانية",
    opsSubheading: "عرض مرئي لأصول شركة دريل تك جيو الجيوتقنية التي تعمل في جميع أنحاء البلاد في البيئات الصحراوية والساحلية والحضرية.",
    op1Title: "٠١ / العمليات الصحراوية",
    op1Desc: "تشغيل الحفارات المجنزرة المخصصة (Mobile Drill B57) في عمق الصحاري السعودية، لدراسة الجدوى الإنشائية للممرات الصناعية ومناجم التعدين.",
    op2Title: "٠٢ / الاستكشاف البحري والساحلي",
    op2Desc: "تجهيز منصات الحفر البحرية في الموانئ السعودية. تقوم معداتنا المتخصصة بأخذ عينات من قاع البحر واختبار الاختراق القياسي للموانئ والجسور الكبرى.",
    op3Title: "٠٣ / مختبر تصنيف العينات",
    op3Desc: "يتم تسجيل وتحليل عينات التربة والصخور المستخرجة من قبل فنيين جيولوجيين في مختبراتنا بجدة. نقدم تقارير تصنيف دقيقة وفقاً لمعايير ASTM D-1586.",
    servicesHeading: "خدمات الاستكشاف",
    s1Title: "حفر الآبار الجيوتقنية",
    s1Desc: "حفر آبار دقيقة للاستقصاءات الجيوتقنية واستكشاف المعادن وأعمال الأساسات العميقة.",
    s2Title: "استخراج العينات الصخرية",
    s2Desc: "استخراج عينات صخرية سليمة باستخدام براميل الحفر السلكية المتقدمة للتخطيط الإنشائي.",
    s3Title: "تحليل واختبار التربة",
    s3Desc: "تصنيف التربة السطحية واختبارها لقياس قدرة التحمل وكثافة الضغط.",
    s4Title: "المسح الجيوفيزيائي",
    s4Desc: "مسح متقدم لطبقات الأرض باستخدام المقاومة الكهربائية وطرق الانكسار الزلزالي.",
    s5Title: "الحفر البحري والساحلي",
    s5Desc: "عمليات الحفر البحري في المناطق الساحلية وأعماق المياه في الموانئ والمرافئ السعودية.",
    s6Title: "اختبار الاختراق القياسي (SPT)",
    s6Desc: "اختبارات الاختراق القياسية باستخدام مطارق آلية للتحقق من مقاييس قوة التربة.",
    fleetHeading: "مقارن الآلات والمعدات",
    fleetSubheading: "قارن بين القدرات الهيدروليكية ومحركات الحفارات وأعماق الحفر عبر أسطولنا.",
    specHeader: "البيانات الهيدروليكية والتشغيلية",
    specPulldown: "قوة الدفع لأسفل",
    specRetract: "قوة السحب لأعلى",
    specTorque: "عزم الدوران الأقصى",
    specDepth: "أقصى عمق للحفر",
    specEngine: "طراز المحرك",
    specAuger: "قدرة البريمة",
    specType: "نوع الحفارة",
    indHeading: "القطاعات التي نخدمها",
    ind1Title: "قطاع الإنشاءات",
    ind1Desc: "حسابات تحمل التربة وسجلات حفر الأساسات العميقة للأبراج التجارية الحديثة.",
    ind2Title: "مشاريع البنية التحتية",
    ind2Desc: "الجسور، خطوط السكك الحديدية، الطرق السريعة ومسارات المرافق العامة.",
    ind3Title: "المشاريع الحكومية",
    ind3Desc: "دراسات جيوتقنية استراتيجية للمشاريع البلدية ومخططات التنمية الوطنية.",
    ind4Title: "أعمال التعدين والمناجم",
    ind4Desc: "حفر العينات لمناجم الذهب والحديد والأسمنت في الدرع العربي الغربي.",
    ind5Title: "المشاريع البحرية والساحلية",
    ind5Desc: "جس التربة البحرية وتخطيط القاع للموانئ والأرصفة والمصدات الساحلية.",
    whyHeading: "لماذا <span class='why-brand-highlight'>دريل تك جيو</span>",
    w1Title: "طاقم عمل محلي خبير",
    w1Desc: "سنوات من العمليات الميدانية المتخصصة في التعامل مع مختلف أنواع التربة بالمنطقة.",
    w2Title: "اختبارات موثقة مخبرياً",
    w2Desc: "فحص عينات التربة والصخور في مختبراتنا وفقاً لأدق المعايير الدولية ASTM.",
    w3Title: "خطط حفر مخصصة",
    w3Desc: "تصميم معايير الحفر المناسبة بناءً على البيانات الزلزالية الأولية للموقع.",
    w4Title: "معايير سلامة صارمة",
    w4Desc: "تتوافق عملياتنا بالكامل مع القوانين البيئية المحلية وإرشادات السلامة المعتمدة.",
    w5Title: "سرعة التعبئة والتحرك",
    w5Desc: "تضمن قاعدتنا اللوجستية في جدة نقل المعدات والآلات بسرعة لأي مكان بالمملكة.",
    w6Title: "مرونة العمل البحري والبري",
    w6Desc: "قدرة عالية على التحول بين عمليات الحفر البرية والمنصات البحرية العائمة.",
    contactHeading: "ابدأ مشروعك اليوم",
    contactDesc: "ابدأ مشروعك الجيوتقني الآن. تواصل مع المكتب الهندسي بجدة مباشرة.",
    cPhone: "الهاتف",
    cEmail: "البريد الإلكتروني",
    cHq: "المقر الرئيسي",
    cHqVal: "جدة، المملكة العربية السعودية",
    formName: "الاسم الكريم",
    formCompany: "اسم الشركة",
    formEmail: "عنوان البريد الإلكتروني",
    formEnv: "بيئة المشروع",
    formSelectEnv: "اختر نوع التضاريس...",
    formDesert: "تضاريس صحراوية",
    formInd: "منطقة صناعية معقدة",
    formOff: "ساحلية / بحرية",
    formInfra: "مسار بنية تحتية",
    formDetails: "متطلبات المشروع تفصيلاً",
    formSubmit: "إرسال طلب التعبئة والتجهيز",
    formSuccessTitle: "تم إرسال الطلب بنجاح"
  }
};

// Rig specs database
const RIG_DATABASE = {
  b57: {
    name: "Mobile Drill B57",
    feature: "SPT Automatic Hammer",
    image: "/machines/b57.jpeg",
    pulldown: "20,000 lbs",
    pulldownPercent: 63,
    retract: "30,000 lbs",
    retractPercent: 75,
    torque: "11,000 Nm",
    torquePercent: 78,
    depth: "457 m",
    depthPercent: 90,
    engine: "Deutz F4L912, 116 hp",
    auger: "4-1/4 in ID hollow: 76 m",
    type: "Rotary and DTH Capable"
  },
  cme45: {
    name: "CME 45B",
    feature: "EPA Tier-4 Final Certified",
    image: "/machines/cme45b.jpeg",
    pulldown: "13,650 lbs",
    pulldownPercent: 43,
    retract: "19,600 lbs",
    retractPercent: 49,
    torque: "6,587 Nm",
    torquePercent: 46,
    depth: "91 m (continuous flight)",
    depthPercent: 25,
    engine: "Deutz F4L912, 116 hp",
    auger: "Continuous flight 6 in OD: 91 m",
    type: "Compact High Torque"
  },
  b53: {
    name: "Mobile Drill B53",
    feature: "Angle Drilling Capable",
    image: "/machines/b53.jpeg",
    pulldown: "31,400 lbs",
    pulldownPercent: 100,
    retract: "24,000 lbs",
    retractPercent: 60,
    torque: "8,932 Nm",
    torquePercent: 63,
    depth: "366 m (core drilling)",
    depthPercent: 75,
    engine: "Cummins 4-cylinder 4BT, 420 lb-ft",
    auger: "3-1/4 in ID hollow: 46 m",
    type: "Angle-drill Variable Gear"
  },
  joy12: {
    name: "JOY12B",
    feature: "Double Feed Oil Cylinders",
    image: "/machines/joy12b.jpeg",
    pulldown: "24,700 lbs (110 kN)",
    pulldownPercent: 78,
    retract: "24,700 lbs (110 kN)",
    retractPercent: 61,
    torque: "12,500 Nm",
    torquePercent: 88,
    depth: "100 m",
    depthPercent: 28,
    engine: "Diesel YC6A240-33, 177 kW",
    auger: "Mechanical rotary, mast tilts 45°",
    type: "Mining-style Rig"
  },
  cme75: {
    name: "CME 75",
    feature: "Highest Fleet Spindle Torque",
    image: "/machines/cme75.jpeg",
    pulldown: "20,000 lbs",
    pulldownPercent: 63,
    retract: "30,000 lbs",
    retractPercent: 75,
    torque: "14,160 Nm",
    torquePercent: 100,
    depth: "457+ m",
    depthPercent: 100,
    engine: "Cummins QSB 4.5L, 140 hp",
    auger: "High capacity truck-mounted",
    type: "Heavy Duty Explorer"
  }
};

let currentLang = 'en';

function init() {
  setupPreloader();
  setupCursor();
  setupHeroBackground();
  setupNavigation();
  setupScrollAnimations();
  setupSpecsComparator();
  setupLanguageSwitcher();
  setupAnimatedCounters();
  setupContactForm();
  setupBentoGlowLoop();
  setupIndustriesHighlightLoop();
}

// Language translation handler
function setupLanguageSwitcher() {
  const toggleBtn = document.getElementById("lang-toggle");
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener("click", () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Page transition fade out
    gsap.to("#app", {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        currentLang = nextLang;
        toggleBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';
        
        // Toggle html direction
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        
        applyTranslations();
        
        // Page fade back in
        gsap.to("#app", {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  });
}

function applyTranslations() {
  const dict = TRANSLATIONS[currentLang];
  
  // Update translation nodes by data-translate attribute
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.dataset.translate;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Translate form place holders & options
  const nameInput = document.getElementById("name");
  const compInput = document.getElementById("company");
  const emailInput = document.getElementById("email");
  const detailsInput = document.getElementById("details");
  const projSelect = document.getElementById("project-type");
  
  if (nameInput) nameInput.placeholder = currentLang === 'ar' ? "الاسم" : "Dr. Nazir";
  if (compInput) compInput.placeholder = currentLang === 'ar' ? "اسم الشركة" : "Construction Corp";
  if (emailInput) emailInput.placeholder = currentLang === 'ar' ? "البريد الإلكتروني" : "nazir.drilltechgeo@gmail.com";
  if (detailsInput) detailsInput.placeholder = currentLang === 'ar' ? "اكتب متطلبات مشروعك..." : "Detail depth targets, SPT testing...";
  
  if (projSelect) {
    projSelect.options[0].text = dict.formSelectEnv;
    projSelect.options[1].text = dict.formDesert;
    projSelect.options[2].text = dict.formInd;
    projSelect.options[3].text = dict.formOff;
    projSelect.options[4].text = dict.formInfra;
  }
}

// Preloader loader
function setupPreloader() {
  const numEl      = document.getElementById("preloader-num");
  const barFillEl  = document.getElementById("preloader-bar-fill");
  const ringEl     = document.getElementById("preloader-ring-fill");
  const statusEl   = document.getElementById("preloader-status");
  const loaderEl   = document.getElementById("preloader");

  if (!loaderEl) return;

  const CIRCUMFERENCE = 339.3;
  const statusMessages = [
    "INITIALIZING SYSTEMS...",
    "LOADING GEOTECHNICAL DATA...",
    "CALIBRATING DRILL PARAMETERS...",
    "ENGAGING SUBSURFACE MODULES...",
    "DRILLTECH GEO READY."
  ];

  let msgIndex = 0;
  const msgInterval = setInterval(() => {
    msgIndex = Math.min(msgIndex + 1, statusMessages.length - 1);
    if (statusEl) statusEl.textContent = statusMessages[msgIndex];
  }, 700);

  const obj = { val: 0 };
  gsap.to(obj, {
    val: 100,
    duration: 3.2,
    ease: "power1.inOut",
    onUpdate: () => {
      const v = Math.floor(obj.val);
      if (numEl) numEl.textContent = v + "%";
      if (barFillEl) barFillEl.style.width = v + '%';
      // SVG ring fill
      if (ringEl) {
        const offset = CIRCUMFERENCE - (v / 100) * CIRCUMFERENCE;
        ringEl.style.strokeDashoffset = offset;
        ringEl.style.transition = 'stroke-dashoffset 0.05s linear';
      }
    },
    onComplete: () => {
      clearInterval(msgInterval);
      gsap.to(loaderEl, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          loaderEl.style.display = "none";
          triggerHeroAnimations();
        }
      });
    }
  });
}

// Cursor movements
function setupCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");
  
  if (!cursor || !follower) return;
  
  window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.05 });
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.18 });
  });
  
  document.querySelectorAll("a, button, select, input, [role='tab']").forEach(item => {
    item.addEventListener("mouseenter", () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      follower.style.transform = "translate(-50%, -50%) scale(1.4)";
      follower.style.borderColor = "var(--color-accent)";
    });
    item.addEventListener("mouseleave", () => {
      cursor.style.width = "6px";
      cursor.style.height = "6px";
      follower.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.borderColor = "rgba(255, 60, 0, 0.35)";
    });
  });
}

function setupHeroBackground() {
  const canvas = document.getElementById("hero-particles-canvas");
  if (!canvas) return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5.0;
  camera.position.y = 0.5;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const count = 6000;
  const size = 0.015;
  const geometry = new THREE.BufferGeometry();

  // Create shape arrays
  const posTerrain = new Float32Array(count * 3);
  const posCylinder = new Float32Array(count * 3);
  const posWaves = new Float32Array(count * 3);
  const posGear = new Float32Array(count * 3);
  const posSphere = new Float32Array(count * 3);

  const colors = new Float32Array(count * 3);
  const colorInside = new THREE.Color('#ff3c00'); // Orange
  const colorOutside = new THREE.Color('#00f0ff'); // Cyan

  const saudiVertices = [
    { lon: 35.0, lat: 29.5 },
    { lon: 39.0, lat: 32.0 },
    { lon: 46.0, lat: 29.0 },
    { lon: 48.0, lat: 30.0 },
    { lon: 50.0, lat: 26.3 },
    { lon: 51.5, lat: 25.0 },
    { lon: 55.0, lat: 22.5 },
    { lon: 52.0, lat: 19.0 },
    { lon: 43.0, lat: 17.5 },
    { lon: 42.5, lat: 16.5 },
    { lon: 39.2, lat: 21.5 }, // Jeddah
    { lon: 35.5, lat: 27.5 },
    { lon: 35.0, lat: 29.5 }
  ];

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    // 2. Crawler Rig Shape (Tracks, Cab Body, Mast, Drill Rod)
    if (i < 1500) {
      // Left crawler track
      posCylinder[i3 + 0] = -0.65 + (Math.random() - 0.5) * 0.12;
      posCylinder[i3 + 1] = -0.75 + (Math.random() - 0.5) * 0.12;
      posCylinder[i3 + 2] = ((i / 1500) - 0.5) * 2.2;
    } else if (i < 3000) {
      // Right crawler track
      posCylinder[i3 + 0] = 0.65 + (Math.random() - 0.5) * 0.12;
      posCylinder[i3 + 1] = -0.75 + (Math.random() - 0.5) * 0.12;
      posCylinder[i3 + 2] = (((i - 1500) / 1500) - 0.5) * 2.2;
    } else if (i < 4500) {
      // Central cab body chassis
      posCylinder[i3 + 0] = (Math.random() - 0.5) * 0.9;
      posCylinder[i3 + 1] = -0.55 + Math.random() * 0.75;
      posCylinder[i3 + 2] = (((i - 3000) / 1500) - 0.5) * 1.3 - 0.2;
    } else if (i < 5400) {
      // Tall Rig Mast
      posCylinder[i3 + 0] = (Math.random() - 0.5) * 0.08;
      posCylinder[i3 + 1] = -0.75 + Math.random() * 2.8;
      posCylinder[i3 + 2] = 0.6 + (Math.random() - 0.5) * 0.08;
    } else {
      // Vertical Drill string
      posCylinder[i3 + 0] = 0.0;
      posCylinder[i3 + 1] = -1.1 + Math.random() * 2.8;
      posCylinder[i3 + 2] = 0.8;
    }

    // 3. Core Drill Bit Shape (Cylinder, Cone, Cutting Teeth)
    if (i < 3000) {
      // Cylinder barrel
      const angle = (i / 3000) * Math.PI * 2;
      const r = 0.7;
      posWaves[i3 + 0] = Math.cos(angle) * r;
      posWaves[i3 + 1] = (((i / 3000) - 0.5) * 1.8) + 0.1;
      posWaves[i3 + 2] = Math.sin(angle) * r;
    } else if (i < 4800) {
      // Cone top connector
      const pct = (i - 3000) / 1800;
      const angle = pct * Math.PI * 2;
      const r = 0.7 * (1.0 - pct);
      posWaves[i3 + 0] = Math.cos(angle) * r;
      posWaves[i3 + 1] = 1.0 + pct * 0.6;
      posWaves[i3 + 2] = Math.sin(angle) * r;
    } else {
      // Diamond cutting teeth at bottom
      const pct = (i - 4800) / 1200;
      const angle = pct * Math.PI * 2;
      const isTooth = Math.floor(angle * 12) % 2 === 0;
      const r = 0.7 + (isTooth ? 0.06 : 0.0);
      posWaves[i3 + 0] = Math.cos(angle) * r;
      posWaves[i3 + 1] = -0.8 - (isTooth ? 0.1 : 0.0);
      posWaves[i3 + 2] = Math.sin(angle) * r;
    }

    // 4. Gear Shape (Fleet / Machinery Cogwheel)
    const gearAngle = Math.random() * Math.PI * 2;
    const teeth = 8;
    const gearR = 1.1 + (Math.sin(gearAngle * teeth) > 0.0 ? 0.3 : 0.0);
    posGear[i3 + 0] = Math.cos(gearAngle) * gearR;
    posGear[i3 + 1] = (Math.random() - 0.5) * 0.5;
    posGear[i3 + 2] = Math.sin(gearAngle) * gearR;

    // 5. Sphere Shape (Jeddah HQ Globe with Saudi Map Outline and Jeddah city beacon)
    let theta, phi;
    const centerLon = 45.0;
    const centerLat = 24.25;
    const scale = 1.7; // Scale up the country's surface footprint by 70%

    if (i >= 5920) {
      // Jeddah Beacon (Highly concentrated node, scaled to align with new coast line)
      const rawLon = 39.1925 + (Math.random() - 0.5) * 0.4;
      const rawLat = 21.4858 + (Math.random() - 0.5) * 0.4;
      const lon = centerLon + (rawLon - centerLon) * scale;
      const lat = centerLat + (rawLat - centerLat) * scale;
      theta = (lon * Math.PI) / 180.0;
      phi = ((90.0 - lat) * Math.PI) / 180.0;
    } else if (i >= 5000) {
      // Saudi Arabia Map Outline (distribute particles along line segments of the boundary border, scaled)
      const segIndex = Math.floor(Math.random() * (saudiVertices.length - 1));
      const A = saudiVertices[segIndex];
      const B = saudiVertices[segIndex + 1];
      const t = Math.random();
      const rawLon = A.lon + (B.lon - A.lon) * t;
      const rawLat = A.lat + (B.lat - A.lat) * t;
      const lon = centerLon + (rawLon - centerLon) * scale;
      const lat = centerLat + (rawLat - centerLat) * scale;
      theta = (lon * Math.PI) / 180.0;
      phi = ((90.0 - lat) * Math.PI) / 180.0;
    } else {
      // General Globe Grid
      const u = Math.random();
      const v = Math.random();
      theta = u * 2.0 * Math.PI;
      phi = Math.acos(2.0 * v - 1.0);
    }
    const sphR = 1.35;
    posSphere[i3 + 0] = sphR * Math.sin(phi) * Math.cos(theta);
    posSphere[i3 + 1] = sphR * Math.sin(phi) * Math.sin(theta);
    posSphere[i3 + 2] = sphR * Math.cos(phi);

    // 1. Terrain Shape (Desert Dunes + Drill Bit Shape Overlay)
    if (i >= 4500) {
      const subI = i - 4500;
      if (subI < 500) {
        // Vertical mast structure
        const mastLine = subI % 4;
        const offsetVal = 0.2;
        let mx = offsetVal * (mastLine === 0 || mastLine === 1 ? 1 : -1);
        let mz = offsetVal * (mastLine === 0 || mastLine === 2 ? 1 : -1);
        let my = ((subI / 500) * 3.5) - 0.75;
        posTerrain[i3 + 0] = mx;
        posTerrain[i3 + 1] = my;
        posTerrain[i3 + 2] = mz;
      } else if (subI < 1100) {
        // Spiral drill screw/auger
        const pct = (subI - 500) / 600;
        const angle = pct * Math.PI * 18;
        const radius = 0.35 * (1.0 - pct * 0.65);
        let my = (pct * 1.5) - 0.8;
        posTerrain[i3 + 0] = Math.cos(angle) * radius;
        posTerrain[i3 + 1] = my;
        posTerrain[i3 + 2] = Math.sin(angle) * radius;
      } else {
        // Soil debris sparks at drilling tip
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * 0.6;
        posTerrain[i3 + 0] = Math.cos(angle) * r;
        posTerrain[i3 + 1] = -0.6 + (Math.random() - 0.5) * 0.1;
        posTerrain[i3 + 2] = Math.sin(angle) * r;
      }

      // Colors configuration
      if (i >= 5000) {
        // Bright white star nodes (representing Saudi/Jeddah on globe)
        colors[i3 + 0] = 1.0;
        colors[i3 + 1] = 1.0;
        colors[i3 + 2] = 1.0;
      } else {
        // Safety Orange for the drilling mechanics
        colors[i3 + 0] = 1.0;
        colors[i3 + 1] = 0.235;
        colors[i3 + 2] = 0.0;
      }
    } else {
      // Dunes
      const tx = (Math.random() - 0.5) * 8.0;
      const tz = (Math.random() - 0.5) * 8.0;
      const ty = Math.sin(tx * 1.2) * Math.cos(tz * 1.2) * 0.4 - 0.5;
      posTerrain[i3 + 0] = tx;
      posTerrain[i3 + 1] = ty;
      posTerrain[i3 + 2] = tz;

      const dist = Math.sqrt(tx * tx + tz * tz);
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, dist / 4.0);
      colors[i3 + 0] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
  }

  // Set initial position attribute to Terrain
  const currentPositions = new Float32Array(posTerrain);
  geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    transparent: true,
    opacity: 0.85
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  points.rotation.x = 0.2;
  points.rotation.z = 0.1;

  // Shapes registry
  const shapes = [posTerrain, posCylinder, posWaves, posGear, posSphere];

  // Object representing the morph target progression state
  const morphState = { progress: 0.0 };

  gsap.to(morphState, {
    progress: 4.0,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2
    }
  });

  // Tilt and zoom rotation
  gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2
    }
  })
  .to(points.rotation, {
    y: Math.PI * 2.5,
    ease: "none"
  }, 0)
  .to(camera.position, {
    z: 4.2,
    y: 0.8,
    ease: "none"
  }, 0);

  const clock = new THREE.Clock();

  function tick() {
    const elapsedTime = clock.getElapsedTime();

    // Constant rotation speed offset
    points.rotation.y += 0.005;

    // Linear interpolate particles based on scroll progress
    const val = morphState.progress;
    const baseIndex = Math.floor(val);
    const fraction = val - baseIndex;
    const nextIndex = Math.min(baseIndex + 1, 4);

    const positionsAttr = geometry.attributes.position;
    const array = positionsAttr.array;

    const currentShape = shapes[baseIndex];
    const nextShape = shapes[nextIndex];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const startX = currentShape[i3 + 0] + (nextShape[i3 + 0] - currentShape[i3 + 0]) * fraction;
      const startY = currentShape[i3 + 1] + (nextShape[i3 + 1] - currentShape[i3 + 1]) * fraction;
      const startZ = currentShape[i3 + 2] + (nextShape[i3 + 2] - currentShape[i3 + 2]) * fraction;

      array[i3 + 0] = startX;
      array[i3 + 1] = startY;
      array[i3 + 2] = startZ;

      // Add a subtle particle animation waviness in real-time
      if (baseIndex === 0) { // terrain & drill ripples
        if (i >= 4500) {
          const subI = i - 4500;
          if (subI >= 500 && subI < 1100) {
            // Rotating spiral drill bit screw
            const angleOffset = elapsedTime * 9.0;
            array[i3 + 0] = startX * Math.cos(angleOffset) - startZ * Math.sin(angleOffset);
            array[i3 + 2] = startX * Math.sin(angleOffset) + startZ * Math.cos(angleOffset);
          } else if (subI >= 1100) {
            // Vibrating debris sparks at tip
            array[i3 + 0] += (Math.random() - 0.5) * 0.04;
            array[i3 + 2] += (Math.random() - 0.5) * 0.04;
            array[i3 + 1] += (Math.random() - 0.5) * 0.015;
          }
        } else {
          // Dunes waving ripples
          array[i3 + 1] += Math.sin(elapsedTime + startX) * 0.015;
        }
      } else if (baseIndex === 2) { // Core drill bit subtle drilling vibration/ripple
        array[i3 + 1] += Math.sin(elapsedTime * 3.0 + startX) * 0.015;
      }
    }

    positionsAttr.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    
    gsap.to(points.rotation, {
      x: 0.2 + mouseY * 0.3,
      z: 0.1 + mouseX * 0.3,
      duration: 1.5,
      ease: "power2.out"
    });
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  tick();
}

function setupNavigation() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav-links");
  
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      nav.classList.toggle("active");
    });
    
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        toggle.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }
}

function triggerHeroAnimations() {
  const tl = gsap.timeline();
  
  tl.from(".main-header", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
  
  tl.from(".hero-bg-image", {
    scale: 1.08,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  }, "-=0.6");
  
  tl.from(".hero-tag", {
    opacity: 0,
    y: 15,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.8");
  
  tl.from(".hero-title span", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.9,
    ease: "power4.out"
  }, "-=0.6");
  
  tl.from(".hero-description", {
    opacity: 0,
    y: 15,
    duration: 0.6
  }, "-=0.6");
  
  tl.from(".hero-buttons", {
    opacity: 0,
    y: 15,
    duration: 0.6
  }, "-=0.5");
}

// Animated stats counters
function setupAnimatedCounters() {
  const counters = document.querySelectorAll(".stat-number");
  
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.textContent.replace(/[0-9.]/g, '');
    const obj = { val: 0 };
    
    gsap.to(obj, {
      scrollTrigger: {
        trigger: counter,
        start: "top 90%",
      },
      val: target,
      duration: 2.0,
      ease: "power2.out",
      onUpdate: () => {
        counter.textContent = Math.floor(obj.val) + suffix;
      }
    });
  });
}

function setupScrollAnimations() {
  gsap.fromTo(".about-text-content",
    { opacity: 0, x: -35 },
    {
      scrollTrigger: { trigger: ".about-section", start: "top 75%", once: true },
      opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
      immediateRender: false, clearProps: "opacity,transform"
    }
  );

  gsap.fromTo(".capability-box",
    { opacity: 0, x: 35 },
    {
      scrollTrigger: { trigger: ".about-section", start: "top 75%", once: true },
      opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
      immediateRender: false, clearProps: "opacity,transform"
    }
  );

  const visualLefts = document.querySelectorAll(".reveal-left");
  visualLefts.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -80 },
      {
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
        opacity: 1, x: 0, duration: 1.0, ease: "power3.out",
        immediateRender: false, clearProps: "opacity,transform"
      }
    );
  });

  const visualRights = document.querySelectorAll(".reveal-right");
  visualRights.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: 80 },
      {
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
        opacity: 1, x: 0, duration: 1.0, ease: "power3.out",
        immediateRender: false, clearProps: "opacity,transform"
      }
    );
  });

  gsap.fromTo(".bento-item",
    { opacity: 0, y: 20 },
    {
      scrollTrigger: { trigger: ".bento-grid", start: "top 85%", once: true },
      opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power3.out",
      immediateRender: false, clearProps: "opacity,transform"
    }
  );

  gsap.fromTo(".industry-card-item",
    { opacity: 0, x: -35 },
    {
      scrollTrigger: {
        trigger: ".industries-slider-container",
        start: "top 85%",
        once: true,
        toggleActions: "play none none none"
      },
      opacity: 1,
      x: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      immediateRender: false,
      clearProps: "opacity,transform"
    }
  );

  gsap.fromTo(".why-cell",
    { opacity: 0, y: 20 },
    {
      scrollTrigger: {
        trigger: ".why-box-grid",
        start: "top 85%",
        once: true,
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      stagger: 0.06,
      duration: 0.6,
      ease: "power2.out",
      immediateRender: false,
      clearProps: "opacity,transform"
    }
  );
}

function setupSpecsComparator() {
  const tabs = document.querySelectorAll(".tab-btn");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const rigKey = tab.dataset.rig;
      const data = RIG_DATABASE[rigKey];
      
      if (data) {
        // Crossfade the rig photo
        const rigPhoto = document.getElementById("rig-photo");
        if (rigPhoto) {
          gsap.to(rigPhoto, {
            opacity: 0,
            scale: 0.95,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => {
              rigPhoto.src = data.image;
              rigPhoto.alt = data.name;
              gsap.to(rigPhoto, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
              });
            }
          });
        }

        document.getElementById("rig-display-name").textContent = data.name;
        document.getElementById("rig-notable-feature").textContent = data.feature;
        document.getElementById("spec-pulldown-val").textContent = data.pulldown;
        document.getElementById("spec-retract-val").textContent = data.retract;
        document.getElementById("spec-torque-val").textContent = data.torque;
        document.getElementById("spec-depth-val").textContent = data.depth;
        document.getElementById("spec-engine").textContent = data.engine;
        document.getElementById("spec-auger").textContent = data.auger;
        document.getElementById("spec-type").textContent = data.type;

        gsap.to("#bar-pulldown", { width: `${data.pulldownPercent}%`, duration: 0.6, ease: "power2.out" });
        gsap.to("#bar-retract", { width: `${data.retractPercent}%`, duration: 0.6, ease: "power2.out" });
        gsap.to("#bar-torque", { width: `${data.torquePercent}%`, duration: 0.6, ease: "power2.out" });
        gsap.to("#bar-depth", { width: `${data.depthPercent}%`, duration: 0.6, ease: "power2.out" });
      }
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success-msg");
  
  if (form && successMsg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      gsap.to(form, {
        opacity: 0,
        y: -15,
        duration: 0.4,
        onComplete: () => {
          form.classList.add("hidden");
          successMsg.classList.remove("hidden");
          gsap.fromTo(successMsg, 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
          );
        }
      });
    });
  }
}

function setupBentoGlowLoop() {
  const items = document.querySelectorAll(".bento-item");
  if (items.length === 0) return;

  const tl = gsap.timeline({ repeat: -1 });

  items.forEach((item) => {
    tl.to(item, {
      borderColor: "rgba(255, 60, 0, 0.75)",
      boxShadow: "0 0 30px rgba(255, 60, 0, 0.3)",
      duration: 1.2,
      ease: "power1.inOut"
    })
    .to(item, {
      borderColor: "rgba(255, 255, 255, 0.08)",
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
      duration: 1.2,
      ease: "power1.inOut"
    }, "+=0.15");
  });
}

function setupIndustriesHighlightLoop() {
  const cards = document.querySelectorAll('.industry-card-item');
  if (cards.length === 0) return;

  let currentIndex = 0;
  let isPaused = false;
  let intervalId = null;

  function activateCard(index) {
    // Remove active from all
    cards.forEach(c => {
      c.classList.remove('industry-active');
      // Re-trigger shimmer by forcing reflow
      void c.offsetWidth;
    });

    // Add active to target
    const card = cards[index];
    card.classList.add('industry-active');

    // Scroll into soft view if card is above viewport (optional smooth nudge)
    const rect = card.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > window.innerHeight) return;
  }

  function advance() {
    if (isPaused) return;
    currentIndex = (currentIndex + 1) % cards.length;
    activateCard(currentIndex);
  }

  // Start with first card
  activateCard(0);
  intervalId = setInterval(advance, 2200);

  // Pause on hover, resume on leave
  cards.forEach((card, i) => {
    card.addEventListener('mouseenter', () => {
      isPaused = true;
      cards.forEach(c => c.classList.remove('industry-active'));
      card.classList.add('industry-active');
      currentIndex = i;
    });
    card.addEventListener('mouseleave', () => {
      isPaused = false;
    });
  });
}


if (document.readyState === "complete" || document.readyState === "interactive") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
