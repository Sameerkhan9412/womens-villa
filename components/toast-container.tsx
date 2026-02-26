"use client";

import { useToast } from "@/lib/toast-context";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, AlertCircle, Info } from "lucide-react";

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  const icons = {
    success: <Check className="w-4 h-4" />,
    error: <AlertCircle className="w-4 h-4" />,
    info: <Info className="w-4 h-4" />,
  };

  const colors = {
    success: "bg-charcoal text-white border-rose/30",
    error: "bg-red-900 text-white border-red-500/30",
    info: "bg-charcoal text-white border-taupe/30",
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex items-center gap-3 px-5 py-4 rounded-sm border shadow-luxury-lg backdrop-blur-sm min-w-[300px] ${colors[toast.type]}`}
          >
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                toast.type === "success"
                  ? "bg-rose/20"
                  : toast.type === "error"
                  ? "bg-red-500/20"
                  : "bg-taupe/20"
              }`}
            >
              {icons[toast.type]}
            </span>
            <p className="font-poppins text-sm flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 hover:opacity-70 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}