import './normalize.css';
import TodayActivity from './containers/TodayActivity/index'
import Header from './containers/Header/index';
import { MainWrapper, ScoreLeader, Container } from './AppElements';
import Score from './containers/Score/index'
import LeaderBoard from './components/LeaderBoard/index';

function App() {
  return (
    <MainWrapper>
      <Header />
      <Container>
        <ScoreLeader>
          <Score />
          <LeaderBoard />
        </ScoreLeader>
        <TodayActivity />
      </Container>
    </MainWrapper>
  );
}

export default App;
