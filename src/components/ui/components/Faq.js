import { Disclosure } from "@headlessui/react";
import { ChevronIcon } from "../icons";
export const Faq = ({ title, children }) => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <div div className="mt-2">
            <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              {title}
              <ChevronIcon
                className={`${open ? "transform rotate-180" : ""}`}
              />
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="p-5 rounded-lg border border-purple-300 mt-2 space-y-4 text-purple-900">
                {children}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </>
  );
};
