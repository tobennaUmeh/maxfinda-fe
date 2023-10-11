import React from "react";
import { WelcomeBar } from "./components/WelcomBar";
import { DefaultPage } from "../layout/DefaulrPage";
import GridContainer from "../../components/container/GridContainer";
import GridSpan from "../../components/container/GridSpan";
import Cards from "./components/Cards";

const Dashboard: React.FC = () => {
  return (
    <DefaultPage>
      <WelcomeBar />
      <GridContainer>
        <GridSpan spanWidth={9}>
          <Cards />
        </GridSpan>
        <GridSpan spanWidth={3}>
          <div className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quos
            tempora fugiat harum illo qui sunt iure similique cupiditate dolores
            deleniti, voluptatem, exercitationem distinctio quas voluptatibus
            nam unde ipsam eligendi!
          </div>
        </GridSpan>
      </GridContainer>
    </DefaultPage>
  );
};

export default Dashboard;
