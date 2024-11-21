"use client";
import React, { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { User } from "@prisma/client";

interface Props {
  users: User[];
}

const AssigneeSelectBox = ({ users }: Props) => {
  const [selected, setSelected] = useState<User>(users[0]);
  console.log("User: ", users);

  const handleChangeUser = (userId: string) => {
    const selectedUser = users.find((user) => user.id === userId);
    setSelected(selectedUser);
  };

  if (users.length === 0) {
    return null;
  }

  return (
    <Listbox value={selected.id} onChange={handleChangeUser}>
      <Label className="block text-sm font-medium leading-6 text-gray-900">
        Assigned to
      </Label>
      <div className="relative">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <span className="block truncate">{selected?.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          <ListboxOption
            value={""}
            className={
              "group relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            }
          >
            <span className="block truncate font-normal group-data-[selected]:font-semibold">
              UnAssign
            </span>

            <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
              <CheckIcon aria-hidden="true" className="h-5 w-5" />
            </span>
          </ListboxOption>
          {users?.map((user) => (
            <ListboxOption
              key={user.id}
              value={user.id}
              className="group relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {user.name}
              </span>

              <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default AssigneeSelectBox;
