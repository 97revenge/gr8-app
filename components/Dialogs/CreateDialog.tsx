import OptionsButton from "../Buttons/OptionsButton";
import { Dialog, DialogTrigger } from "../ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import BudgetDialog from "./BudgetDialog";
import ProductDialog from "./ProductDialog";

export default function CreateDialog({ ...props }) {
  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <div {...props}></div>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          >
            <svg
              className="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <HoverCard>
              <HoverCardTrigger>
                Porque eu preciso escolher minha planilha ?
              </HoverCardTrigger>
              <HoverCardContent>
                <span>
                  Voçe precisa escolher sua planilha especifica para definir
                  quais dados <u>criar, deletar , ou alterar. </u>
                </span>
              </HoverCardContent>
            </HoverCard>
          </a>
        </div>
      </div>
    </>
  );
}
