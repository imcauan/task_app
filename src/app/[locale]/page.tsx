"use client";

import { Faq } from "@/components/common/landing/faq";
import { Feature } from "@/components/common/landing/feature";
import { Footer } from "@/components/common/landing/footer";
import { Header } from "@/components/common/landing/header";
import { Main } from "@/components/common/landing/main";
import { Pricing } from "@/components/common/landing/pricing";
import { Container } from "@/components/ui/container.component";
import React from "react";

export default function Home() {
  return (
    <Container className="flex flex-col items-center w-full">
      <Header />
      <Main />
      <Feature />
      <Pricing />
      <Faq />
      <Footer />
    </Container>
  );
}
