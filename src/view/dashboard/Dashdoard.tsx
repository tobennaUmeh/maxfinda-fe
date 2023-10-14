import React from "react";
import WelcomeBar from "./components/WelcomeBar";
import { DefaultPage } from "../layout/DefaulrPage";
import GridContainer from "../../components/container/GridContainer";
import GridSpan from "../../components/container/GridSpan";
import Cards from "./components/Cards";
import PostSection from "./components/PostSection";
import Contacts from "./components/Contacts";

const Dashboard: React.FC = () => {
  return (
    <DefaultPage>
      <WelcomeBar />
      <GridContainer>
        <GridSpan spanWidth={9}>
          <Cards />
          <PostSection />
        </GridSpan>
        <GridSpan spanWidth={3}>
          <Contacts />
        </GridSpan>
      </GridContainer>
    </DefaultPage>
  );
};

export default Dashboard;
