import { Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" passHref>
                <Button variant="outline" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" passHref>
                <Button variant="outline" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:example@example.com" passHref>
                <Button variant="outline" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Practitioner's Notebook. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
