import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function AnchorHotelHomepage() {
  return (
    <div className="bg-[#f5e8ca] text-[#2b2b2b] font-serif">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold relative z-10 tracking-wide"
        >
          The Anchor Hotel
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mt-4 relative z-10 italic"
        >
          Haydon Bridge, Northumberland — Established 1422
        </motion.p>
        <div className="relative z-10 mt-8 flex gap-4">
          <Button className="bg-[#c5a253] hover:bg-[#b08a3f] text-white text-lg px-6 py-3 rounded-full">
            Book a Room
          </Button>
          <Button className="bg-transparent border border-[#c5a253] text-[#f5e8ca] text-lg px-6 py-3 rounded-full">
            View Menu
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 lg:px-24 bg-[#fffaf1]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1599842055583-eedb7996bdb3?auto=format&fit=crop&q=80&w=1200"
            alt="The Anchor Bar"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#2b2b2b] mb-4">
              A Riverside Inn Steeped in History
            </h2>
            <p className="text-lg leading-relaxed text-[#3d3d3d]">
              Nestled beside the River South Tyne, The Anchor Hotel has welcomed
              travelers since 1422. With crackling fires, oak beams, and hearty
              fare, it embodies centuries of English hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 bg-[#f5e8ca] text-center">
        <h2 className="text-4xl font-bold text-[#2b2b2b] mb-4">Rooms & Accommodation</h2>
        <p className="text-lg text-[#3d3d3d] mb-12 italic">
          Rest in timeless comfort overlooking the River South Tyne.
        </p>
        <div className="grid md:grid-cols-3 gap-8 px-8 lg:px-24">
          {[
            {
              title: "Riverside Double Room",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
              price: "£95 / night",
            },
            {
              title: "Twin Room",
              img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200",
              price: "£85 / night",
            },
            {
              title: "Family Suite",
              img: "https://images.unsplash.com/photo-1600585154526-990dced4dfb5?auto=format&fit=crop&q=80&w=1200",
              price: "£120 / night",
            },
          ].map((room, i) => (
            <Card key={i} className="rounded-2xl overflow-hidden shadow-lg border-0">
              <img src={room.img} alt={room.title} className="h-64 w-full object-cover" />
              <CardContent className="p-6 bg-[#fffaf1]">
                <h3 className="text-2xl font-bold text-[#2b2b2b] mb-2">{room.title}</h3>
                <p className="text-[#6b5b3e] text-lg mb-4">{room.price}</p>
                <Button className="bg-[#c5a253] hover:bg-[#b08a3f] text-white rounded-full px-6 py-2">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2b2b2b] text-[#f5e8ca] py-12 px-8 text-center">
        <p className="text-lg mb-2 font-semibold">The Anchor Hotel, Haydon Bridge</p>
        <div className="flex justify-center gap-4 mb-4">
          <MapPin size={20} /> <Phone size={20} /> <Mail size={20} />
        </div>
        <p className="text-sm">© 2025 The Anchor Hotel. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
