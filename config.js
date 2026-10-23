// ==========================================
// Artisan Interior Design & Finishing - Configuration
// ==========================================

const DEFAULT_INTERIOR_CONFIG = {
  companyName: "Artisan Luxury Interiors & Finishing",
  companyNameAr: "آرتيزان للتصميم الداخلي والتشطيبات الفاخرة",
  leadEngineer: "م. إسلام فياض",
  engineerTitle: "استشاري التصميم الداخلي وإدارة المشروعات الهندسية",
  bio: "خبرة أكثر من 12 عاماً في تشطيب الفلل والوحدات السكنية والإدارية بالتجمع الخامس والشيخ زايد والساحل الشمالي. نلتزم بالتسليم في الموعد باليوم وعقد ملزم بغرامة تأخير.",
  whatsappNumber: "201021021355", // Default WhatsApp phone
  phoneDisplay: "01021021355",
  workingHours: "يومياً من 10 صباحاً حتى 9 مساءً (المعاينات بموعد مسبق)",
  adminPin: "decor2026",

  // Top Announcement Promo
  promo: {
    active: true,
    text: "🔥 عرض نهاية الموسم: تصميم 3D ماكس مجاناً بالكامل + معاينة ومقايسة تفصيلية مع التعاقد هذا الشهر!",
    discountPercent: 10
  },

  // Finishing Packages for the Calculator
  packages: [
    {
      id: "super-lux",
      name: "باقة سوبر لوكس (Super Lux)",
      pricePerMeter: 3800,
      shortDesc: "تشطيب متكامل عملي وعالي الجودة للراغبين في السكن الفوري أو الاستثمار الإيجاري.",
      features: [
        "تأسيس سباكة BR ألماني مع شهادة ضمان معتمدة",
        "تأسيس كهرباء أسلاك السويدي أصلية 100%",
        "سيراميك فرز أول كليوباترا / الجوهرة للأرضيات",
        "دهانات جوتن ناعمة قابلة للغسيل (3 أوجه)",
        "أبواب غرف قشرة أرو ودهان إستر مع أكر استانلس"
      ],
      popular: false
    },
    {
      id: "ultra-lux",
      name: "باقة ألترا لوكس المودرن (Ultra Lux)",
      pricePerMeter: 5400,
      shortDesc: "الأكثر طلباً للفلل والشقق الحديثة مع بيت نور وجبس بورد وتوزيع إضاءة مهندس ديكور.",
      features: [
        "جميع بنود باقة السوبر لوكس + ترقيات الخامات",
        "بورسلين هندي / إسباني مستورد لقطع الريسبشن بالكامل",
        "أسقف جبس بورد كناوف ألماني مع بيوت نور وماجنتيك تراك",
        "تأسيس تكييفات كونسيلد مخفية وتجهيز سمارت هوم (Smart Home)",
        "دهانات قطيفة وسكيب ترافيرتينو ديكورية فاخرة",
        "أطقم حمامات ديورافيت / إيديال استاندرد مع خلاطات جروهي"
      ],
      popular: true
    },
    {
      id: "vip-luxury",
      name: "باقة القصور والفخامة (VIP Hotel Quality)",
      pricePerMeter: 7800,
      shortDesc: "أعلى درجات الفخامة والتفرد بمواصفات الفنادق العالمية والرخام الطبيعي والسمارت هوم الكامل.",
      features: [
        "رخام إيطالي طبيعي (كرارا / ستاتشواريو / بريشيا) للريسبشن",
        "نظام ذكي متكامل Smart Home (إضاءة، تكييف، صوتيات، ستائر)",
        "أبواب مصفحة تركي وأبواب داخلية خشب ماسيف زان وقشرة أرو",
        "كبائن حمامات سيكوريت 10 مم وزجاج عاكس مع شاور دفن جروهي",
        "إشراف هندسي يومي مقيم مع تقارير فيديو أسبوعية للمالك"
      ],
      popular: false
    }
  ],

  // 3D vs Reality Comparison Cases
  portfolioCases: [
    {
      id: "case-1",
      title: "فيلا سوديك ويست - ريسبشن ومجلس مودرن",
      location: "الشيخ زايد",
      area: "340 م²",
      duration: "75 يوم",
      render3dImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      realExecutionImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      notes: "تطابق بنسبة 99% بين الموديل الـ 3D المعروض على العميل وبين الواقع المنفذ بالرخام الإيطالي والإضاءة المخفية."
    },
    {
      id: "case-2",
      title: "دوبلكس هايد بارك - مطبخ أمريكي مفتوح وليفينج",
      location: "التجمع الخامس",
      area: "260 م²",
      duration: "60 يوم",
      render3dImg: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      realExecutionImg: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      notes: "تصميم وتنفيذ خامات كوريان مع خشب بولي لاك مضاد للخدش ورخام كوارتز."
    },
    {
      id: "case-3",
      title: "غرفة نوم ماستر ودريسينج روم متكاملة",
      location: "المعادي ديجلا",
      area: "45 م²",
      duration: "25 يوم",
      render3dImg: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
      realExecutionImg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      notes: "بانوهات خشبية دهان لاكيه مع إضاءة بروفايل ليد ودولاب زجاجي بروفايل أسود."
    }
  ],

  // Reviews & Testimonials
  reviews: [
    {
      clientName: "د. طارق الحسين",
      project: "تشطيب فيلا بالم هيلز (450 م²)",
      date: "منذ شهرين",
      rating: 5,
      comment: "أهم ميزة خلتني اختارهم هي الالتزام بالموعد؛ سلموني الفيلا قبل الميعاد المتفق عليه بـ 5 أيام! الشغل الهندسي في السباكة والكهرباء والجبس بورد على أعلى مستوى وعقد ملزم واضح جداً."
    },
    {
      clientName: "م. نورهان السعيد",
      project: "شقة ماونتن فيو هايد بارك (180 م²)",
      date: "منذ أسبوعين",
      rating: 5,
      comment: "كنت مسافرة في دبي ومش موجودة في مصر وكنت خايفة جداً من موضوع التشطيب. المهندس كان بيبعتلي فيديو أسبوعي بكل مرحلة، والواقع طلع طبق الأصل من الـ 3D اللي اتفقنا عليه!"
    },
    {
      clientName: "أ. هشام فهمي",
      project: "مقر شركة إداري بالتجمع (220 م²)",
      date: "منذ 3 أسابيع",
      rating: 5,
      comment: "شغل احترافي بدون أي بنود مستحدثة أو زيادة في السعر المتفق عليه. المقايسة كانت مفصلة بالقرش والخامات تم فحصها واستلامها بشهادات الضمان."
    }
  ]
};

function getInteriorConfig() {
  try {
    const saved = localStorage.getItem("artisan_interior_config");
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return DEFAULT_INTERIOR_CONFIG;
}

function saveInteriorConfig(cfg) {
  try {
    localStorage.setItem("artisan_interior_config", JSON.stringify(cfg));
    return true;
  } catch (e) {
    return false;
  }
}

window.InteriorConfig = getInteriorConfig();
window.saveInteriorConfig = saveInteriorConfig;
window.resetInteriorConfig = function() {
  localStorage.removeItem("artisan_interior_config");
  window.InteriorConfig = DEFAULT_INTERIOR_CONFIG;
  return true;
};
