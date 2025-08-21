import { useState } from "react";
import { useForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimation from "./ScrollAnimation";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xyzprzya");
  const { toast } = useToast();

  if (state.succeeded) {
    return (
      <ScrollAnimation>
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-poppins text-xl font-semibold">Message Sent!</h3>
            <p className="text-muted-foreground font-inter">
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </div>
        </Card>
      </ScrollAnimation>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Info */}
      <ScrollAnimation>
        <div className="space-y-6">
          <div>
            <h3 className="font-poppins font-semibold text-2xl mb-4 gradient-text">
              Get In Touch
            </h3>
            <p className="text-muted-foreground font-inter mb-8">
              Ready to work together? Drop me a message and let's create something amazing!
            </p>
          </div>
          
          <div className="space-y-4">
            <a 
              href="mailto:ejezievictor7@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-inter">ejezievictor7@gmail.com</span>
            </a>
            
            <a 
              href="tel:+2348146441248"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-inter">+234 814 644 1248</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/victorejezie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <span className="font-inter">LinkedIn Profile</span>
            </a>
            
            <a 
              href="https://github.com/ejezievictor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <span className="font-inter">GitHub Profile</span>
            </a>
          </div>
        </div>
      </ScrollAnimation>
      
      {/* Contact Form */}
      <ScrollAnimation delay={200}>
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="font-poppins text-xl">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={state.submitting}
                className="w-full"
              >
                <Send className="w-4 h-4 mr-2" />
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
              
              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className="text-red-500 text-sm mt-2">
                  Please fix the errors above and try again.
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </div>
  );
};

export default ContactForm;