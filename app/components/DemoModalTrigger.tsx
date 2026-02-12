"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";

const DemoChatModal = dynamic(
  () => import("./demo-chat/DemoChatModal"),
  { ssr: false }
);

export default function DemoModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <HeroSection onOpenDemo={handleOpen} />
      {isOpen && <DemoChatModal onClose={handleClose} />}
    </>
  );
}
