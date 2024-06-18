import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeCopy from "./CodeCopy";

export const Component = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-semibold mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-8">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-8">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-xl font-semibold mt-8">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-lg font-semibold mt-8">{children}</h6>
    ),
    span: ({ children }) => <span className="bg-black">{children}</span>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "none" }}>✅ {children}</li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: "number", marginLeft: "25px" }}>
        {children}
      </li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  types: {
    code: (props) => (
      <div className="rounded-md bg-[#9DB2BF] mx-4">
        <CodeCopy myCode={props.value} />
        <SyntaxHighlighter
          language={props.value.language}
          style={nightOwl}
          wrapLongLines="true"
          customStyle={{ padding: "25px" }}
          className="rounded-b-md"
        >
          {props.value.code}
        </SyntaxHighlighter>
      </div>
    ),
  },
};
