"use client";

import { useState, useRef } from "react";

interface ImageUploadProps {
  onFileSelect: (file: File | null) => void;
}

export function ImageUpload({ onFileSelect }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const removeImage = () => {
    setPreview(null);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`group relative cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
          isDragging
            ? "border-primary bg-primary/5 scale-[1.02]"
            : "border-gray-300 hover:border-primary/50 hover:bg-gray-50/50 dark:border-gray-600 dark:hover:bg-gray-800/50"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        
        {preview ? (
          <div className="space-y-6">
            <div className="relative inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview}
                alt="Preview"
                className="mx-auto h-40 w-40 rounded-xl object-cover shadow-lg ring-4 ring-white dark:ring-gray-700"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-dark dark:text-white">
                Image uploaded successfully
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage();
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 transition-colors dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove Image
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center shadow-inner">
              <svg
                className="h-10 w-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-dark dark:text-white">
                Upload Widget Image
              </p>
              <p className="text-sm text-dark-4 dark:text-dark-6">
                Drag and drop your image here, or click to browse
              </p>
              <p className="text-xs text-dark-5 dark:text-dark-7">
                PNG, JPG, GIF up to 10MB • Recommended: 400x400px
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Choose File
            </div>
          </div>
        )}
      </div>
    </div>
  );
}