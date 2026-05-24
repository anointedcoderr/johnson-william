"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(2, "Please add a short subject."),
  message: z.string().min(10, "Please share a short message."),
});

type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 500));
    setSent(true);
    reset();
  }

  if (sent) {
    return (
      <div className="border border-border bg-warm p-8">
        <p className="text-[12px] font-medium uppercase tracking-widest2 text-gold">Received</p>
        <p className="mt-4 font-serif text-[22px] text-navy">Thank you for getting in touch.</p>
        <p className="mt-3 text-[15px] leading-[1.8] text-muted">
          The firm will respond shortly. For urgent matters, please call the office directly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest2 text-navy hover:text-gold transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-border bg-warm p-7 md:p-9"
    >
      <div className="grid gap-5">
        <Input id="c-name" label="Name" error={errors.name?.message} {...register("name")} />
        <Input id="c-email" label="Email" type="email" error={errors.email?.message} {...register("email")} />
        <Input id="c-subject" label="Subject" error={errors.subject?.message} {...register("subject")} />
        <div className="flex flex-col gap-2">
          <label htmlFor="c-message" className="text-[12px] font-medium uppercase tracking-widest2 text-navy/70">
            Message
          </label>
          <textarea
            id="c-message"
            rows={5}
            className={cn(
              "border bg-ivory/40 px-4 py-3 text-[15px] text-charcoal outline-none transition-colors",
              "border-border focus:border-navy focus:bg-warm",
              errors.message && "border-red-500",
            )}
            {...register("message")}
          />
          {errors.message && <p className="text-[13px] text-red-700">{errors.message.message}</p>}
        </div>
      </div>
      <div className="mt-7 flex items-center justify-between gap-4">
        <p className="text-[13px] text-muted">Held in confidence by the firm.</p>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending" : "Send Message"} <ArrowIcon />
        </Button>
      </div>
    </form>
  );
}

function Input({
  id,
  label,
  error,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; label: string; error?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[12px] font-medium uppercase tracking-widest2 text-navy/70">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        className={cn(
          "h-12 border bg-ivory/40 px-4 text-[15px] text-charcoal outline-none transition-colors",
          "border-border focus:border-navy focus:bg-warm",
          error && "border-red-500",
        )}
        {...rest}
      />
      {error && <p className="text-[13px] text-red-700">{error}</p>}
    </div>
  );
}
