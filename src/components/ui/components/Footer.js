import { SocketIcon, NodeIcon, ReactIcon, TailwindIcon } from "../icons";

export const Footer = () => (
  <footer className="mt-auto p-5">
    <div className="flex flex-col justify-center sm:flex-row">
      <p className="flex items-center justify-center">
        <span className="mr-1">Made with </span>
        <ReactIcon className="mx-1" />
        <TailwindIcon className="mx-1" />
        <NodeIcon className="mx-1" />
        <SocketIcon className="mx-1" />
      </p>
      <p className="text-center">
        by{" "}
        <a href="https://ansango.com" target="_blank" rel="noreferrer">
          @ansango
        </a>
      </p>
    </div>
  </footer>
);
