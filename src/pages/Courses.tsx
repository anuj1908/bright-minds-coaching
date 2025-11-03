import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coursesImage from "@/assets/courses-hero.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Courses = () => {
  const teachers = [
    {
      name: "Vikram Sir",
      subjects: ["Physics", "Mathematics"],
      level: "School & College",
      color: "bg-primary/10 text-primary",
    },
    {
      name: "Mohit Sir",
      subjects: ["Biology"],
      level: "School & College",
      color: "bg-accent/10 text-accent",
    },
    {
      name: "Patil Sir",
      subjects: ["Hindi", "Marathi"],
      level: "School",
      color: "bg-secondary/10 text-secondary",
    },
    {
      name: "Miss Anisha",
      subjects: ["Physics"],
      level: "School & College",
      color: "bg-primary/10 text-primary",
    },
  ];

  const toppers = [
    { name: "Aditya Muke", percentage: "90%", board: "CBSE", rank: "🏆" },
    { name: "Bhumi Sarkar", percentage: "85.20%", board: "CBSE", rank: "🏆" },
    { name: "Sujal Bansode", percentage: "83.20%", board: "SSC", rank: "🏅" },
    { name: "Eshwari Bhori", percentage: "81.80%", board: "SSC", rank: "🏅" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${coursesImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-70 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive education from 8th to 12th (CBSE & SSC) and college-level science
            </p>
          </div>
        </div>
      </section>

      {/* Course Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 gradient-card shadow-medium animate-fade-in mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Classes Offered</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">For School Students</h3>
                  <p className="text-muted-foreground">
                    Classes 8th to 12th, covering both <strong>CBSE</strong> and <strong>SSC</strong> boards with complete syllabus coverage.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">For College Students</h3>
                  <p className="text-muted-foreground">
                    Specialized coaching for <strong>Science Stream</strong> including Physics, Chemistry, Mathematics, and Biology.
                  </p>
                </div>
              </div>
            </Card>

            {/* Teachers Section */}
            <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
              Our Expert Faculty
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {teachers.map((teacher, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-medium transition-smooth animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-full ${teacher.color} flex items-center justify-center text-2xl font-bold flex-shrink-0`}>
                      {teacher.name.charAt(0)}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-2">{teacher.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {teacher.subjects.map((subject, idx) => (
                          <Badge key={idx} className="bg-primary text-primary-foreground">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{teacher.level}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Top Achievers */}
            <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
              Top Achievers of the Year
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toppers.map((topper, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-medium transition-smooth animate-slide-up border-2 border-accent/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{topper.rank}</div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground">{topper.name}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-2xl font-bold text-accent">{topper.percentage}</span>
                        <Badge variant="outline" className="border-primary text-primary">
                          {topper.board}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
