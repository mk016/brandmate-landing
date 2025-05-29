
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, TrendingUp, Zap, Users } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brandmate-lilac via-white to-brandmate-lilac overflow-hidden pt-20 px-4 sm:pt-24 md:pt-16 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-brandmate-purple/5 to-transparent"></div>
      <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-brandmate-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-brandmate-gold/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm rounded-full border border-brandmate-purple/20 shadow-xl mx-auto lg:mx-0">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-brandmate-purple mr-2 sm:mr-2 md:mr-3 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-inter font-semibold text-brandmate-slate">A complete suite that makes influencers life easy!</span>
            </div>
            
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-brandmate-slate">
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandmate-purple to-brandmate-gold">
                Scale & Succeed
              </span>{" "}
              as a Creator
            </h1>
            
            <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-brandmate-muted leading-relaxed max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
              From viral content creation to brand deal management, audience growth to revenue optimization — BrandMate is your AI-powered toolkit for creator success.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-3 sm:gap-4 py-4">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-brandmate-purple/10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brandmate-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-brandmate-purple" />
                </div>
                <div className="min-w-0">
                  <p className="font-poppins font-semibold text-brandmate-slate text-sm sm:text-sm">Content Strategy</p>
                  <p className="font-inter text-xs text-brandmate-muted">AI-powered planning</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-brandmate-purple/10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brandmate-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brandmate-gold" />
                </div>
                <div className="min-w-0">
                  <p className="font-poppins font-semibold text-brandmate-slate text-sm sm:text-sm">Brand Deals</p>
                  <p className="font-inter text-xs text-brandmate-muted">Smart negotiation</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-brandmate-purple/10 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                </div>
                <div className="min-w-0">
                  <p className="font-poppins font-semibold text-brandmate-slate text-sm sm:text-sm">Growth Analytics</p>
                  <p className="font-inter text-xs text-brandmate-muted">Cross-platform insights</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button 
                onClick={scrollToWaitlist}
                size="lg" 
                className="bg-gradient-to-r from-brandmate-purple to-indigo-600 hover:from-brandmate-purple/90 hover:to-indigo-600/90 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-poppins font-bold rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-glow"
              >
                Join Waitlist :)
                <ChevronRight className="ml-2 sm:ml-2 md:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-brandmate-purple text-brandmate-purple hover:bg-brandmate-purple hover:text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-poppins font-semibold rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Coming Soon!
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 pt-6 pb-12 md:pt-6  mb:pt-12 justify-center lg:justify-start">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-brandmate-purple to-brandmate-gold border-2 border-white shadow-lg"></div>
                ))}
              </div>
              <div className="text-center lg:text-left">
                <p className="font-poppins font-semibold text-brandmate-slate text-sm sm:text-base md:text-lg">
                  Trusted by 1000+ creators
                </p>
                <p className="font-inter text-xs sm:text-sm text-brandmate-muted">
                  Built with feedback from top influencers
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Enhanced Mockup */}
          <div className="relative animate-slide-up order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Main Device Mockup */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl shadow-2xl p-3 sm:p-4 md:p-6 border border-gray-200/50 backdrop-blur-sm">
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 sm:pb-3 md:pb-4 border-b border-gray-100">
                    <h3 className="font-poppins font-bold text-brandmate-slate text-sm sm:text-base md:text-lg">Creator Dashboard</h3>
                    <div className="flex gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-brandmate-gold rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                    <div className="bg-gradient-to-br from-brandmate-purple/10 to-indigo-100 rounded-lg md:rounded-xl p-2 sm:p-2 md:p-3">
                      <p className="font-inter text-xs text-brandmate-muted">This Month</p>
                      <p className="font-poppins font-bold text-sm sm:text-base md:text-lg text-brandmate-slate">$12,450</p>
                      <p className="font-inter text-xs text-green-600">+127% ↗</p>
                    </div>
                    <div className="bg-gradient-to-br from-brandmate-gold/10 to-yellow-100 rounded-lg md:rounded-xl p-2 sm:p-2 md:p-3">
                      <p className="font-inter text-xs text-brandmate-muted">New Followers</p>
                      <p className="font-poppins font-bold text-sm sm:text-base md:text-lg text-brandmate-slate">+2.3K</p>
                      <p className="font-inter text-xs text-green-600">+45% ↗</p>
                    </div>
                  </div>
                  
                  {/* Activity Cards */}
                  <div className="space-y-2 sm:space-y-2 md:space-y-3">
                    <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg md:rounded-xl border-l-4 border-green-500">
                      <div className="flex items-center justify-between mb-1 md:mb-2">
                        <span className="text-xs font-inter font-semibold text-green-700 bg-green-100 px-1 sm:px-2 py-1 rounded-full">HOT BRAND DEAL</span>
                        <span className="text-xs sm:text-sm font-poppins font-bold text-brandmate-slate">$3,500</span>
                      </div>
                      <p className="font-inter text-xs sm:text-sm text-gray-700">Nike x Summer Campaign</p>
                    </div>
                    
                    <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg md:rounded-xl border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-1 md:mb-2">
                        <span className="text-xs font-inter font-semibold text-blue-700 bg-blue-100 px-1 sm:px-2 py-1 rounded-full">CONTENT READY</span>
                        <span className="text-xs text-gray-500">2 posts</span>
                      </div>
                      <p className="font-inter text-xs sm:text-sm text-gray-700">AI-optimized content scheduled</p>
                    </div>
                    
                    <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg md:rounded-xl border-l-4 border-purple-500">
                      <div className="flex items-center justify-between mb-1 md:mb-2">
                        <span className="text-xs font-inter font-semibold text-purple-700 bg-purple-100 px-1 sm:px-2 py-1 rounded-full">TRENDING ALERT</span>
                        <span className="text-xs text-gray-500">Join now</span>
                      </div>
                      <p className="font-inter text-xs sm:text-sm text-gray-700">#SummerVibes challenge detected</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 bg-gradient-to-r from-brandmate-gold to-yellow-400 text-white p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl animate-bounce">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
              </div>
              
              <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -left-3 sm:-left-4 md:-left-6 bg-gradient-to-r from-brandmate-purple to-indigo-600 text-white p-2 sm:p-3 md:p-5 rounded-xl md:rounded-2xl shadow-xl">
                <p className="font-poppins text-xs sm:text-xs md:text-sm font-bold">10X Growth</p>
                <p className="font-inter text-xs opacity-90">Guaranteed</p>
              </div>
              
              <div className="absolute top-1/4 sm:top-1/3 md:top-1/2 -right-2 sm:-right-3 md:-right-4 bg-white text-brandmate-slate p-2 sm:p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg border border-gray-200">
                <p className="font-inter text-xs font-semibold">AI Insight</p>
                <p className="font-inter text-xs text-brandmate-muted">Post at 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
