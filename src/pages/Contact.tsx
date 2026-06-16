import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Globe,
} from "lucide-react";
import Abuja from '../assets/images/Abuja.png'
import lagos from '../assets/images/lagos.png'
import calabar from '../assets/images/calabar.png'

export default function ContactPage() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#06122B] via-[#091A3A] to-[#06122B]">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <span className="inline-flex bg-[#1D4ED8] text-white text-xs px-4 py-1 rounded-full">
            Contact Us
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            Let's Discuss Your{" "}
            <span className="text-[#2EA6FF]">
              Legal Needs
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300">
            Our team of expert legal advisors is ready to provide
            strategic solutions tailored to your unique challenges.
            Reach out to start a conversation today.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* FORM */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-[#1B1F29]">
              Send a Secure Message
            </h2>

            <p className="text-gray-500 mt-2">
              Fill out the form below and one of our partners
              will get back to you within 24 business hours.
            </p>

            <form className="text-black mt-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    className="w-full h-12 border rounded-lg px-4"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    className="w-full h-12 border rounded-lg px-4"
                    placeholder="john@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>

                  <input
                    className="w-full h-12 border rounded-lg px-4"
                    placeholder="+234..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Organization
                  </label>

                  <input
                    className="w-full h-12 border rounded-lg px-4"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Preferred Contact Time
                </label>

                <input
                  className="w-full h-12 border rounded-lg px-4"
                  placeholder="Morning / Afternoon / Evening"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  How can we help you?
                </label>

                <textarea
                  rows={6}
                  className="w-full border rounded-lg p-4 resize-none"
                  placeholder="Please provide a brief overview of your legal requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-[#020b26] hover:bg-[#1B38C8] text-white font-semibold rounded-lg transition"
              >
                Submit Consultation Request →
              </button>

              <p className="text-xs text-gray-500 text-center">
                Any information submitted through this form is
                protected under attorney-client confidentiality.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">
                Our Offices
              </h2>

              <p className="text-gray-500 mt-2">
                Strategic presence across Nigeria's commercial hubs.
              </p>
            </div>

            <div className="text-black bg-white rounded-xl border overflow-hidden">
              <img
                src={Abuja}
                alt=""
                className="h-80 w-full object-cover"
              />

              <div className="text-black p-5">
                <h3 className="font-bold text-lg">
                  Abuja (Headquarters)
                </h3>

                <div className="text-black space-y-3 mt-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={16} />
                    CBD, Abuja, FCT
                  </div>

                  <div className="flex gap-3">
                    <Phone size={16} />
                    +234 801 234 5678
                  </div>

                  <div className="flex gap-3">
                    <Mail size={16} />
                    abuja@lawfirm.com
                  </div>

                  <div className="flex gap-3">
                    <Clock size={16} />
                    Mon - Fri: 8AM - 6PM
                  </div>
                </div>
              </div>
            </div>

            <div className="text-black bg-white rounded-xl border overflow-hidden">
              <img
                src={lagos}
                className="h-80 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">
                  Lagos Office
                </h3>

                <div className="space-y-3 mt-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={16} />
                    Victoria Island, Lagos
                  </div>

                  <div className="flex gap-3">
                    <Phone size={16} />
                    +234 802 987 6543
                  </div>

                  <div className="flex gap-3">
                    <Mail size={16} />
                    lagos@lawfirm.com
                  </div>
                </div>
              </div>
            </div>

            {/* CALABAR */}
            <div className="text-black bg-white rounded-xl border overflow-hidden">
              <img
                src={calabar}
                className="h-80 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg">
                  Calabar Office
                </h3>

                <div className="space-y-3 mt-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={16} />
                    Marian Road, Calabar
                  </div>

                  <div className="flex gap-3">
                    <Phone size={16} />
                    +234 803 456 7890
                  </div>

                  <div className="flex gap-3">
                    <Mail size={16} />
                    calabar@lawfirm.com
                  </div>
                </div>
              </div>
            </div>

            {/* URGENT CARD */}
            <div className="bg-[#020b26] text-white rounded-xl p-6">
              <h3 className="font-bold text-xl">
                Urgent Legal Assistance?
              </h3>

              <p className="text-blue-100 mt-2 text-sm">
                For urgent legal matters requiring immediate
                attention, contact us directly.
              </p>

              <div className="space-y-3 mt-5">
                <div className="bg-white text-black rounded-lg p-3 flex items-center gap-3">
                  <Phone size={16} />
                  +234 801 234 5678
                </div>

                <div className="bg-white text-black rounded-lg p-3 flex items-center gap-3">
                  <Mail size={16} />
                  emergency@lawfirm.com
                </div>
              </div>
            </div>

            {/* GLOBAL CARD */}
            <div className="text-black bg-white rounded-xl border p-5">
              <div className="flex gap-4">
                <Globe className="text-[#2346F6]" />

                <div>
                  <h4 className="font-semibold">
                    Global Reach, Local Depth
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Serving international clients and businesses
                    across Africa and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CHAT BAR */}
      <section className="text-black border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <h3 className="font-bold text-xl">
              Prefer a quick chat?
            </h3>

            <p className="text-gray-500">
              Connect with our administrative desk via WhatsApp
              for general inquiries.
            </p>
          </div>

          <button className="bg-[#22C55E] text-white px-6 py-3 rounded-lg flex items-center gap-2">
            <MessageCircle size={18} />
            Start on WhatsApp
          </button>
        </div>
      </section>
      {/* <button className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#22C55E] text-white shadow-xl flex items-center justify-center z-50">
        <MessageCircle />
      </button> */}
    </div>
  );
}