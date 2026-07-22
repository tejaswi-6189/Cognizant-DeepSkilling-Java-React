import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Tejaswi"
        School="VIT-AP"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;