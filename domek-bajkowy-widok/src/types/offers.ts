export type PriceItem = {
  name: string;
  price: string;
  period: string;
  nights: string;
};

export type OfferCard = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  accentColor: string;
  headerBg: string;
  items: PriceItem[];
};

export type ModalStatus = "idle" | "sending" | "success";

export type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};
