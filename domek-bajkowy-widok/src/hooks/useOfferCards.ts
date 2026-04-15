import { useState } from "react";
import { OfferCard } from "@/types/offers";

export function useOfferCards() {
  const [activeOffer, setActiveOffer] = useState<OfferCard | null>(null);

  const openOffer = (offer: OfferCard) => {
    setActiveOffer(offer);
  };

  const closeOffer = () => {
    setActiveOffer(null);
  };

  return { activeOffer, openOffer, closeOffer };
}
