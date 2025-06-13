// Language selector component for a web application

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { LANGUAGE_VERSIONS } from "../constants";
export function Selector({ language, onSelect }) {
  return (
    <Select value={language} onValueChange={onSelect}>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {Object.entries(LANGUAGE_VERSIONS).map(([language, version]) => {
              const displayName =
                ({
                  c: "C",
                  cpp: "C++",
                  javascript: "JavaScript",
                  typescript: "TypeScript",
                  python: "Python",
                  java: "Java",
                  csharp: "C#",
                  php: "PHP",
                })[language];

              return (
                <SelectItem key={language} value={language}>
                  {displayName} ({version})
                </SelectItem>
              );
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}