import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/10 bg-transparent">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
        <a
          href="https://github.com/umeshgupta05"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/pedamallu-umesh-gupta-9504b825a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:saiumeshgupta@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};