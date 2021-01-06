// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Book1 from './components/book1'
import Book2 from './components/book2'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <div className="Content">
      <Navbar />
      <Book1 
        title = "The Ocean At The End Of The Lane"
        image = "https://images-na.ssl-images-amazon.com/images/I/513EmERKdxL.jpg"
        description = "Lorem ipsum dolor sit amet, debet ullamcorper his ad. Postea honestatis at vix, ne ius mollis salutatus argumentum. Sea in verterem inimicus, usu no indoctum efficiendi. Sit summo everti in, usu graeci periculis abhorreant ne. Est simul atomorum omittantur ut, vero utamur voluptatum usu an. Has esse unum recteque eu, usu diam dissentiet necessitatibus at. Sea cu amet prima blandit, te nemore praesent molestiae vix. Nobis similique elaboraret usu an, ea suscipit nominati voluptaria eum. Pro impedit honestatis an, adhuc perpetua ne mel, nec ex cibo falli."
      />
      <Book2 
        title = "The Ocean At The End Of The Lane"
        image = "https://images-na.ssl-images-amazon.com/images/I/513EmERKdxL.jpg"
        description = "Lorem ipsum dolor sit amet, debet ullamcorper his ad. Postea honestatis at vix, ne ius mollis salutatus argumentum. Sea in verterem inimicus, usu no indoctum efficiendi. Sit summo everti in, usu graeci periculis abhorreant ne. Est simul atomorum omittantur ut, vero utamur voluptatum usu an. Has esse unum recteque eu, usu diam dissentiet necessitatibus at. Sea cu amet prima blandit, te nemore praesent molestiae vix. Nobis similique elaboraret usu an, ea suscipit nominati voluptaria eum. Pro impedit honestatis an, adhuc perpetua ne mel, nec ex cibo falli."
      />
      </div>
      <Footer />

    </div>
  );
}

export default App;
