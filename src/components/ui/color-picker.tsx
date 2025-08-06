"use client";

import { useState } from "react";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const PRESET_COLORS = [
  "#5750F1", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6",
  "#06B6D4", "#F97316", "#EC4899", "#6366F1", "#84CC16"
];

export function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 rounded-xl border-2 border-gray-200 bg-gradient-to-r from-white to-gray-50 px-6 py-4 shadow-sm hover:border-primary/30 hover:shadow-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 dark:border-gray-600 dark:from-gray-800 dark:to-gray-700"
      >
        <div className="relative">
          <div
            className="h-8 w-8 rounded-full border-3 border-white shadow-lg ring-2 ring-gray-200 dark:ring-gray-600"
            style={{ backgroundColor: color }}
          />
          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-white shadow-sm ring-1 ring-gray-200 dark:bg-gray-700 dark:ring-gray-600" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium text-dark dark:text-white">Selected Color</span>
          <span className="text-xs text-dark-4 dark:text-dark-6 font-mono">{color}</span>
        </div>
        <svg
          className="ml-auto h-5 w-5 text-dark-4 dark:text-dark-6 transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-[60] mt-3 w-full rounded-xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-dark dark:text-white mb-3 block">
                Custom Color
              </label>
              <div className="relative">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => onChange(e.target.value)}
                  className="h-12 w-full rounded-lg border-2 border-gray-200 cursor-pointer hover:border-primary/50 transition-colors dark:border-gray-600"
                />
                <div className="absolute inset-0 rounded-lg ring-2 ring-transparent hover:ring-primary/20 transition-all pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-semibold text-dark dark:text-white mb-3 block">
                Preset Colors
              </label>
              <div className="grid grid-cols-5 gap-3">
                {PRESET_COLORS.map((presetColor) => (
                  <button
                    key={presetColor}
                    type="button"
                    onClick={() => {
                      onChange(presetColor);
                      setIsOpen(false);
                    }}
                    className={`group relative h-10 w-10 rounded-full border-3 border-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 ${
                      color === presetColor ? "ring-2 ring-primary ring-offset-2 scale-110" : "hover:ring-2 hover:ring-gray-300"
                    }`}
                    style={{ backgroundColor: presetColor }}
                  >
                    {color === presetColor && (
                      <div className="absolute inset-0 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}