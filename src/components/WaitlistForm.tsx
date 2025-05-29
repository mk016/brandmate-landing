import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Sparkles, Star } from "lucide-react";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialHandle: "",
    primaryPlatform: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbxp7KW7Y0rMXx-BhtX-bAZnOEKWJDUnONfFSf4KINBQsfVEChFAIKABlrLblQ_2wS7d/exec";

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important!
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section
        id="waitlist"
        className="py-20 bg-gradient-to-br from-brandmate-purple via-indigo-600 to-purple-700 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <Card className="max-w-lg mx-auto rounded-3xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-10 text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <div className="space-y-4">
                <h3 className="font-poppins font-bold text-3xl text-brandmate-slate">
                  Welcome to the Future! 🚀
                </h3>
                <p className="font-inter text-lg text-brandmate-muted leading-relaxed">
                  You're officially on the BrandMate waitlist. Get ready for
                  early access to the most powerful creator toolkit ever built.
                </p>
                <div className="flex items-center justify-center gap-2 text-brandmate-gold">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-inter font-semibold">
                    Priority Access Secured
                  </span>
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>

              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="w-full h-12 border-2 border-brandmate-purple text-brandmate-purple hover:bg-brandmate-purple hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Add Another Creator
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="py-24 bg-gradient-to-br from-brandmate-purple via-indigo-600 to-purple-700 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-brandmate-gold/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brandmate-purple/20 to-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-xl mb-8">
            <Sparkles className="w-5 h-5 text-white mr-3" />
            <span className="text-base font-inter font-semibold text-white">
              🎯 Limited Early Access • Join 1000+ Creators
            </span>
          </div>

          <h2 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
            Ready to 10X Your Creator Business?
          </h2>
          <p className="font-inter text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join the waitlist for the ultimate all-in-one creator toolkit. From
            viral content to brand deals – we've got you covered.
          </p>
        </div>

        <Card className="max-w-lg mx-auto rounded-3xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-slide-up">
          <CardHeader className="pb-4">
            <CardTitle className="text-center">
              <h3 className="font-poppins font-bold text-2xl text-brandmate-slate mb-2">
                Claim Your Early Access
              </h3>
              <p className="font-inter text-brandmate-muted text-base font-normal">
                Be among the first to experience the future of creator tools
              </p>
            </CardTitle>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-5">
                <div className="space-y-3">
                  <Label
                    htmlFor="name"
                    className="font-inter font-semibold text-brandmate-slate text-base"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-14 rounded-xl border-2 border-gray-200 font-inter text-base focus:border-brandmate-purple focus:ring-brandmate-purple transition-all duration-300 bg-white/80"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="font-inter font-semibold text-brandmate-slate text-base"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-14 rounded-xl border-2 border-gray-200 font-inter text-base focus:border-brandmate-purple focus:ring-brandmate-purple transition-all duration-300 bg-white/80"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="platform"
                    className="font-inter font-semibold text-brandmate-slate text-base"
                  >
                    Primary Platform
                  </Label>
                  <Select
                    value={formData.primaryPlatform}
                    onValueChange={(value) =>
                      handleInputChange("primaryPlatform", value)
                    }
                  >
                    <SelectTrigger className="h-14 rounded-xl border-2 border-gray-200 font-inter text-base focus:border-brandmate-purple transition-all duration-300 bg-white/80">
                      <SelectValue placeholder="Select your main platform" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-2">
                      <SelectItem value="instagram">📸 Instagram</SelectItem>
                      <SelectItem value="youtube">📺 YouTube</SelectItem>
                      <SelectItem value="tiktok">🎵 TikTok</SelectItem>
                      <SelectItem value="twitter">🐦 Twitter/X</SelectItem>
                      <SelectItem value="linkedin">💼 LinkedIn</SelectItem>
                      <SelectItem value="multiple">
                        🌟 Multiple Platforms
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="social"
                    className="font-inter font-semibold text-brandmate-slate text-base"
                  >
                    Social Handle
                  </Label>
                  <Input
                    id="social"
                    type="text"
                    placeholder="@yourusername"
                    value={formData.socialHandle}
                    onChange={(e) =>
                      handleInputChange("socialHandle", e.target.value)
                    }
                    required
                    className="h-14 rounded-xl border-2 border-gray-200 font-inter text-base focus:border-brandmate-purple focus:ring-brandmate-purple transition-all duration-300 bg-white/80"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading || !formData.primaryPlatform}
                className="w-full h-14 bg-gradient-to-r from-brandmate-gold to-yellow-400 hover:from-brandmate-gold/90 hover:to-yellow-400/90 text-brandmate-slate font-poppins font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brandmate-slate"></div>
                    Securing Your Spot...
                  </div>
                ) : (
                  "🚀 Get Early Access"
                )}
              </Button>

              <p className="text-center text-sm text-brandmate-muted font-inter leading-relaxed">
                By joining, you agree to receive updates about BrandMate.
                <br />
                <span className="font-semibold">Unsubscribe anytime.</span> We
                respect your privacy.
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-12 animate-fade-in">
          <p className="font-inter text-white/80 text-lg">
            🔥 <span className="font-semibold">500+ creators</span> already
            secured their spot
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
