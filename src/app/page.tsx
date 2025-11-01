"use client";

import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Content } from "@/features/login/components/Content";
import { Footer } from "@/features/login/components/Footer";
import { Header } from "@/features/login/components/Header";
import { SubmitToaster } from "@/features/login/components/SubmitToaster";
import useContactForm from "@/features/login/hooks/useContactForm";
import { useSubmit } from "@/features/login/hooks/useSubmit";

export default function Home() {
  const { form } = useContactForm();
  const { onSubmit } = useSubmit();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-24">
      <Card className="xs:w-[320px] sm:w-[375px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] 3xl:w-[1440px] shadow-none border-none">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Header />
            <Content />
            <Footer />
            <SubmitToaster />
          </form>
        </Form>
      </Card>
    </div>
  );
}
