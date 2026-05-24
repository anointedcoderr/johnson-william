import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-navy text-ivory">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <p className="text-[12px] uppercase tracking-widest2 text-gold-soft">404</p>
        <h1 className="mt-5 font-serif text-[40px] leading-[1.15] md:text-[56px]">
          Page Not Found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[16px] leading-[1.8] text-ivory/70">
          The page you were looking for could not be located. From here you can return to the
          homepage or contact the firm directly.
        </p>
        <div className="mt-9 flex flex-wrap gap-3 justify-center">
          <Button href="/" variant="gold">Return Home</Button>
          <Button href="/contact" variant="ghost" className="text-ivory border border-ivory/20 hover:border-gold">
            Contact the Firm
          </Button>
        </div>
      </Container>
    </section>
  );
}
