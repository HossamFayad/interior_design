// ==========================================
// Artisan Interior Design & Finishing - Configuration & Declarative Engine
// ==========================================

const DEFAULT_INTERIOR_CONFIG = {
  companyName: "Artisan Luxury Interiors & Finishing",
  companyNameAr: "آرتيزان للتصميم الداخلي والتشطيبات الفاخرة",
  leadEngineer: "م. إسلام فياض",
  engineerTitle: "استشاري التصميم الداخلي وإدارة المشروعات الهندسية",
  bio: "خبرة أكثر من 12 عاماً في تشطيب الفلل والوحدات السكنية والإدارية بالتجمع الخامس والشيخ زايد والساحل الشمالي. نلتزم بالتسليم في الموعد باليوم وعقد ملزم بغرامة تأخير.",
  whatsappNumber: "201000000000", // Default Zeroed (Dynamic via Admin Panel)
  phoneDisplay: "01000000000",   // Default Zeroed (Dynamic via Admin Panel)
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

// ==========================================
// Universal Declarative Config Engine (Security Hardened)
// ==========================================
class ConfigEngine {
  constructor(storageKey, defaults) {
    this.storageKey = storageKey;
    this.defaults = defaults;
    this.data = this.load();
  }

  // Safe HTML Escaper: encodes all special characters to prevent DOM-based XSS
  escape(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Safe URL sanitizer: prevents javascript: URI injection
  sanitizeUrl(url) {
    if (!url) return "#";
    const trimmed = String(url).trim();
    if (/^(https?:\/\/|\/|mailto:|tel:|data:image\/)/i.test(trimmed)) {
      return trimmed;
    }
    return "#";
  }

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) return this.deepMerge(this.defaults, JSON.parse(saved));
    } catch (e) {
      console.error("ConfigEngine load error:", e);
    }
    return JSON.parse(JSON.stringify(this.defaults));
  }

  save(partial) {
    this.data = this.deepMerge(this.data, partial);
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
      this.apply();
      return true;
    } catch (e) {
      console.error("ConfigEngine save error:", e);
      return false;
    }
  }

  reset() {
    localStorage.removeItem(this.storageKey);
    this.data = JSON.parse(JSON.stringify(this.defaults));
    this.apply();
    return true;
  }

  // Prototype Pollution Guarded Deep Merge
  deepMerge(target, source) {
    const output = Object.assign({}, target);
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach(key => {
        // Guard against prototype pollution
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') return;
        if (this.isObject(source[key])) {
          if (!(key in target)) Object.assign(output, { [key]: source[key] });
          else output[key] = this.deepMerge(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }

  isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  }

  getCleanWhatsApp() {
    return (this.data.whatsappNumber || "201000000000").toString().replace(/[^0-9]/g, '');
  }

  getDisplayPhone() {
    const raw = (this.data.phoneDisplay || "").toString().replace(/[^0-9+\s\-()]/g, '').trim();
    return raw || ("0" + this.getCleanWhatsApp().replace(/^20/, ''));
  }

  getWhatsAppUrl(customMessage = "") {
    const wa = this.getCleanWhatsApp();
    return customMessage 
      ? `https://wa.me/${wa}?text=${encodeURIComponent(customMessage)}`
      : `https://wa.me/${wa}`;
  }

  // Declarative DOM Applier with Strict Sanitization
  apply() {
    const cleanWa = this.getCleanWhatsApp();
    const phone = this.getDisplayPhone();
    const telHref = phone.replace(/[^0-9+]/g, '');

    // 1. Phone Links: [data-bind-phone] -> strictly numbers and optional leading +
    document.querySelectorAll("[data-bind-phone]").forEach(el => {
      el.setAttribute("href", `tel:${telHref}`);
    });

    // 2. Phone Display Text: [data-bind-phone-display] -> textContent prevents XSS
    document.querySelectorAll("[data-bind-phone-display]").forEach(el => {
      el.textContent = phone;
    });

    // 3. WhatsApp Links: [data-bind-whatsapp]
    document.querySelectorAll("[data-bind-whatsapp]").forEach(el => {
      const msg = el.getAttribute("data-whatsapp-msg") || "";
      el.setAttribute("href", this.getWhatsAppUrl(msg));
    });

    // 4. Text Bindings: [data-bind-text] -> textContent prevents XSS
    document.querySelectorAll("[data-bind-text]").forEach(el => {
      const path = el.getAttribute("data-bind-text");
      const val = this.getByPath(this.data, path);
      if (val !== undefined && val !== null) {
        el.textContent = val;
      }
    });
  }

  // Form Binding for Admin: auto-populates [data-config-field="..."]
  populateForm(formSelector) {
    const form = typeof formSelector === 'string' ? document.querySelector(formSelector) : formSelector;
    if (!form) return;
    form.querySelectorAll("[data-config-field]").forEach(input => {
      const path = input.getAttribute("data-config-field");
      const val = this.getByPath(this.data, path);
      if (val === undefined || val === null) return;
      if (input.type === 'checkbox') {
        input.checked = !!val;
      } else {
        input.value = val;
      }
    });
  }

  // Form Extractor for Admin: extracts values with strict validation
  extractFormData(formSelector) {
    const form = typeof formSelector === 'string' ? document.querySelector(formSelector) : formSelector;
    if (!form) return {};
    const result = {};
    form.querySelectorAll("[data-config-field]").forEach(input => {
      const path = input.getAttribute("data-config-field");
      let val;
      if (input.type === 'checkbox') {
        val = input.checked;
      } else if (input.type === 'number') {
        val = Number(input.value);
      } else {
        val = input.value.trim().slice(0, 300); // Storage DoS limit
        if (path === 'whatsappNumber') {
          val = val.replace(/[^0-9]/g, '');
        } else if (path === 'phoneDisplay') {
          val = val.replace(/[^0-9+\s\-()]/g, '');
        }
      }
      this.setByPath(result, path, val);
    });
    return result;
  }

  getByPath(obj, path) {
    const parts = path.split('.');
    for (const part of parts) {
      if (part === '__proto__' || part === 'constructor' || part === 'prototype') return undefined;
    }
    return parts.reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  setByPath(obj, path, value) {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (part === '__proto__' || part === 'constructor' || part === 'prototype') return;
      if (!current[part]) current[part] = {};
      current = current[part];
    }
    const last = parts[parts.length - 1];
    if (last === '__proto__' || last === 'constructor' || last === 'prototype') return;
    current[last] = value;
  }
}

// Global Singleton Instance
window.AppConfig = new ConfigEngine("artisan_interior_config", DEFAULT_INTERIOR_CONFIG);
window.InteriorConfig = window.AppConfig.data;

// Compatibility aliases
function getInteriorConfig() { return window.AppConfig.data; }
function saveInteriorConfig(cfg) { return window.AppConfig.save(cfg); }
function resetInteriorConfig() { return window.AppConfig.reset(); }
