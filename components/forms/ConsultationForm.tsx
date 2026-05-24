"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { practiceAreas } from "@/data/practiceAreas";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(6, "Please enter a phone number we can reach."),
  matter: z.string().min(1, "Please select a legal matter type."),
  method: z.string().min(1, "Please choose a preferred consultation method."),
  message: z
    .string()
    .min(10, "Please share a short summary of your matter.")
    .max(2000, "Please keep the message under 2000 characters."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm the privacy acknowledgement." }),
  }),
});

type FormValues = z.infer<typeof schema>;

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      matter: "",
      method: "",
      message: "",
    },
  });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="border border-border bg-warm p-10 text-center">
        <p className="text-[12px] font-medium uppercase tracking-widest2 text-gold">
          Request Received
        </p>
        <h3 className="mt-5 font-serif text-[26px] leading-[1.25] text-navy md:text-[30px]">
          Thank you for reaching out
        </h3>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.8] text-muted">
          A confidential note has been received. The firm will respond shortly to arrange a private
          conversation about your matter.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest2 text-navy hover:text-gold transition-colors"
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
      className="border border-border bg-warm p-7 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          error={errors.name?.message}
          {...register("name")}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email address"
          type="email"
          error={errors.email?.message}
          {...register("email")}
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Phone number"
          type="tel"
          error={errors.phone?.message}
          {...register("phone")}
          autoComplete="tel"
        />
        <Select
          id="matter"
          label="Legal matter type"
          error={errors.matter?.message}
          {...register("matter")}
        >
          <option value="">Select an area</option>
          {practiceAreas.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </Select>
        <Select
          id="method"
          label="Preferred consultation method"
          className="md:col-span-2"
          error={errors.method?.message}
          {...register("method")}
        >
          <option value="">Select a method</option>
          <option value="In person">In person</option>
          <option value="Virtual">Virtual</option>
          <option value="Telephone">Telephone</option>
        </Select>
        <TextArea
          id="message"
          label="Briefly describe your matter"
          className="md:col-span-2"
          rows={6}
          error={errors.message?.message}
          {...register("message")}
        />
      </div>

      <label className="mt-7 flex items-start gap-3 text-[14px] leading-[1.65] text-charcoal/85">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-1 h-4 w-4 border border-navy/40 accent-gold"
        />
        <span>
          I understand this submission does not by itself create a lawyer client relationship and
          consent to the firm contacting me regarding my inquiry.
        </span>
      </label>
      {errors.consent?.message && (
        <p className="mt-2 text-[13px] text-red-700">{errors.consent.message}</p>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-[13px] text-muted">All submissions are kept in confidence.</p>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending" : "Send Request"} <ArrowIcon />
        </Button>
      </div>
    </form>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
};

function Field({ id, label, error, className, ...rest }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
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

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label: string;
  error?: string;
};

function Select({ id, label, error, className, children, ...rest }: SelectProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-[12px] font-medium uppercase tracking-widest2 text-navy/70">
        {label}
      </label>
      <select
        id={id}
        aria-invalid={!!error}
        className={cn(
          "h-12 border bg-ivory/40 px-4 text-[15px] text-charcoal outline-none transition-colors",
          "border-border focus:border-navy focus:bg-warm",
          error && "border-red-500",
        )}
        {...rest}
      >
        {children}
      </select>
      {error && <p className="text-[13px] text-red-700">{error}</p>}
    </div>
  );
}

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  error?: string;
};

function TextArea({ id, label, error, className, ...rest }: TextAreaProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-[12px] font-medium uppercase tracking-widest2 text-navy/70">
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={!!error}
        className={cn(
          "border bg-ivory/40 px-4 py-3 text-[15px] text-charcoal outline-none transition-colors",
          "border-border focus:border-navy focus:bg-warm",
          error && "border-red-500",
        )}
        {...rest}
      />
      {error && <p className="text-[13px] text-red-700">{error}</p>}
    </div>
  );
}
