import React, { useState, useRef, useEffect } from 'react';

export default function DrawingPage() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(5);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.7;
    canvas.style.width = `${window.innerWidth * 0.8}px`;
    canvas.style.height = `${window.innerHeight * 0.7}px`;

    const context = canvas.getContext('2d');
    context.scale(1, 1);
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    contextRef.current = context;
  }, [color, lineWidth]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#2c3e50] text-white p-6">
          <h1 className="text-3xl font-bold">Drawing Canvas</h1>
          <p className="mt-2 text-gray-200">Professional drawing tool with GIS-inspired design</p>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <label htmlFor="color" className="text-gray-700 font-medium">Color:</label>
              <input
                type="color"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-10 h-10 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="lineWidth" className="text-gray-700 font-medium">Line Width:</label>
              <input
                type="range"
                id="lineWidth"
                min="1"
                max="50"
                value={lineWidth}
                onChange={(e) => setLineWidth(e.target.value)}
                className="w-32"
              />
              <span className="text-gray-600">{lineWidth}px</span>
            </div>

            <button
              onClick={clearCanvas}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Clear Canvas
            </button>
          </div>

          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              className="bg-white cursor-crosshair"
            />
          </div>
        </div>
      </div>
    </div>
  );
}