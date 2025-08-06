"use client";

import { useState } from "react";

interface IconPickerProps {
  selectedIcon: string;
  onChange: (icon: string) => void;
}

const CHAT_ICONS = [
  "💬", "🗨️", "💭", "🗯️", "📢", "📣", "🔔", "📞", 
  "📱", "💌", "📧", "✉️", "🤖", "👋", "❓", "💡"
];

export function IconPicker({ selectedIcon, onChange }: IconPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 rounded-xl border-2 border-gray-200 bg-gradient-to-r from-white to-gray-50 px-6 py-4 shadow-sm hover:border-primary/30 hover:shadow-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 dark:border-gray-600 dark:from-gray-800 dark:to-gray-700"
      >
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/20 text-2xl shadow-inner">
            {selectedIcon}
          </div>
          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-primary shadow-sm ring-2 ring-white dark:ring-gray-800" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium text-dark dark:text-white">Chat Icon</span>
          <span className="text-xs text-dark-4 dark:text-dark-6">Click to change</span>
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
          <div className="space-y-4">
            <label className="text-sm font-semibold text-dark dark:text-white block">
              Choose an Icon
            </label>
            <div className="grid grid-cols-8 gap-3">
              {CHAT_ICONS.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => {
                    onChange(icon);
                    setIsOpen(false);
                  }}
                  className={`group relative flex h-12 w-12 items-center justify-center rounded-xl border-2 text-xl transition-all duration-200 ${
                    selectedIcon === icon 
                      ? "border-primary bg-primary/10 scale-110 shadow-lg" 
                      : "border-gray-200 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 dark:border-gray-600"
                  }`}
                >
                  {icon}
                  {selectedIcon === icon && (
                    <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                      <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}