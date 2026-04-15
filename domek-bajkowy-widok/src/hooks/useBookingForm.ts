import { useState } from "react";
import { BookingFormData, ModalStatus } from "@/types/offers";

export function useBookingForm() {
  const [form, setForm] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<ModalStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: replace with real EmailJS / backend call
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    });
    setStatus("idle");
  };

  return { form, status, handleChange, handleSubmit, resetForm };
}
