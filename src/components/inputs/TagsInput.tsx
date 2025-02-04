"use client";

import { Chip } from "@nextui-org/chip";
import { Input } from "@nextui-org/input";
import { useState } from "react";

export const TagsInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "," || event.key === " ") {
      event.preventDefault();
      const trimmedValue = inputValue.trim().replace(",", "");

      if (trimmedValue && !tags.includes(trimmedValue)) {
        setTags([...tags, trimmedValue]);
      }

      setInputValue(""); // Limpiar input después de agregar un tag
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      <div className="flex flex-wrap gap-2 p-2 border rounded-lg">
        <Input
          variant="bordered"
          radius="sm"
          isClearable
          placeholder="Escribe y presiona Enter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={addTag}
          className="flex-grow min-w-[100px]"
        />

        {tags.map(tag => (
          <Chip
            color="default"
            variant="faded"
            key={tag}
            onClose={() => removeTag(tag)}
          >
            {tag}
          </Chip>
        ))}
      </div>
    </div>
  );
}
