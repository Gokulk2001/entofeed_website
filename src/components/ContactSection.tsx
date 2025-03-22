
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !category || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("entry.1982178963", name);
      formData.append("entry.88324950", email);
      formData.append("entry.244706463", phone);
      formData.append("entry.1334699584", category);
      formData.append("entry.255720062", message);

      // Create a fetch request to the Google form
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeoHAPojEzwN_bHjs7tqxvFmwvKQjnbankFQ9lUpoDSM96W5w/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // This is needed for CORS issues with Google Forms
        }
      );

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setCategory("");
      setMessage("");

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Get In Touch</h3>
            <p className="mb-6 text-lg text-white/90">
              Have questions about our products or want to learn more about incorporating 
              insect protein into your feed mix? Reach out to our team.
            </p>
            <div className="space-y-4 text-white/90">
              <div className="flex items-center">
                <Phone className="text-white mr-3" size={24} strokeWidth={2} color="#F2FCE2" />
                <span>+91 9487626337</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-white mr-3" size={24} strokeWidth={2} color="#F2FCE2" />
                <span>entofeedindia@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-white mr-3" size={24} strokeWidth={2} color="#F2FCE2" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="font-medium">Name <span className="text-red-500">*</span></label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="font-medium">Email <span className="text-red-500">*</span></label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="font-medium">Contact Number <span className="text-red-500">*</span></label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="category" className="font-medium">Category <span className="text-red-500">*</span></label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Urban Citizen">Urban Citizen</SelectItem>
                      <SelectItem value="Rural Citizen">Rural Citizen</SelectItem>
                      <SelectItem value="Poultry Farm">Poultry Farm</SelectItem>
                      <SelectItem value="Aqua Farm">Aqua Farm</SelectItem>
                      <SelectItem value="Pig Farm">Pig Farm</SelectItem>
                      <SelectItem value="Pet Shop">Pet Shop</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="font-medium">Message <span className="text-red-500">*</span></label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
