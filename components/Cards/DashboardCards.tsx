"use client";

import { ProductsType, BudgetsType } from "@/types";
import dynamic from "next/dynamic";

const DynamicH3 = dynamic(
  () => import("@/components/Typography/TypographyH3"),
  {
    loading: () => (
      <>
        <div role="status" className="w-auto animate-pulse">
          <div className="h-6 bg-gray-200 rounded-xl dark:bg-gray-700 w-48 "></div>
        </div>
      </>
    ),
    ssr: false,
  }
);

const DynamicH4 = dynamic(
  () => import("@/components/Typography/TypographyH4"),
  {
    loading: () => (
      <>
        <div role="status" className="w-auto animate-pulse">
          <div className="h-6 bg-gray-200 rounded-xl dark:bg-gray-700 w-48 "></div>
        </div>
      </>
    ),
    ssr: false,
  }
);

const DynamicH1 = dynamic(
  () => import("@/components/Typography/TypographyH1"),
  {
    loading: () => (
      <>
        <div role="status" className="w-auto animate-pulse">
          <div className="h-12 p-2 my-2 bg-gray-200 rounded-xl w-auto dark:bg-gray-700 w-48 "></div>
        </div>
      </>
    ),
    ssr: false,
  }
);

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FadeDown, {
  FADE_DOWN_ANIMATION_VARIANTS as fadeDown,
} from "../Animations/FadeDown";
import { motion } from "framer-motion";

export default function DashboardCards({ ...props }) {
  return (
    <>
      <Card
        className=" transition-all block max-w-[18rem] rounded-lg border border-success-600 bg-transparent text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white bg-gradient-to-r from-green-300 to-purple-400 hover:border-0  rounded-xl shadow-xl"
        {...props}
      ></Card>
    </>
  );
}
