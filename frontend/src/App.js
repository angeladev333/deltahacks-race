import logo from './logo.svg';
import './App.css';
import Article from './Article';
import Search from './components/Search'

function App() {
  const str = "Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Sheep, goats, pigs and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on subsistence agriculture. The major agricultural products can be broadly grouped into foods, fibers, fuels, and raw materials (such as rubber). Food classes include cereals(grains), vegetables, fruits, cooking oils, meat, milk, eggs, and fungi. Over one - third of the world's workers are employed in agriculture, second only to the service sector, although in recent decades, the global trend of a decreasing number of agricultural workers continues, especially in developing countries, where smallholding is being overtaken by industrial agriculture and mechanization that brings an enormous crop yield increase. Modern agronomy, plant breeding, agrochemicals such as pesticides and fertilizers, and technological developments have sharply increased crop yields, but cause ecological and environmental damage. Selective breeding and modern practices in animal husbandry have similarly increased the output of meat, but have raised concerns about animal welfare and environmental damage. Environmental issues include contributions to global warming, depletion of aquifers, deforestation, antibiotic resistance, and other agricultural pollution. Agriculture is both a cause of and sensitive to environmental degradation, such as biodiversity loss, desertification, soil degradation, and global warming, all of which can cause decreases in crop yield. Genetically modified organisms are widely used, although some are banned in certain countries.";
  return (
    <div className="App">
      {/* <Article string={str} /> */}
      <Search />
    </div>
  );
}

export default App;
