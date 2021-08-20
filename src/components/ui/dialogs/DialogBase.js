import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { modalContext } from "./DialogContex";
import { ButtonBase } from "../buttons/ButtonBase";

export const DialogBase = () => {
  const { title, description, isOpen, openModal, btnOk, btnCancel } =
    useContext(modalContext);
  console.log(btnOk);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            openModal({ isOpen: false });
          }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{description}</p>
                </div>

                <div className="mt-4">
                  {btnOk?.active && (
                    <ButtonBase onClick={() => openModal({ isOpen: false })}>
                      OK
                    </ButtonBase>
                  )}
                  {btnCancel?.active && (
                    <ButtonBase
                      kind="danger"
                      onClick={() => openModal({ isOpen: false })}
                    >
                      {btnCancel.text}
                    </ButtonBase>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
