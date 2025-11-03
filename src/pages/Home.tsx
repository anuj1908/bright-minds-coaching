import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Target } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-70 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Newton Coaching Classes
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-4">
              Building Bright Futures for Tomorrow
            </p>
            <p className="text-lg text-white/80 mb-8">
              Quality education for students from 8th to 12th standard, covering both CBSE and SSC boards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-strong">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/admission">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary backdrop-blur-sm">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
              About Newton Coaching Classes
            </h2>
            
            <Card className="p-8 gradient-card shadow-medium animate-slide-up">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Newton Coaching Classes provides quality education for students from 8th to 12th standard, 
                covering both CBSE and SSC boards. For college students, we specialize in the Science stream.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Our goal is to empower students with strong subject knowledge, personal guidance, and 
                expert mentorship to help them achieve their academic dreams.
              </p>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <Card className="p-6 text-center hover:shadow-medium transition-smooth animate-slide-up">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Education</h3>
                <p className="text-sm text-muted-foreground">Comprehensive curriculum for all subjects</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-medium transition-smooth animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-secondary" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expert Faculty</h3>
                <p className="text-sm text-muted-foreground">Experienced and dedicated teachers</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-medium transition-smooth animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-accent" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">Consistent top performers every year</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-medium transition-smooth animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Personal Guidance</h3>
                <p className="text-sm text-muted-foreground">Individual attention for every student</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-medium transition-smooth">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">
                  01/B, Ground Floor, Bldg No.2, RoopRajat Residency, Boisar, Maharashtra 401501
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-medium transition-smooth">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  7385759209 / 7020554202
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-medium transition-smooth">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground break-all">
                  vikrampbsingh1996@gmail.com
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
