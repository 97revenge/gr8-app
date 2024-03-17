"use client";

import TypographyH1 from "../Typography/TypographyH1";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import CreateDialog from "../Dialogs/CreateDialog";

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

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Adicionar Item</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-transparent border-0">
                  <CreateDialog />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
