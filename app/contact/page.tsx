"use client";

import { useState } from "react";
import FadeIn from "@/components/fade-in";
import { useToast } from "@/lib/toast-context";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
} from "lucide-react";

export default function ContactPage() {
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    addToast("Message sent! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-32 sm:pt-36 pb-20">
      {/* Header */}
      <div className="section-padding mb-16">
        <FadeIn>
          <div className="text-center">
            <p className="subtitle mb-4">Get In Touch</p>
            <h1 className="heading-lg text-charcoal mb-4">Contact Us</h1>
            <p className="body-text max-w-lg mx-auto">
              We&apos;d love to hear from you. Whether you have a question
              about our collections, need styling advice, or just want to say
              hello — we&apos;re here to help.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Contact Info Cards */}
      <div className="section-padding mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              lines: [
                "Shop No. 42, Main Market",
                "Rajouri Garden",
                "New Delhi - 110027",
              ],
            },
            {
              icon: Phone,
              title: "Call Us",
              lines: ["+91 98765 43210", "+91 11 2345 6789"],
            },
            {
              icon: Mail,
              title: "Email Us",
              lines: ["support@womensvilla.in", "info@womensvilla.in"],
            },
            {
              icon: Clock,
              title: "Opening Hours",
              lines: [
                "Mon – Sat: 11:00 AM – 8:30 PM",
                "Sunday: 12:00 PM – 7:00 PM",
              ],
            },
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 text-center">
                <item.icon className="mx-auto mb-4 text-dusty-rose w-8 h-8" />
                <h3 className="font-semibold text-lg mb-2 text-charcoal">
                  {item.title}
                </h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Form + Map Section */}
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="heading-md mb-6 text-charcoal">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
                />

                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-dusty-rose text-white py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="p-3 rounded-full bg-[#F9D5D3] hover:bg-dusty-rose hover:text-white transition"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="p-3 rounded-full bg-[#F9D5D3] hover:bg-dusty-rose hover:text-white transition"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Google Map */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-sm h-[450px]">
              <iframe
                src="https://www.google.com/maps?q=Rajouri+Garden+New+Delhi&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}