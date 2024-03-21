import LoginForm from "@/components/Forms/LoginForm";
import PageLoader from "@/components/Loaders/PageLoader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import Image from "next/image";

const Dynamic = dynamic(() => import("@/components/Forms/LoginForm"), {
  loading: () => (
    <>
      <div className="transition-auto flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] h-screen from-white via-white to-green-600 dark:bg-green-900">
        <PageLoader />
      </div>
    </>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Dynamic />
    </>
  );
}
