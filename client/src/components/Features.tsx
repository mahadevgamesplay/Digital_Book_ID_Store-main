import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Shield,
  Headphones,
  Zap,
  CreditCard,
  Clock,
  Smartphone,
  BookOpen,
  Bookmark,
  Award
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "With over 1+ million happy readers, Digital Book ID is a name synonymous with reliability. Readers keep coming back for our wide range of books.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "100% Secure Platform",
      description: "You do not need to worry about anything because it is safe here. With this company, you can be sure that every transaction is safe and secure.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Headphones,
      title: "24x7 Live Support",
      description: "Wondering about something? Let us know if you have any issues or concerns. So you can read without concern, support is provided round-the-clock.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "There is no more waiting in store! You never have to wait since your access is instant and you can quickly start reading.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: CreditCard,
      title: "Affordable Pricing",
      description: "Get access to a world of books at a price that won't break the bank. We have a variety of plans to suit every budget.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Simple, Smart Interface",
      description: "Regardless of your knowledge in technology, our platform makes it easy for you. The website is easy to use, eye-catching and works great.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Award,
      title: "Personalized Reading Experience",
      description: "Get recommendations based on your reading history and preferences. Discover new authors and genres that you'll love.",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      icon: BookOpen,
      title: "Access to a World of Books",
      description: "From bestsellers to hidden gems, we have a book for everyone. Our library is constantly growing, so you'll never run out of things to read.",
      gradient: "from-cyan-500 to-teal-600"
    },
    {
      icon: Bookmark,
      title: "Read Anywhere, Anytime",
      description: "Our platform is available on all your devices, so you can read wherever you are. Start a book on your phone and finish it on your tablet.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "Read Responsibly",
      description: "We believe in the power of books to change lives. That's why we're committed to promoting literacy and a love of reading.",
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Digital Book ID</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Experience the most trusted and secure digital book platform with premium features designed for your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-white border-gray-200 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <feature.icon className="text-white text-2xl" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}