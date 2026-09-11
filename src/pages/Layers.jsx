export default function Layers() {
  const layers = [
    {
      id: 1,
      name: 'الحدود الإدارية',
      type: 'نقطي',
      source: 'OpenStreetMap',
      visible: true,
      opacity: 100,
      color: '#e74c3c',
      features: 1240,
      size: '2.4 MB',
      updated: '2026-09-08',
    },
    {
      id: 2,
      name: 'شبكة الطرق الرئيسية',
      type: 'خطي',
      source: 'وزارة النقل',
      visible: true,
      opacity: 85,
      color: '#3498db',
      features: 892,
      size: '1.8 MB',
      updated: '2026-09-05',
    },
    {
      id: 3,
      name: 'الأراضي الزراعية',
      type: 'مساحي',
      source: 'هيئة المساحة',
      visible: false,
      opacity: 60,
      color: '#27ae60',
      features: 3420,
      size: '5.1 MB',
      updated: '2026-08-30',
    },
    {
      id: 4,
      name: 'نقاط المسح الميداني',
      type: 'نقطي',
      source: 'فريق المسح',
      visible: true,
      opacity: 100,
      color: '#f39c12',
      features: 156,
      size: '620 KB',
      updated: '2026-09-09',
    },
    {
      id: 5,
      name: 'المناطق المحمية',
      type: 'مساحي',
      source: 'وزارة البيئة',
      visible: false,
      opacity: 75,
      color: '#8e44ad',
      features: 78,
      size: '980 KB',
      updated: '2026-07-22',
    },
    {
      id: 6,
      name: 'خطوط الكنتور',
      type: 'خطي',
      source: 'هيئة المساحة',
      visible: true,
      opacity: 40,
      color: '#7f8c8d',
      features: 5210,
      size: '12.7 MB',
      updated: '2026-06-18',
    },
    {
      id: 7,
      name: 'الأحواض المائية',
      type: 'مساحي',
      source: 'المركز الجيولوجي',
      visible: false,
      opacity: 50,
      color: '#16a085',
      features: 64,
      size: '3.2 MB',
      updated: '2026-05-11',
    },
    {
      id: 8,
      name: 'موقع المشاريع',
      type: 'نقطي',
      source: 'إدارة المشاريع',
      visible: true,
      opacity: 90,
      color: '#c0392b',
      features: 23,
      size: '180 KB',
      updated: '2026-09-10',
    },
  ];

  const legendItems = [
    { label: 'نقطي', color: '#e74c3c', icon: '●' },
    { label: 'خطي', color: '#3498db', icon: '━' },
    { label: 'مساحي', color: '#27ae60', icon: '■' },
  ];

  const totalMB = layers.reduce((sum, l) => {
    const match = l.size.match(/^([\d.]+)\s*(\w+)$/);
    if (!match) return sum;
    const val = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    return sum + (unit === 'KB' ? val / 1024 : val);
  }, 0);

  return (
    <div dir="rtl" className="min-h-screen bg-[#f0f4f8] text-[#2c3e50] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2c3e50] rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18M15 3v18" />
              </svg>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#2c3e50]">لوحة الطبقات</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="بحث في الطبقات..."
                className="bg-transparent outline-none text-sm w-40"
              />
            </div>
            <button className="bg-[#2c3e50] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#34495e] transition-colors shadow-sm">
              إضافة طبقة
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">إجمالي الطبقات</p>
                <p className="text-2xl font-bold mt-1">{layers.length}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">طبقات ظاهرة</p>
                <p className="text-2xl font-bold mt-1">{layers.filter(l => l.visible).length}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">إجمالي المعالم</p>
                <p className="text-2xl font-bold mt-1">
                  {layers.reduce((sum, l) => sum + l.features, 0).toLocaleString('ar-EG')}
                </p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">الحجم الإجمالي</p>
                <p className="text-2xl font-bold mt-1">
                  {totalMB.toFixed(1)} MB
                </p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Layers Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-lg text-[#2c3e50]">قائمة الطبقات</h2>
            <div className="flex items-center gap-4 text-sm">
              {legendItems.map((item, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span className="text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
                <tr>
                  <th className="p-4">اسم الطبقة</th>
                  <th className="p-4">النوع</th>
                  <th className="p-4">المصدر</th>
                  <th className="p-4">المعالم</th>
                  <th className="p-4">الحجم</th>
                  <th className="p-4">تاريخ التحديث</th>
                  <th className="p-4">الشفافية</th>
                  <th className="p-4">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {layers.map((layer) => (
                  <tr key={layer.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: layer.color }}></span>
                      {layer.name}
                    </td>
                    <td className="p-4 text-gray-600">{layer.type}</td>
                    <td className="p-4 text-gray-600">{layer.source}</td>
                    <td className="p-4 text-gray-600">{layer.features.toLocaleString('ar-EG')}</td>
                    <td className="p-4 text-gray-600">{layer.size}</td>
                    <td className="p-4 text-gray-600">{layer.updated}</td>
                    <td className="p-4 text-gray-600">{layer.opacity}%</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${layer.visible ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {layer.visible ? 'ظاهرة' : 'مخفية'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
