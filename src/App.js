// import "./App.css";
import AllRoutes from "./component/AllRoutes";

function App() {
  var ws = new WebSocket("wss://webrtc-filetransfer.herokuapp.com/");

  ws.onopen = function () {
    // Web Socket is connected, send data using send()
    var data = {
      mid: "login",
      uid: myId,
    };
    ws.send(JSON.stringify(data));
  };

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
