"use client";

import { useState } from "react";
import { ColorPicker } from "@/components/ui/color-picker";
import { IconPicker } from "@/components/ui/icon-picker";
import { ImageUpload } from "@/components/ui/image-upload";

interface AgentEditFormProps {
  agent: {
    id: number;
    name: string;
    status: string;
    createdDate: string;
  };
  onClose: () => void;
}

export function AgentEditForm({ agent, onClose }: AgentEditFormProps) {
  const [formData, setFormData] = useState({
    name: agent.name,
    greeting: "Hello! How can I help you today?",
    widgetColor: "#5750F1",
    chatIcon: "💬",
    widgetImage: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Saving agent:", formData);
    onClose();
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">1</span>
            <h3 className="text-lg font-semibold text-dark dark:text-white">Basic Information</h3>
          </div>

          {/* Bot Name */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-dark dark:text-white">
              Bot Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border-2 border-gray-200 bg-gradient-to-r from-white to-gray-50 px-6 py-4 text-dark shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all dark:border-gray-600 dark:from-gray-800 dark:to-gray-700 dark:text-white"
              placeholder="Enter a descriptive name for your bot"
            />
          </div>

          {/* Greeting Message */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-dark dark:text-white">
              Greeting Message
            </label>
            <textarea
              value={formData.greeting}
              onChange={(e) => setFormData({ ...formData, greeting: e.target.value })}
              rows={3}
              className="w-full rounded-xl border-2 border-gray-200 bg-gradient-to-r from-white to-gray-50 px-6 py-4 text-dark shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none dark:border-gray-600 dark:from-gray-800 dark:to-gray-700 dark:text-white"
              placeholder="Enter the first message users will see"
            />
          </div>
        </div>

        {/* Visual Customization */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">2</span>
            <h3 className="text-lg font-semibold text-dark dark:text-white">Visual Customization</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Widget Color Picker */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-dark dark:text-white">
                Widget Color
              </label>
              <ColorPicker
                color={formData.widgetColor}
                onChange={(color) => setFormData({ ...formData, widgetColor: color })}
              />
            </div>

            {/* Chat Bubble Icon Picker */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-dark dark:text-white">
                Chat Bubble Icon
              </label>
              <IconPicker
                selectedIcon={formData.chatIcon}
                onChange={(icon) => setFormData({ ...formData, chatIcon: icon })}
              />
            </div>
          </div>

          {/* Widget Image Upload */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-dark dark:text-white">
              Widget Image
            </label>
            <ImageUpload
              onFileSelect={(file) => setFormData({ ...formData, widgetImage: file })}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border-2 border-gray-200 px-8 py-3 text-sm font-semibold text-dark hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}