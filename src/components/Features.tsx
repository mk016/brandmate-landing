
import { Card, CardContent } from "@/components/ui/card";
import { Radar, MessageSquare, BarChart3, TrendingUp, Bot, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Radar,
      title: "Inbox Radar™",
      subtitle: "No More Missed Deals",
      description: "Uses AI to scan your inbox and highlight high-paying, relevant brands—ignores spam and fake inquiries.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: MessageSquare,
      title: "1-Click Smart Replies",
      subtitle: "Negotiation On Autopilot",
      description: "Instantly generates polished email responses (accept, negotiate, decline) using your voice and past deal tone.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: BarChart3,
      title: "DealVault",
      subtitle: "Your Earnings, Centralized",
      description: "Auto-tracks every accepted deal, deadline, deliverables, and payment—all in one sleek dashboard.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Collaboration Heatmap",
      subtitle: "Know What's Working",
      description: "See which types of content or past brands are giving you highest ROI, engagement, or growth.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Bot,
      title: "GrowthPilot™",
      subtitle: "Your AI-Powered Business Coach",
      description: "Weekly insights on how to optimize your content strategy, pricing, and brand pitch with AI suggestions.",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brandmate-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brandmate-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-brandmate-slate mb-6">
            5 Killer Features That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandmate-purple to-brandmate-gold">
              Change Everything
            </span>
          </h2>
          <p className="font-inter text-lg text-brandmate-muted max-w-3xl mx-auto">
            Stop treating brand deals like a side hustle. These aren't nice-to-have features—they're absolute game-changers for serious creators.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl border-0 shadow-lg overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 h-full">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-poppins font-bold text-xl text-brandmate-slate group-hover:text-brandmate-purple transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="font-inter font-semibold text-sm text-brandmate-purple uppercase tracking-wide">
                      {feature.subtitle}
                    </p>
                    <p className="font-inter text-brandmate-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Mystery Feature Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl border-0 shadow-lg overflow-hidden animate-slide-up relative bg-gradient-to-br from-brandmate-lilac to-white">
            <CardContent className="p-8 h-full relative">
              {/* Blur overlay */}
              <div className="absolute inset-0 backdrop-blur-sm bg-white/30 rounded-2xl"></div>
              
              <div className="space-y-6 relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-brandmate-purple to-brandmate-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-poppins font-bold text-xl text-brandmate-slate">
                    Something Powerful is Coming...
                  </h3>
                  <p className="font-inter font-semibold text-sm text-brandmate-purple uppercase tracking-wide">
                    More game-changing tools launching soon...
                  </p>
                  <p className="font-inter text-brandmate-muted leading-relaxed">
                    Be the first to experience the full power of BrandMate.
                  </p>
                </div>
                
                {/* Coming Soon Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-brandmate-gold text-white text-xs font-poppins font-semibold rounded-full">
                  COMING SOON
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Building Section */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-brandmate-lilac rounded-full">
            <span className="font-inter text-brandmate-slate font-medium">
              Trusted by creators on
            </span>
            <div className="flex items-center gap-4 ml-4">
              <span className="font-poppins font-bold text-brandmate-purple">YouTube</span>
              <span className="font-poppins font-bold text-brandmate-purple">Instagram</span>
              <span className="font-poppins font-bold text-brandmate-purple">TikTok</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
