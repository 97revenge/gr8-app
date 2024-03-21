import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({ ...props }) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Andamento" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup {...props}></SelectGroup>
      </SelectContent>
    </Select>
  );
}
