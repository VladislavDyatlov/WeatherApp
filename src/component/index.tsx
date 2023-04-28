import { Description } from "./Description/Description";
import { Main } from "./Main/main";
import { Weather } from "./Weather/Weather";

export const Index = () => {

  return (
    <div>
      <Main />
      <Weather />
      <Description />
    </div>
  );
};
