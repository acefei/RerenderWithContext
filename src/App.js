import React from "react";
import { useDataSource } from "./context";
import "./styles.css";

const Level1 = React.memo(({ children }) => {
  // const { dataSource } = useDataSource();
  // console.log("Level1 render.", dataSource);
  console.log("Level1 render.");
  return (
    <>
      <h2>Level1 show up</h2>
      {children}
    </>
  );
});

const areEqual = (prevProps, nextProps) => {
  console.log("areEqual here");
  // return true;
};

const Level2 = React.memo(({ children }) => {
  // const { dataSource } = useDataSource();
  // console.log("Level2 render.", dataSource);
  console.log("Level2 render.");
  return (
    <>
      <h2>Level2 show up</h2>
      {children}
    </>
  );
}, areEqual);

const Level3 = React.memo(() => {
  // const { dataSource } = useDataSource();
  // console.log("Level3 render.", dataSource);
  console.log("Level3 render.");
  return <h2>Level3 show up</h2>;
});

export default function App() {
  const { dataSource, setDataSource } = useDataSource();
  console.log("App", dataSource);
  return (
    <div className="App">
      <button
        onClick={() => {
          setDataSource(dataSource + 1);
        }}
      >
        change data
      </button>
      <Level1>
        <Level2>
          <Level3 />
        </Level2>
      </Level1>
    </div>
  );
}
