import React, { useState } from 'react';

export default function Properties() {
  const [selectedLayer, setSelectedLayer] = useState(1);
  const [activeTab, setActiveTab] = useState('general');

  const layersProperties = [
    {
      id: 1,
      name: 'الحدود الإدارية',
      type: 'نقطي (Point)',
      crs: 'EPSG:4326 - WGS 84',
      source: 'OpenStreetMap',
      featuresCount: 1240,
      fileSize: '2.4 MB',
      lastModified: '2026-09-08 14:30',
      opacity: 100,
      fillColor: '#e74c3c',
      strokeColor: '#c0392b',
      strokeWidth: 2,
      attributes: [
        { name: 'ID', type: 'Integer', sample: '1001' },
        { name: 'District_Name', type: 'String', sample: 'المنطقة الشمالية' },
        { name: 'Population', type: 'Integer', sample: '45200' },
        { name: 'Area_KM2', type: 'Float', sample: '12.5' }
      ]
    },
    {
      id: 2,
      name: 'شبكة الطرق الرئيسية',
      type: 'خطي (LineString)',
      crs: 'EPSG:3857 - WGS 84 / Pseudo-Mercator',
      source: 'وزارة النقل',
      featuresCount: 892,
      fileSize: '1.8 MB',
      lastModified: '2026-09-05 09:15',
      opacity: 85,
      fillColor: '#3498db',
      strokeColor: '#2980b9',
      strokeWidth: 3,
      attributes: [
        { name: 'Road_ID', type: 'Integer', sample: '501' },
        { name: 'Road_Type', type: 'String', sample: 'شرياني رئيسي' },
        { name: 'Lanes', type: 'Integer', sample: '4' },
        { name: 'Speed_Limit', type: 'Integer', sample: '100' }
      ]
    }
  ];

  const currentProps = layersProperties.find(l => l.id === selectedLayer) || layersProperties[0];

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6 lg:p-8" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">خصائص الطبقات والبيانات الوصفية</h1>
          <p className="text-sm text-slate-500 mt-1">عرض وتعديل الخصائص الهندسية والرموز والجدول الوصفي للطبقة المختارة</p>
        </div>

        {/* Selector */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-slate-700 whitespace-nowrap">اختر الطبقة:</label>
          <select
            value={selectedLayer}
            onChange={(e) => setSelectedLayer(Number(e.target.value))}
            className="bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none font-medium"
          >
            {layersProperties.map((layer) => (
              <option key={layer.id} value={layer.id}>
                {layer.name} ({layer.type})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabs Nav */}
      <div className="flex border-b border-slate-200 mb-6 bg-white rounded-xl p-1 shadow-sm border">
        <button
          onClick={() => setActiveTab('general')}
          className={`flex-1 py-3 px-4 text-center rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'general' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          معلومات عامة
        </button>
        <button
          onClick={() => setActiveTab('symbology')}
          className={`flex-1 py-3 px-4 text-center rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'symbology' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          النمط والرموز (Symbology)
        </button>
        <button
          onClick={() => setActiveTab('attributes')}
          className={`flex-1 py-3 px-4 text-center rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'attributes' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          جدول الحقول (Attributes)
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6">
        {activeTab === 'general' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">اسم الطبقة</p>
              <p className="text-base font-bold text-slate-800">{currentProps.name}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">النوع الهندسي</p>
              <p className="text-base font-bold text-slate-800">{currentProps.type}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">نظام الإحداثيات (CRS)</p>
              <p className="text-base font-bold text-slate-800">{currentProps.crs}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">المصدر</p>
              <p className="text-base font-bold text-slate-800">{currentProps.source}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">عدد المعالم (Features)</p>
              <p className="text-base font-bold text-slate-800">{currentProps.featuresCount}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">حجم الملف / التعديل الأخير</p>
              <p className="text-base font-bold text-slate-800">{currentProps.fileSize} - {currentProps.lastModified}</p>
            </div>
          </div>
        )}

        {activeTab === 'symbology' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">لون التعبئة</label>
                <div className="flex items-center gap-3">
                  <input type="color" defaultValue={currentProps.fillColor} className="w-10 h-10 rounded cursor-pointer border border-slate-300" />
                  <span className="text-sm font-semibold text-slate-700">{currentProps.fillColor}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">لون الحدود</label>
                <div className="flex items-center gap-3">
                  <input type="color" defaultValue={currentProps.strokeColor} className="w-10 h-10 rounded cursor-pointer border border-slate-300" />
                  <span className="text-sm font-semibold text-slate-700">{currentProps.strokeColor}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">الشفافية ({currentProps.opacity}%)</label>
                <input type="range" min="0" max="100" defaultValue={currentProps.opacity} className="w-full accent-slate-800 cursor-pointer" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attributes' && (
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="p-3">اسم الحقل (Field Name)</th>
                  <th className="p-3">نوع البيانات (Data Type)</th>
                  <th className="p-3">عينة بيانات (Sample Value)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentProps.attributes.map((attr, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">{attr.name}</td>
                    <td className="p-3 text-slate-600">{attr.type}</td>
                    <td className="p-3 text-slate-500 font-mono">{attr.sample}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
