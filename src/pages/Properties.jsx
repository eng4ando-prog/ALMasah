export default function Properties() {
  const properties = [
    {
      id: 1,
      name: "قطعة أرض سكنية - الحي الراقي",
      type: "أرض",
      area: 750,
      unit: "م²",
      price: 850000,
      currency: "ر.س",
      status: "متاحة",
      coordinates: "24.7136° N, 46.6753° E",
      owner: "شركة التطوير العقاري",
      description: "قطعة أرض سكنية مميزة في موقع استراتيجي، قريبة من جميع الخدمات والمرافق العامة.",
      features: ["شارع 20م", "خدمات متكاملة", "قريبة من المدارس"],
      color: "#2c3e50",
      icon: "🏞️",
      lastUpdated: "2026-09-08"
    },
    {
      id: 2,
      name: "مبنى تجاري - شارع الملك فهد",
      type: "مبنى تجاري",
      area: 1200,
      unit: "م²",
      price: 2500000,
      currency: "ر.س",
      status: "مؤجّر",
      coordinates: "24.6880° N, 46.6854° E",
      owner: "صندوق الاستثمارات العقارية",
      description: "مبنى تجاري عصري بموقع حيوي، إشغال كامل بعقود طويلة الأجل مع مستأجرين موثوقين.",
      features: ["5 طوابق", "مصعدين", "مواقف سيارات"],
      color: "#34495e",
      icon: "🏢",
      lastUpdated: "2026-09-05"
    },
    {
      id: 3,
      name: "مستودع لوجستي - المنطقة الصناعية",
      type: "مستودع",
      area: 5000,
      unit: "م²",
      price: 1200000,
      currency: "ر.س",
      status: "متاحة",
      coordinates: "24.5231° N, 46.7202° E",
      owner: "الشركة اللوجستية المتحدة",
      description: "مستودع ضخم بارتفاع 12 متر، مجهز بأحدث أنظمة الإطفاء والتهوية، وصول مباشر للشاحنات.",
      features: ["رصيف تحميل", "نظام إطفاء", "تهوية صناعية"],
      color: "#1a252f",
      icon: "🏭",
      lastUpdated: "2026-09-01"
    }
  ];

  const stats = [
    { label: "إجمالي العقارات", value: "3,247", trend: "+12.5%", color: "#2c3e50" },
    { label: "قيمة المحفظة", value: "1.2 مليار", trend: "+8.3%", color: "#34495e" },
    { label: "معدل الإشغال", value: "94.2%", trend: "+2.1%", color: "#1a252f" },
    { label: "صفقات هذا الشهر", value: "47", trend: "+18.7%", color: "#2c3e50" }
  ];

  const layers = [
    { name: "الطرق", visible: true, type: "خطوط" },
    { name: "المناطق السكنية", visible: true, type: "مساحات" },
    { name: "شبكة المياه", visible: false, type: "خطوط" },
    { name: "الأراضي الزراعية", visible: true, type: "مساحات" },
    { name: "نقاط الاهتمام", visible: false, type: "نقاط" }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6 lg:p-8" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4