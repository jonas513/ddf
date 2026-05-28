import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="mb-3">
              <Image
                src="/logo.png"
                alt="DDF Motors"
                width={140}
                height={52}
                className="w-36 h-auto object-contain opacity-90"
              />
            </div>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Sint-Michielsestraat 30, 8200 Brugge
              <br />
              West-Vlaanderen
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm text-muted">
            <Link href="/#aanbod" className="hover:text-text transition-colors">Aanbod</Link>
            <Link href="/#over-ons" className="hover:text-text transition-colors">Over ons</Link>
            <Link href="/#contact" className="hover:text-text transition-colors">Contact</Link>
            <Link href="/auto-verkopen" className="hover:text-accent transition-colors font-medium">
              Verkoop je auto
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-muted text-xs">
          <span>© {new Date().getFullYear()} DDF Motors BV. Alle rechten voorbehouden.</span>
          <span>
            <a href="mailto:salesddfmotors@outlook.be" className="hover:text-accent transition-colors">
              salesddfmotors@outlook.be
            </a>
            {" · "}
            <a href="tel:0495509895" className="hover:text-accent transition-colors">
              0495 50 98 95
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
