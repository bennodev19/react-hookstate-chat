import * as HookState from "./hookstate";
import * as AgileTs from "./agile-ts";

const App = () => {
  return (
    <div>
      {/*<HookState.FirstPerson />*/}
      {/*<HookState.SecondPerson />*/}
      <AgileTs.advanced.FirstPerson />
      <AgileTs.advanced.SecondPerson />
    </div>
  );
};

export default App;
