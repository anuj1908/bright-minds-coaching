import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import admissionImage from "@/assets/admission-hero.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Admission = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    class: "",
    board: "",
    contactNumber: "",
    email: "",
    address: "",
    subjects: "",
  });
  const [googleSheetUrl, setGoogleSheetUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.class || !formData.contactNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!googleSheetUrl) {
      toast({
        title: "Google Sheet URL Required",
        description: "Please enter your Google Sheet webhook URL.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-admission', {
        body: {
          ...formData,
          googleSheetUrl,
        },
      });

      if (error) throw error;

      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "Your admission form has been saved to Google Sheets.",
      });

      // Reset form
      setFormData({
        fullName: "",
        class: "",
        board: "",
        contactNumber: "",
        email: "",
        address: "",
        subjects: "",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    "Experienced and dedicated teaching faculty",
    "Individual attention and concept-based learning",
    "Regular tests and performance tracking",
    "Focus on board exams and competitive exams",
    "Proven record of excellent results",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${admissionImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-70 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Newton Coaching Classes
            </h1>
            <p className="text-xl text-white/90">
              Start your journey to academic excellence today
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Info */}
              <div className="space-y-8 animate-slide-in">
                <Card className="p-8 gradient-card shadow-medium">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-8 shadow-medium">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Top Achievers</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-semibold text-foreground">Aditya Muke</span>
                      <span className="text-accent font-bold">90% (CBSE)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-semibold text-foreground">Bhumi Sarkar</span>
                      <span className="text-accent font-bold">85.20% (CBSE)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-semibold text-foreground">Sujal Bansode</span>
                      <span className="text-accent font-bold">83.20% (SSC)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-semibold text-foreground">Eshwari Bhori</span>
                      <span className="text-accent font-bold">81.80% (SSC)</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column - Form */}
              <div className="animate-slide-up">
                <Card className="p-8 shadow-strong">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Admission Form</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="p-4 bg-muted rounded-lg">
                      <Label htmlFor="googleSheetUrl">Google Sheet Webhook URL *</Label>
                      <Input
                        id="googleSheetUrl"
                        value={googleSheetUrl}
                        onChange={(e) => setGoogleSheetUrl(e.target.value)}
                        placeholder="Enter your Google Apps Script webhook URL"
                        required
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Need help? Follow the setup instructions below the form.
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="class">Class *</Label>
                        <Select value={formData.class} onValueChange={(value) => setFormData({ ...formData, class: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="8th">8th</SelectItem>
                            <SelectItem value="9th">9th</SelectItem>
                            <SelectItem value="10th">10th</SelectItem>
                            <SelectItem value="11th">11th</SelectItem>
                            <SelectItem value="12th">12th</SelectItem>
                            <SelectItem value="college">College Science</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="board">Board *</Label>
                        <Select value={formData.board} onValueChange={(value) => setFormData({ ...formData, board: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select board" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cbse">CBSE</SelectItem>
                            <SelectItem value="ssc">SSC</SelectItem>
                            <SelectItem value="college">College</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contactNumber">Contact Number *</Label>
                      <Input
                        id="contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        placeholder="Enter your contact number"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email ID</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Enter your address"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="subjects">Subject(s) of Interest</Label>
                      <Input
                        id="subjects"
                        value={formData.subjects}
                        onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
                        placeholder="e.g., Physics, Mathematics, Biology"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium" 
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit & Join Us"}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>

            {/* Setup Instructions */}
            <Card className="p-8 mt-12 shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-4">📋 How to Set Up Google Sheets Integration</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-2">Step 1: Create a Google Sheet</p>
                  <p>Create a new Google Sheet with columns: Timestamp, Full Name, Class, Board, Contact Number, Email, Address, Subjects</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground mb-2">Step 2: Open Apps Script</p>
                  <p>In your Google Sheet, go to Extensions → Apps Script</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground mb-2">Step 3: Paste This Code</p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.fullName,
    data.class,
    data.board,
    data.contactNumber,
    data.email,
    data.address,
    data.subjects
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({success: true})
  ).setMimeType(ContentService.MimeType.JSON);
}`}
                  </pre>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground mb-2">Step 4: Deploy as Web App</p>
                  <p>Click Deploy → New deployment → Select "Web app" → Set "Who has access" to "Anyone" → Click Deploy</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground mb-2">Step 5: Copy the URL</p>
                  <p>Copy the web app URL and paste it in the form above</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admission;
