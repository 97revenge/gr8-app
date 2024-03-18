"use client";

import TypographyH1 from "../Typography/TypographyH1";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CreateDialog from "../Dialogs/CreateDialog";
import { Card, CardContent } from "../ui/card";

const content: Array<React.ReactNode> = [
  <Dialog key={0}>
    <DialogTrigger asChild>
      <Button variant="outline" className="w-full bg-green-500">
        Adicionar
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-transparent border-0">
      <CreateDialog />
    </DialogContent>
  </Dialog>,
  <Dialog key={1}>
    <DialogTrigger asChild>
      <Button variant="destructive" className="w-full">
        Deletar
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-transparent border-0">
      <CreateDialog />
    </DialogContent>
  </Dialog>,
  <Dialog key={2}>
    <DialogTrigger asChild>
      <Button variant="default" className="w-full bg-blue-500">
        Editar
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-transparent border-0">
      <CreateDialog />
    </DialogContent>
  </Dialog>,
];

export default function HelloHeader() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-gray-100 rounded-xl ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <TypographyH1>Bem Vindo, Visitante</TypographyH1>

              <p className="mt-1.5 text-sm text-gray-500">Lorem Ipsum 🎉</p>
            </div>

            <div className="mt-4 flex flex-col gap-4  sm:mt-0 sm:flex-row sm:items-center justify-between relative right-0 lg:right-6 md:right-6">
              <Carousel className=" w-auto mx-auto ">
                <CarouselContent>
                  {content.map((item, index) => (
                    <CarouselItem key={index}>{item}</CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
